import React, { useState } from 'react';

const FilterForm = ({ onFilterChange }) => {
    const [selectedGenre, setSelectedGenre] = useState('');
    const [selectedYearRange, setSelectedYearRange] = useState('all');
    const [selectedCertification, setSelectedCertification] = useState('');
    const [moviesLimit, setMoviesLimit] = useState(5);

    const genres = [
        { id: '', name: 'Nenhum' },
        { id: 28, name: 'Ação' }, { id: 12, name: 'Aventura' }, { id: 16, name: 'Animação' },
        { id: 35, name: 'Comédia' }, { id: 80, name: 'Crime' }, { id: 99, name: 'Documentário' },
        { id: 18, name: 'Drama' }, { id: 10751, name: 'Família' }, { id: 14, name: 'Fantasia' },
        { id: 36, name: 'História' }, { id: 27, name: 'Terror' }, { id: 10402, name: 'Música' },
        { id: 9648, name: 'Mistério' }, { id: 10749, name: 'Romance' }, { id: 878, name: 'Ficção Científica' },
        { id: 10770, name: 'Filme de TV' }, { id: 53, name: 'Thriller' }, { id: 10752, name: 'Guerra' },
        { id: 37, name: 'Faroeste' },
    ];

    const yearRanges = {
        'Todos': 'all', 'Anos 70': '70s', 'Anos 80': '80s', 'Anos 90': '90s',
        'Anos 2000': '2000s', 'Anos 2010': '2010s', 'Atuais (2020+)': 'current',
    };

    const certifications = ['Nenhum', 'L', '10', '12', '14', '16', '18'];
    const movieLimits = [1, 5, 10, 15, 20, 25];

    const handleSubmit = (e) => {
        e.preventDefault();
        onFilterChange({
            genre: selectedGenre === '' ? undefined : selectedGenre,
            yearRange: selectedYearRange === 'all' ? undefined : selectedYearRange,
            certification: selectedCertification === 'Nenhum' ? undefined : selectedCertification,
            limit: moviesLimit,
        });
    };

    return (
        <form onSubmit={handleSubmit} className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transition-colors duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div>
                    <label htmlFor="genre" className="block text-gray-900 text-sm font-bold mb-2 dark:text-white">Gênero:</label>
                    <select
                        id="genre"
                        className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline
                                   bg-gray-200 text-gray-900 border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600 transition-colors duration-300"
                        value={selectedGenre}
                        onChange={(e) => setSelectedGenre(e.target.value)}
                    >
                        {genres.map((genre) => (
                            <option key={genre.id} value={genre.id}>{genre.name}</option>
                        ))}
                    </select>
                </div>
                {/* ... (outros filtros com classes dark:) ... */}
                <div>
                    <label htmlFor="yearRange" className="block text-gray-900 text-sm font-bold mb-2 dark:text-white">Período:</label>
                    <select
                        id="yearRange"
                        className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline
                                   bg-gray-200 text-gray-900 border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600 transition-colors duration-300"
                        value={selectedYearRange}
                        onChange={(e) => setSelectedYearRange(e.target.value)}
                    >
                        {Object.entries(yearRanges).map(([label, value]) => (
                            <option key={value} value={value}>{label}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="certification" className="block text-gray-900 text-sm font-bold mb-2 dark:text-white">Classificação Indicativa:</label>
                    <select
                        id="certification"
                        className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline
                                   bg-gray-200 text-gray-900 border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600 transition-colors duration-300"
                        value={selectedCertification}
                        onChange={(e) => setSelectedCertification(e.target.value)}
                    >
                        {certifications.map((cert) => (
                            <option key={cert} value={cert}>{cert}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="moviesLimit" className="block text-gray-900 text-sm font-bold mb-2 dark:text-white">Quantidade de Filmes:</label>
                    <select
                        id="moviesLimit"
                        className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline
                                   bg-gray-200 text-gray-900 border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600 transition-colors duration-300"
                        value={moviesLimit}
                        onChange={(e) => setMoviesLimit(parseInt(e.target.value))}
                    >
                        {movieLimits.map((limit) => (
                            <option key={limit} value={limit}>{limit}</option>
                        ))}
                    </select>
                </div>
            </div>

            <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full
                           dark:bg-blue-700 dark:hover:bg-blue-800 transition-colors duration-300"
            >
                Recomende
            </button>
        </form>
    );
};

export default FilterForm;