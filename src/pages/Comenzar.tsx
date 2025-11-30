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

  // Datos de ejemplo para el catálogo de algoritmos
  const algoritmos = [
    {
      id: 1,
      nombre: 'Algoritmo 1',
      descripcion: 'Este es el algoritmo número 1, diseñado para resolver problemas específicos en el ámbito de la computación. Utiliza una estrategia de divide y vencerás optimizada.',
    },
    {
      id: 2,
      nombre: 'Algoritmo 2',
      descripcion: 'El Algoritmo 2 es una solución optimizada para procesamiento rápido de datos en tiempo real. Utiliza técnicas avanzadas de caché y prefetching.',
    },
    {
      id: 3,
      nombre: 'Algoritmo 3',
      descripcion: 'Algoritmo 3 ofrece la mejor precisión y rendimiento en su categoría. Basado en técnicas de machine learning y optimización heurística.',
    },
    {
      id: 4,
      nombre: 'Algoritmo 4',
      descripcion: 'El Algoritmo 4 es una solución versátil y eficiente para múltiples escenarios. Su diseño flexible permite adaptarse a diferentes tipos de problemas.',
    },
    {
      id: 5,
      nombre: 'Algoritmo 5',
      descripcion: 'Algoritmo 5 representa tecnología de última generación en computación moderna. Incorpora los últimos avances en teoría de algoritmos.',
    },
    {
      id: 6,
      nombre: 'Algoritmo 6',
      descripcion: 'El Algoritmo 6 está diseñado específicamente para escalabilidad máxima. Implementa técnicas de sharding y distribución automática de carga.',
    },
  ];

  const handleAlgoritmoClick = (id: number) => {
    navigate(`/algoritmo/${id}`);
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
      label: 'Elegir Algoritmo del Catálogo',
      content: (
        <div>
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Catálogo de Algoritmos
            </h2>
            <p className="text-gray-600">
              Aquí van a ir las cards de los catálogos. Selecciona el algoritmo
              que mejor se adapte a tus necesidades.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {algoritmos.map((algoritmo) => (
              <Card
                key={algoritmo.id}
                title={algoritmo.nombre}
                description={algoritmo.descripcion}
                onClick={() => handleAlgoritmoClick(algoritmo.id)}
                maxDescriptionLength={100}
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
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Comenzar</h1>
          <p className="text-lg text-gray-600">
            Selecciona cómo deseas continuar
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
        </div>
      </div>
    </div>
  );
};

