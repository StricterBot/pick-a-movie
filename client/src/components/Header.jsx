import React from 'react';

const Header = ({ toggleTheme, currentTheme }) => {
    return (
        <header className="bg-gray-200 p-6 shadow-md dark:bg-gray-800 transition-colors duration-300">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Fala um Filme Aí</h1>
                <button
                    onClick={toggleTheme}
                    className="p-2 rounded-full bg-gray-300 text-gray-900 dark:bg-gray-700 dark:text-white hover:bg-gray-400 dark:hover:bg-gray-600 transition-colors duration-300"
                    aria-label={`Mudar para o modo ${currentTheme === 'light' ? 'escuro' : 'claro'}`}
                >
                    {currentTheme === 'light' ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9 9 0 008.354-5.646z"></path></svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h1M3 12H2m8.003-9.127l.707-.707m-1.414 14.142l.707.707M4.93 4.93l.707.707m12.728 12.728l-.707-.707M12 7a5 5 0 100 10 5 5 0 000-10z"></path></svg>
                    )}
                </button>
            </div>
        </header>
    );
};

export default Header;