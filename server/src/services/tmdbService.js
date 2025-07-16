const axios = require('axios');

const TMDB_API_KEY = process.env.TMDB_API_KEY;
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

// (Fisher-Yates shuffle)
const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

// AINDA EM DESENVOLVIMENTO (Ultima Att: 12/07/2025)
// TO-DO: Procurar provedores de streaming afim de redirecionar para assistir. Colocar no modal do filme.
const fetchWatchProviders = async (movieId) => {
    if (!TMDB_API_KEY) {
        throw new Error('TMDB_API_KEY not defined in .env');
    }
    try {
        const response = await axios.get(`${TMDB_BASE_URL}/movie/${movieId}/watch/providers`, {
            params: { api_key: TMDB_API_KEY }
        });
// TO-DO: Retorna os provedores para o Brasil (BR) se existirem
        return response.data.results.BR || null;
    } catch (error) {
        console.warn(`Could not fetch watch providers for movie ${movieId}:`, error.message);
        return null;
    }
};

const fetchMovies = async ({ genre, yearRange, certification, limit = 5, page = 1 }) => {
    if (!TMDB_API_KEY) {
        throw new Error('TMDB_API_KEY not defined in .env');
    }

    let params = {
        api_key: TMDB_API_KEY,
        language: 'pt-BR', // Linguagem exibida, suportada pela API.
        sort_by: 'popularity.desc', 
        'vote_count.gte': 100,
        include_adult: false, // Não recomenda filmes adultos por padrão
    };

    if (genre) {
        params.with_genres = genre;
    }

    if (yearRange && yearRange !== 'all') {
        const yearMap = {
            '70s': { gte: '1970-01-01', lte: '1979-12-31' },
            '80s': { gte: '1980-01-01', lte: '1989-12-31' },
            '90s': { gte: '1990-01-01', lte: '1999-12-31' },
            '2000s': { gte: '2000-01-01', lte: '2009-12-31' },
            '2010s': { gte: '2010-01-01', lte: '2019-12-31' },
            'current': { gte: '2020-01-01' },
        };

        if (yearMap[yearRange]) {
            if (yearMap[yearRange].gte) {
                params['primary_release_date.gte'] = yearMap[yearRange].gte;
            }
            if (yearMap[yearRange].lte) {
                params['primary_release_date.lte'] = yearMap[yearRange].lte;
            }
        }
    }

    if (certification) {
        params.certification_country = 'BR';
        params.certification = certification;
    }

    let allMovies = [];
    // Define um número de páginas para buscar para criar um pool maior
    const pagesToFetch = 4; // Defini para 4 páginas para aumentar as recomendações
    const startingPage = Math.max(1, page - Math.floor(pagesToFetch / 2));

    for (let i = 0; i < pagesToFetch; i++) {
        try {
            params.page = startingPage + i;
            const response = await axios.get(`${TMDB_BASE_URL}/discover/movie`, { params });
            allMovies = allMovies.concat(response.data.results);
        } catch (error) {
            console.warn(`Could not fetch page ${startingPage + i} from TMDb:`, error.message);
        }
    }

    // Remove duplicatas baseadas no ID do filme
    const uniqueMovies = Array.from(new Map(allMovies.map(movie => [movie.id, movie])).values());

    const shuffledMovies = shuffleArray(uniqueMovies);
    const selectedMovies = shuffledMovies.slice(0, parseInt(limit, 10)); //Define o limite desejado na pool

    const moviesWithDetails = await Promise.all(
        selectedMovies.map(async (movie) => {
            let certificationValue = 'N/A';
            try {
                const releaseDatesRes = await axios.get(`${TMDB_BASE_URL}/movie/${movie.id}/release_dates`, {
                    params: { api_key: TMDB_API_KEY }
                });
                const brRelease = releaseDatesRes.data.results.find(r => r.iso_3166_1 === 'BR');
                if (brRelease) {
                    const cert = brRelease.release_dates.find(d => d.certification !== '')?.certification;
                    if (cert) certificationValue = cert;
                }
            } catch (detailError) {
                console.warn(`Could not fetch release dates for movie ${movie.id}:`, detailError.message);
            }
            return { ...movie, certification: certificationValue };
        })
    );

    return moviesWithDetails;
};

const fetchGenres = async () => {
    if (!TMDB_API_KEY) {
        throw new Error('TMDB_API_KEY not defined in .env');
    }
    try {
        const response = await axios.get(`${TMDB_BASE_URL}/genre/movie/list`, {
            params: {
                api_key: TMDB_API_KEY,
                language: 'pt-BR',
            },
        });
        return response.data.genres;
    } catch (error) {
        console.error('Error fetching genres from TMDb:', error.response ? error.response.data : error.message);
        throw error;
    }
};

module.exports = {
    fetchMovies,
    fetchGenres,
};