// src/componets/WeatherDetail.js
import React from 'react';

// Requisito LO5: Este es el componente ITEM, demuestra comunicación vía PROPS
const WeatherDetail = ({ label, value, unit = '' }) => {
  return (
    <div className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
      <span className="text-gray-600 font-medium">{label}</span>
      <span className="text-lg font-semibold text-gray-800">
        {value} {unit}
      </span>
    </div>
  );
};

export default WeatherDetail;