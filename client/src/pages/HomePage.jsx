import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import FilterForm from '../components/FilterForm';
import MovieCard from '../components/MovieCard';
import MovieDetailsModal from '../components/MovieDetailsModal';
import axios from 'axios';

const HomePage = ({ toggleTheme, currentTheme }) => { // <--- RECEBE AS PROPS AQUI
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [currentFilters, setCurrentFilters] = useState({});
    const [randomSeed, setRandomSeed] = useState(0);

    const [selectedMovie, setSelectedMovie] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const fetchMovies = async (filters, page = 1) => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get('http://localhost:3001/api/movies', {
                params: {
                    ...filters,
                    page: page,
                },
            });
            setMovies(response.data);
        } catch (err) {
            setError('Não foi possível carregar os filmes. Tente novamente mais tarde.');
            console.error('Erro ao buscar filmes:', err);
        } finally {
            setLoading(false);
        }
    };

    const handleFilterChange = (newFilters) => {
        setCurrentFilters(newFilters);
        setRandomSeed(Math.floor(Math.random() * 500) + 1);
    };

    const handleMovieClick = (movie) => {
        setSelectedMovie(movie);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setSelectedMovie(null);
        setIsModalOpen(false);
    };

    useEffect(() => {
        fetchMovies(currentFilters, randomSeed);
    }, [currentFilters, randomSeed]);

    return (
        // Fundo principal da página
        <div className="min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300">
            <Header toggleTheme={toggleTheme} currentTheme={currentTheme} /> {/* Passa as props */}
            <main className="container mx-auto p-4 mt-8">
                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-center mb-4 text-gray-900 dark:text-white">Encontre seu próximo filme!</h2>
                    <FilterForm onFilterChange={handleFilterChange} />
                </section>

                <hr className="border-gray-300 my-8 dark:border-gray-700" />

                <section>
                    <h2 className="text-2xl font-bold text-center mb-4 text-gray-900 dark:text-white">Filmes Recomendados</h2>
                    {loading && <p className="text-center text-xl text-gray-900 dark:text-white">Carregando filmes...</p>}
                    {error && <p className="text-center text-red-500 text-xl">
                        {error}
                    </p>}
                    {!loading && !error && movies.length === 0 && (
                        <p className="text-center text-xl text-gray-900 dark:text-white">Nenhum filme encontrado com os filtros selecionados.</p>
                    )}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                        {movies.map((movie) => (
                            <MovieCard
                                key={movie.id}
                                movie={movie}
                                onMovieClick={handleMovieClick}
                            />
                        ))}
                    </div>
                </section>
            </main>

            {isModalOpen && (
                <MovieDetailsModal
                    movie={selectedMovie}
                    onClose={handleCloseModal}
                />
            )}
        </div>
    );
};

export default HomePage;