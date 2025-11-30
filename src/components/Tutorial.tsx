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
    title: '¿Qué es Git?',
    content: 'Git es un sistema de control de versiones distribuido que te permite rastrear cambios en tu código a lo largo del tiempo. Creado por Linus Torvalds en 2005, Git se ha convertido en el estándar de la industria para el desarrollo de software colaborativo. Con Git, puedes mantener un historial completo de tu proyecto, trabajar en diferentes características simultáneamente mediante ramas, y colaborar con otros desarrolladores de manera eficiente. Cada desarrollador tiene una copia completa del repositorio, lo que permite trabajar sin conexión y proporciona redundancia natural.',
  },
  {
    id: 2,
    title: 'Conceptos Fundamentales',
    content: 'Git maneja tres áreas principales: el Working Directory (directorio de trabajo), el Staging Area (área de preparación) y el Repository (repositorio). El Working Directory es donde editas tus archivos. El Staging Area es donde preparas los cambios que quieres confirmar. El Repository es donde Git almacena permanentemente los cambios confirmados. Además, existen conceptos clave como commits (instantáneas de tu proyecto), branches (ramas para desarrollo paralelo), y merges (fusión de ramas). Entender estas áreas y conceptos es fundamental para usar Git efectivamente.',
  },
  {
    id: 3,
    title: 'Flujo de Trabajo Básico',
    content: 'El flujo de trabajo típico en Git sigue estos pasos: 1) Modificas archivos en tu directorio de trabajo. 2) Agregas selectivamente los cambios que quieres incluir al staging area usando "git add". 3) Confirmas los cambios con "git commit", creando una instantánea permanente en tu repositorio local. 4) Sincronizas tus cambios con un repositorio remoto usando "git push". Para obtener cambios de otros, usas "git pull". Este ciclo se repite constantemente durante el desarrollo. Es importante escribir mensajes de commit descriptivos que expliquen qué cambios se realizaron y por qué.',
  },
  {
    id: 4,
    title: 'Trabajo Colaborativo',
    content: 'Git facilita el trabajo en equipo mediante ramas y repositorios remotos como GitHub, GitLab o Bitbucket. Cada desarrollador puede crear ramas para trabajar en nuevas características sin afectar el código principal. Los Pull Requests permiten revisar código antes de integrarlo. Los conflictos ocurren cuando dos personas modifican las mismas líneas de código, pero Git proporciona herramientas para resolverlos. Estrategias como Git Flow definen cómo organizar ramas (main, develop, feature, hotfix). La clave es comunicación, commits frecuentes con mensajes claros, y revisión de código constante.',
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

