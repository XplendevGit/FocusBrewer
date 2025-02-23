/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}", // Solo busca dentro de la carpeta 'app' y sus subcarpetas
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: '#6F4E37', // Café principal
        secondary: '#D2691E', // Café claro
        background: '#FFF5EE', // Fondo cálido
        text: '#2E2E2E', // Texto principal
        accent: '#87CEFA', // Azul para detalles
        success: '#4CAF50', // Verde para mensajes positivos
        error: '#FF4C4C', // Rojo para errores
      },
    },
  },
  plugins: [],
};
