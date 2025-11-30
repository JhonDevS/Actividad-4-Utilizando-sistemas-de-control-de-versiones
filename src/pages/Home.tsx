import { useState } from 'react';
import { Button, Tutorial } from '../components';

/**
 * Página principal de la aplicación con tutorial introductorio
 * 
 * :returns: Componente de la página Home
 */
export const Home = () => {
  const [showTutorial, setShowTutorial] = useState(false);

  const handleStartTutorial = () => {
    setShowTutorial(true);
  };

  const handleCompleteTutorial = () => {
    setShowTutorial(false);
  };

  if (showTutorial) {
    return <Tutorial onComplete={handleCompleteTutorial} />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 p-8">
      <div className="text-center space-y-8 max-w-2xl">
        {/* Logo o título principal */}
        <div className="space-y-4">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-pulse">
            Bienvenido
          </h1>
          <p className="text-xl text-gray-600">
            Aprende de Git
          </p>
        </div>

        {/* Icono decorativo */}
        <div className="flex justify-center">
          <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-2xl">
            <svg
              className="w-16 h-16 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
        </div>

        {/* Botón de comenzar */}
        <div className="pt-8">
          <Button
            variant="primary"
            size="lg"
            onClick={handleStartTutorial}
            className="px-12 py-4 text-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Comenzar
          </Button>
        </div>

        {/* Descripción adicional */}
        <p className="text-sm text-gray-500 max-w-md mx-auto">
          Haz clic en el botón para iniciar el tutorial interactivo sobre
          Git y aprender los conceptos fundamentales del control de versiones
        </p>
      </div>
    </div>
  );
};
