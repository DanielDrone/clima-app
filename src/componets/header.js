

// src/componets/header.js

import React, { useState } from 'react';

// Recibe la función de cambio de ciudad (onCityChange) como PROPS
const Header = ({ onCityChange, currentCity }) => {
  const [inputCity, setInputCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputCity.trim()) {
      onCityChange(inputCity.trim());
      setInputCity(''); // Limpiar el campo
    }
  };

  return (
    <header className="bg-blue-600 shadow-md p-4">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <h1 className="text-3xl font-bold text-white mb-3 sm:mb-0">
          Dashboard de Clima 🌡️
        </h1>
        
        {/* Formulario de búsqueda de ciudad */}
        <form onSubmit={handleSubmit} className="flex w-full sm:w-auto">
          <input
            type="text"
            value={inputCity}
            onChange={(e) => setInputCity(e.target.value)}
            placeholder={`Buscar otra ciudad (actual: ${currentCity})`}
            className="p-2 border border-blue-400 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-300 w-full"
          />
          <button
            type="submit"
            className="bg-blue-800 text-white p-2 rounded-r-lg hover:bg-blue-900 transition duration-150"
          >
            Buscar
          </button>
        </form>
      </div>
    </header>
  );
};

export default Header;