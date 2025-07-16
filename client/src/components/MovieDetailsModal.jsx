import React from 'react';
import ReactDOM from 'react-dom';

const MovieDetailsModal = ({ movie, onClose }) => {
    if (!movie) return null;

    const TMDB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original';
    const imageUrl = movie.poster_path
        ? `${TMDB_IMAGE_BASE_URL}${movie.poster_path}`
        : 'https://via.placeholder.com/400x600?text=Sem+Imagem';

    const backdropUrl = movie.backdrop_path
        ? `${TMDB_IMAGE_BASE_URL}${movie.backdrop_path}`
        : null;

    const formattedVoteAverage = movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A';

    const renderProviders = (providers, type) => {
        if (!providers || !providers[type] || providers[type].length === 0) {
            return null;
        }
        return (
            <div className="mb-3">
                <h4 className="text-md font-semibold text-gray-300">{type === 'flatrate' ? 'Streaming:' : type === 'rent' ? 'Alugar:' : 'Comprar:'}</h4>
                <div className="flex flex-wrap gap-2 mt-1">
                    {providers[type].map(provider => (
                        <img
                            key={provider.provider_id}
                            src={`https://image.tmdb.org/t/p/original${provider.logo_path}`}
                            alt={provider.provider_name}
                            title={provider.provider_name}
                            className="w-10 h-10 rounded-lg border border-gray-600"
                        />
                    ))}
                </div>
            </div>
        );
    };

    const hasProviders = movie.watchProviders && (
        movie.watchProviders.flatrate?.length > 0 ||
        movie.watchProviders.rent?.length > 0 ||
        movie.watchProviders.buy?.length > 0
    );

    // O conteúdo do modal agora é embrulhado por ReactDOM.createPortal
    return ReactDOM.createPortal(
        <div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            onClick={onClose}
        >
            <div
                className="bg-gray-800 rounded-lg shadow-2xl relative w-full max-w-4xl max-h-[90vh] overflow-y-auto flex flex-col md:flex-row transform scale-95 transition-transform duration-300"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-white text-2xl font-bold bg-gray-700 rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-600 z-10"
                >
                    &times;
                </button>

                <div className="md:w-1/3 flex-shrink-0 relative">
                    <img
                        src={imageUrl}
                        alt={movie.title}
                        className="w-full h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
                    />
                    {backdropUrl && (
                        <div className="absolute inset-0 bg-cover bg-center opacity-20 hidden md:block" style={{ backgroundImage: `url(${backdropUrl})` }}></div>
                    )}
                </div>

                <div className="md:w-2/3 p-6 text-white flex flex-col">
                    <h2 className="text-3xl font-bold mb-3">{movie.title}</h2>
                    <p className="text-gray-300 text-lg mb-2">{movie.tagline}</p>
                    <p className="text-gray-400 text-md mb-2">
                        Ano: {movie.release_date ? movie.release_date.substring(0, 4) : 'N/A'}
                    </p>
                    <p className="text-gray-400 text-md mb-2">
                        Classificação: {movie.certification || 'N/A'}
                    </p>
                    <p className="text-gray-400 text-md mb-4">
                        Avaliação: ⭐ {formattedVoteAverage} / 10 ({movie.vote_count} votos)
                    </p>
                    <p className="text-gray-300 mb-6 flex-grow">{movie.overview || 'Sinopse não disponível.'}</p>

                    <div className="mt-auto pt-4 border-t border-gray-700">
                        <h3 className="text-xl font-bold text-white mb-3">Onde Assistir:</h3>
                        {movie.watchProviders && movie.watchProviders.link && (
                            <a
                                href={movie.watchProviders.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:underline text-sm mb-3 block"
                            >
                                Ver mais opções no JustWatch
                            </a>                                                                    // <- Onde assitir link
                        )}
                        {renderProviders(movie.watchProviders, 'flatrate')}
                        {renderProviders(movie.watchProviders, 'rent')}
                        {renderProviders(movie.watchProviders, 'buy')}

                        {!hasProviders ? (
                            <p className="text-gray-500 text-sm">
                                Ainda em produção XD
                            </p>
                        ) : null}
                    </div>
                </div>
            </div>
        </div>,
        document.getElementById('modal-root')
    );
};

export default MovieDetailsModal;