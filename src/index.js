// src/index.js

import React from 'react';
// Usamos createRoot, el API moderno de React 18
import { createRoot } from 'react-dom/client'; 

import App from './App'; // Importa el componente Dashboard (App.js)
// Importa tus estilos globales (si los tienes)
import './index.css'; 
// NOTA: Si usas Tailwind CSS, asegúrate de que esté configurado en tu proyecto. 
// Para este código, asumimos que Tailwind CSS está disponible para las clases de estilo.


// 1. Encontrar el elemento DOM raíz
const container = document.getElementById('root'); 

// 2. Crear el Root (Raíz) de React
const root = createRoot(container); 

// 3. Renderizar el componente principal
// React.StrictMode ayuda a encontrar problemas de código en desarrollo
root.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>
);

