import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Tabs, Card, Button, RichTextEditor, type TabItem } from '../components';

/**
 * Página de Comenzar con tabs para selección de algoritmo o entrada manual
 * 
 * :returns: Componente de la página Comenzar
 */
export const Comenzar = () => {
  const [activeTab, setActiveTab] = useState('catalogo');
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  // Comandos de Git para el catálogo
  const comandosGit = [
    {
      id: 1,
      nombre: 'git init',
      descripcion: 'Inicializa un nuevo repositorio Git en el directorio actual. Este comando crea una carpeta oculta .git que contiene toda la estructura necesaria para el control de versiones. Es el primer paso para comenzar a usar Git en un proyecto nuevo.',
    },
    {
      id: 2,
      nombre: 'git clone',
      descripcion: 'Clona un repositorio remoto existente en tu máquina local. Descarga todo el historial del proyecto y crea una copia completa del repositorio. Es útil cuando quieres contribuir a un proyecto existente o trabajar en una copia de un repositorio remoto.',
    },
    {
      id: 3,
      nombre: 'git add',
      descripcion: 'Agrega archivos al área de staging (preparación). Este comando marca los cambios que quieres incluir en tu próximo commit. Puedes agregar archivos específicos, directorios completos, o usar patrones para seleccionar múltiples archivos a la vez.',
    },
    {
      id: 4,
      nombre: 'git commit',
      descripcion: 'Confirma los cambios del staging area y los guarda en el repositorio local. Cada commit crea una instantánea permanente de tu proyecto con un mensaje descriptivo. Los commits son la unidad básica del historial de Git y deben ser atómicos y con mensajes claros.',
    },
    {
      id: 5,
      nombre: 'git push',
      descripcion: 'Envía tus commits locales a un repositorio remoto. Este comando sincroniza tu trabajo con el servidor, permitiendo que otros desarrolladores accedan a tus cambios. Es importante hacer pull antes de push para evitar conflictos con cambios remotos.',
    },
    {
      id: 6,
      nombre: 'git pull',
      descripcion: 'Descarga y fusiona cambios del repositorio remoto a tu rama actual. Es una combinación de git fetch (descarga) y git merge (fusiona). Mantiene tu repositorio local actualizado con los últimos cambios del equipo y es fundamental en el trabajo colaborativo.',
    },
  ];

  const handleComandoClick = (id: number) => {
    navigate(`/comando/${id}`);
  };

  const handleInputSubmit = () => {
    // Remover tags HTML para verificar si hay contenido
    const textContent = inputValue.replace(/<[^>]*>/g, '').trim();
    if (textContent) {
      alert(`Contenido procesado: ${textContent.substring(0, 100)}...`);
      // Implementar lógica para procesar el input
    } else {
      alert('Por favor, ingresa algún contenido antes de procesar');
    }
  };

  const tabs: TabItem[] = [
    {
      id: 'catalogo',
      label: 'Comandos de Git',
      content: (
        <div>
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Catálogo de Comandos Git
            </h2>
            <p className="text-gray-600">
              Explora los comandos más importantes de Git. Haz clic en
              cualquier comando para ver su descripción completa y un diagrama
              de flujo interactivo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {comandosGit.map((comando) => (
              <Card
                key={comando.id}
                title={comando.nombre}
                description={comando.descripcion}
                onClick={() => handleComandoClick(comando.id)}
                maxDescriptionLength={120}
                showViewMore={true}
              />
            ))}
          </div>
        </div>
      ),
    },
    {
      id: 'manual',
      label: 'Entrada Manual',
      content: (
        <div>
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Entrada Manual
            </h2>
            <p className="text-gray-600">
              Ingresa manualmente los datos que deseas procesar. Usa el editor
              para dar formato a tu contenido.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Editor de texto
              </label>
              <RichTextEditor
                content={inputValue}
                onChange={setInputValue}
                placeholder="Escribe aquí tu contenido... Puedes usar las herramientas de formato en la barra superior."
              />
            </div>

            <div className="flex gap-4">
              <Button
                variant="primary"
                size="lg"
                onClick={handleInputSubmit}
                className="flex-1 sm:flex-none"
              >
                Procesar
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => setInputValue('')}
              >
                Limpiar
              </Button>
            </div>

            {inputValue && inputValue !== '<p></p>' && (
              <div className="mt-6 p-6 bg-blue-50 rounded-lg border border-blue-200">
                <h3 className="font-semibold text-gray-900 mb-3 text-lg">
                  Vista previa del contenido:
                </h3>
                <div
                  className="prose max-w-none text-gray-700"
                  dangerouslySetInnerHTML={{ __html: inputValue }}
                />
              </div>
            )}
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Aprende Git</h1>
          <p className="text-lg text-gray-600">
            Explora comandos o practica con el editor
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
        </div>
      </div>
    </div>
  );
};

