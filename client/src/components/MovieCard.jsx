import React from 'react';

// O MovieCard agora recebe uma prop `onMovieClick`
const MovieCard = ({ movie, onMovieClick }) => {
    const TMDB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

    const imageUrl = movie.poster_path
        ? `${TMDB_IMAGE_BASE_URL}${movie.poster_path}`
        : 'https://via.placeholder.com/200x300?text=Sem+Imagem';

    const formattedVoteAverage = movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A';

    return (
        <div
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 duration-300 cursor-pointer"
            onClick={() => onMovieClick(movie)} // Chama a função quando o card é clicado e abre o Modal (MovieDetailsModal)
        >
            <img src={imageUrl} alt={movie.title} className="w-full h-72 object-cover" />
            <div className="p-4">
                <h3 className="text-xl font-semibold text-white mb-2 truncate">{movie.title}</h3>
                <p className="text-gray-400 text-sm">
                    Ano: {movie.release_date ? movie.release_date.substring(0, 4) : 'N/A'}
                </p>
                <p className="text-gray-400 text-sm">
                    Classificação: {movie.certification || 'N/A'}
                </p>
                <p className="text-gray-400 text-sm">
                    Avaliação: ⭐ {formattedVoteAverage} / 10
                </p>
                <p className="text-gray-400 text-sm mt-2 line-clamp-3">
                    {movie.overview || 'Sinopse não disponível.'}
                </p>
                {/* A seção Onde Assistir foi removida daqui e será movida para o modal */}
            </div>
        </div>
    );
};

export default MovieCard;