// src/api/weatherApi.js (Ejemplo Básico)
const API_KEY = '74c1f7f40d0dfcfaf29c5553bc657728'; // Usa una variable de entorno si puedes
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const fetchWeatherData = async (city) => {
  const url = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric&lang=es`;
  
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('No se pudo obtener el clima para ' + city);
  }
  return response.json();
};