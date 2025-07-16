const tmdbService = require('../services/tmdbService');

const getMovies = async (req, res) => {
    try {
        const { genre, yearRange, certification, limit } = req.query; // Isso aqui puxa os resultados baseado nos valores dos filtros (Dá pra melhorar)
        const movies = await tmdbService.fetchMovies({ genre, yearRange, certification, limit });
        res.json(movies);
    } catch (error) {
        console.error('Error in getMovies controller:', error);
        res.status(500).json({ message: 'Error fetching movies', error: error.message });
    }
};

const getGenres = async (req, res) => {
    try {
        const genres = await tmdbService.fetchGenres();
        res.json(genres);
    } catch (error) {
        console.error('Error in getGenres controller:', error);
        res.status(500).json({ message: 'Error fetching genres', error: error.message });
    }
};

module.exports = {
    getMovies,
    getGenres,
};