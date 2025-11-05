// src/componets/WeatherCard.js
import React from 'react';
import WeatherDetail from './WeatherDetail'; // Importa el componente Item

// Requisito LO5: Este es el componente LIST, recibe la prop 'data' de App.js
const WeatherCard = ({ data }) => {
  // Manejo de carga (aunque App.js ya lo maneja, es buena práctica)
  if (!data || !data.main) {
    return (
      <div className="text-center p-4 text-gray-500">
        Esperando datos del clima...
      </div>
    );
  }

  // Desestructuración de datos para mayor legibilidad
  const { main, wind, weather } = data;
  const temp = Math.round(main.temp);
  const feels_like = Math.round(main.feels_like);
  const description = weather[0]?.description || 'Sin descripción';
  const iconCode = weather[0]?.icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-2xl transition duration-500 hover:shadow-3xl">
      <div className="p-6 bg-gradient-to-r from-blue-400 to-blue-600 text-white flex justify-between items-center">
        <div>
          <h2 className="text-4xl font-bold">{temp}°C</h2>
          <p className="text-xl mt-1 capitalize">{description}</p>
        </div>
        
        {/* Ícono del Clima */}
        <img 
          src={iconUrl} 
          alt={description} 
          className="w-20 h-20"
          onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/80x80/93c5fd/ffffff?text=?" }}
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-gray-700 border-b pb-2">Detalles Adicionales</h3>
        
        {/* Requisito LO5: Demostración de comunicación entre List (WeatherCard) e Item (WeatherDetail) */}
        
        {/* ITEM 1 */}
        <WeatherDetail 
          label="Sensación Térmica" 
          value={feels_like} 
          unit="°C" 
        />
        
        {/* ITEM 2 */}
        <WeatherDetail 
          label="Humedad" 
          value={main.humidity} 
          unit="%" 
        />
        
        {/* ITEM 3 */}
        <WeatherDetail 
          label="Presión Atmosférica" 
          value={main.pressure} 
          unit="hPa" 
        />

        {/* ITEM 4 (viento) */}
        <WeatherDetail 
          label="Velocidad del Viento" 
          value={wind.speed} 
          unit="m/s" 
        />
      </div>
    </div>
  );
};

export default WeatherCard;