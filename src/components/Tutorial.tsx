import { useState } from 'react';
import { Button } from './Button';

interface TutorialStep {
  id: number;
  title: string;
  content: string;
}

const tutorialSteps: TutorialStep[] = [
  {
    id: 1,
    title: 'Paso 1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
  },
  {
    id: 2,
    title: 'Paso 2',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
  },
  {
    id: 3,
    title: 'Paso 3',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.',
  },
  {
    id: 4,
    title: 'Paso 4',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi.',
  },
];

interface TutorialProps {
  onComplete: () => void;
}

/**
 * Componente de tutorial introductorio con múltiples pasos
 * 
 * :param onComplete: Función que se ejecuta al completar el tutorial
 * :returns: Componente de tutorial con navegación entre pasos
 */
export const Tutorial = ({ onComplete }: TutorialProps) => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < tutorialSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const currentStepData = tutorialSteps[currentStep];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-3xl w-full">
        {/* Indicadores de pasos */}
        <div className="flex justify-center mb-8 gap-3">
          {tutorialSteps.map((step, index) => (
            <div
              key={step.id}
              className={`flex items-center ${
                index < tutorialSteps.length - 1 ? 'flex-1' : ''
              }`}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${
                  index === currentStep
                    ? 'bg-blue-600 text-white scale-110 shadow-lg'
                    : index < currentStep
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-300 text-gray-600'
                }`}
              >
                {index < currentStep ? '✓' : index + 1}
              </div>
              {index < tutorialSteps.length - 1 && (
                <div
                  className={`flex-1 h-1 mx-2 transition-all duration-300 ${
                    index < currentStep ? 'bg-green-500' : 'bg-gray-300'
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Contenido del paso actual */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 transform transition-all duration-500">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {currentStepData.title}
          </h2>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            {currentStepData.content}
          </p>

          {/* Botones de navegación */}
          <div className="flex items-center justify-between gap-4">
            <Button
              variant="secondary"
              size="lg"
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className="disabled:opacity-50 disabled:cursor-not-allowed"
            >
              ← Anterior
            </Button>

            <div className="text-sm text-gray-500">
              {currentStep + 1} de {tutorialSteps.length}
            </div>

            <Button
              variant="primary"
              size="lg"
              onClick={handleNext}
              className="flex items-center gap-2"
            >
              {currentStep === tutorialSteps.length - 1 ? (
                <>Finalizar ✓</>
              ) : (
                <>
                  Siguiente
                  <svg
                    className="w-5 h-5 animate-pulse"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </>
              )}
            </Button>
          </div>
        </div>

        {/* Botón para saltar tutorial */}
        <div className="text-center mt-6">
          <button
            onClick={onComplete}
            className="text-gray-600 hover:text-gray-900 underline transition-colors"
          >
            Saltar tutorial
          </button>
        </div>
      </div>
    </div>
  );
};

