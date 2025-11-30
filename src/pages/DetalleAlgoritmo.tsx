import { useParams, useNavigate } from 'react-router-dom';
import { Section, GraphVisualization, Button } from '../components';

// Datos de ejemplo para algoritmos
const algoritmosData: Record<string, {
  id: number;
  nombre: string;
  descripcionCompleta: string;
  grafo: {
    nodes: Array<{
      id: string;
      data: { label: string };
      position: { x: number; y: number };
    }>;
    edges: Array<{
      id: string;
      source: string;
      target: string;
      label?: string;
      animated?: boolean;
    }>;
  };
}> = {
  '1': {
    id: 1,
    nombre: 'Algoritmo 1',
    descripcionCompleta: `Este es el algoritmo número 1, diseñado para resolver problemas específicos en el ámbito de la computación. 
    
    El algoritmo utiliza una estrategia de divide y vencerás, donde el problema principal se subdivide en problemas más pequeños y manejables. Cada subproblema se resuelve de forma independiente y luego se combinan las soluciones parciales para obtener la solución final.
    
    Características principales:
    - Complejidad temporal: O(n log n)
    - Complejidad espacial: O(n)
    - Estabilidad: Sí
    - Tipo: Recursivo
    
    Este algoritmo es particularmente útil cuando se trabaja con grandes conjuntos de datos que requieren ordenamiento o búsqueda eficiente. Su implementación recursiva permite una comprensión intuitiva del proceso, aunque en algunos casos puede requerir optimización para evitar desbordamientos de pila.`,
    grafo: {
      nodes: [
        { id: '1', data: { label: 'Inicio' }, position: { x: 250, y: 0 } },
        { id: '2', data: { label: 'Proceso A' }, position: { x: 100, y: 100 } },
        { id: '3', data: { label: 'Proceso B' }, position: { x: 400, y: 100 } },
        { id: '4', data: { label: 'Decisión' }, position: { x: 250, y: 200 } },
        { id: '5', data: { label: 'Resultado 1' }, position: { x: 100, y: 300 } },
        { id: '6', data: { label: 'Resultado 2' }, position: { x: 400, y: 300 } },
        { id: '7', data: { label: 'Fin' }, position: { x: 250, y: 400 } },
      ],
      edges: [
        { id: 'e1-2', source: '1', target: '2', animated: true },
        { id: 'e1-3', source: '1', target: '3', animated: true },
        { id: 'e2-4', source: '2', target: '4', label: 'Camino A' },
        { id: 'e3-4', source: '3', target: '4', label: 'Camino B' },
        { id: 'e4-5', source: '4', target: '5', label: 'Si' },
        { id: 'e4-6', source: '4', target: '6', label: 'No' },
        { id: 'e5-7', source: '5', target: '7' },
        { id: 'e6-7', source: '6', target: '7' },
      ],
    },
  },
  '2': {
    id: 2,
    nombre: 'Algoritmo 2',
    descripcionCompleta: `El Algoritmo 2 es una solución optimizada para procesamiento rápido de datos en tiempo real.
    
    Utiliza técnicas avanzadas de caché y prefetching para minimizar la latencia en operaciones críticas. Su diseño modular permite escalabilidad horizontal, haciéndolo ideal para sistemas distribuidos.
    
    Características principales:
    - Complejidad temporal: O(1) amortizado
    - Complejidad espacial: O(log n)
    - Paralelizable: Sí
    - Tolerante a fallos: Sí
    
    El algoritmo implementa un sistema de cola con prioridades que garantiza que las operaciones más críticas se procesen primero, manteniendo al mismo tiempo un rendimiento óptimo para el resto de operaciones.`,
    grafo: {
      nodes: [
        { id: '1', data: { label: 'Entrada' }, position: { x: 250, y: 0 } },
        { id: '2', data: { label: 'Caché' }, position: { x: 250, y: 100 } },
        { id: '3', data: { label: 'Validar' }, position: { x: 250, y: 200 } },
        { id: '4', data: { label: 'Procesar' }, position: { x: 250, y: 300 } },
        { id: '5', data: { label: 'Salida' }, position: { x: 250, y: 400 } },
      ],
      edges: [
        { id: 'e1-2', source: '1', target: '2', animated: true },
        { id: 'e2-3', source: '2', target: '3' },
        { id: 'e3-4', source: '3', target: '4' },
        { id: 'e4-5', source: '4', target: '5', animated: true },
      ],
    },
  },
  '3': {
    id: 3,
    nombre: 'Algoritmo 3',
    descripcionCompleta: `Algoritmo 3 ofrece la mejor precisión y rendimiento en su categoría.
    
    Basado en técnicas de machine learning y optimización heurística, este algoritmo aprende de patrones históricos para mejorar continuamente su precisión. Incorpora mecanismos de validación cruzada y ajuste automático de hiperparámetros.
    
    Características principales:
    - Precisión: 99.8%
    - Tiempo de entrenamiento: O(n²)
    - Tiempo de inferencia: O(log n)
    - Adaptativo: Sí
    
    Ideal para aplicaciones donde la precisión es crítica y se dispone de datos históricos suficientes para el entrenamiento del modelo.`,
    grafo: {
      nodes: [
        { id: '1', data: { label: 'Dataset' }, position: { x: 250, y: 0 } },
        { id: '2', data: { label: 'Preprocesar' }, position: { x: 150, y: 100 } },
        { id: '3', data: { label: 'Entrenar' }, position: { x: 350, y: 100 } },
        { id: '4', data: { label: 'Validar' }, position: { x: 250, y: 200 } },
        { id: '5', data: { label: 'Optimizar' }, position: { x: 150, y: 300 } },
        { id: '6', data: { label: 'Modelo' }, position: { x: 350, y: 300 } },
      ],
      edges: [
        { id: 'e1-2', source: '1', target: '2' },
        { id: 'e1-3', source: '1', target: '3' },
        { id: 'e2-4', source: '2', target: '4', animated: true },
        { id: 'e3-4', source: '3', target: '4', animated: true },
        { id: 'e4-5', source: '4', target: '5', label: 'Ajustar' },
        { id: 'e5-6', source: '5', target: '6' },
      ],
    },
  },
  '4': {
    id: 4,
    nombre: 'Algoritmo 4',
    descripcionCompleta: `El Algoritmo 4 es una solución versátil y eficiente para múltiples escenarios.
    
    Su diseño flexible permite adaptarse a diferentes tipos de problemas mediante configuración de parámetros. Implementa estrategias de backtracking y programación dinámica para optimizar la búsqueda de soluciones.
    
    Características principales:
    - Versatilidad: Alta
    - Configurabilidad: Completa
    - Complejidad: O(n * m)
    - Memoria: Optimizada
    
    Perfecto para sistemas que requieren flexibilidad sin sacrificar rendimiento.`,
    grafo: {
      nodes: [
        { id: '1', data: { label: 'Config' }, position: { x: 250, y: 0 } },
        { id: '2', data: { label: 'Inicializar' }, position: { x: 250, y: 100 } },
        { id: '3', data: { label: 'Iterar' }, position: { x: 250, y: 200 } },
        { id: '4', data: { label: 'Evaluar' }, position: { x: 100, y: 300 } },
        { id: '5', data: { label: 'Backtrack' }, position: { x: 400, y: 300 } },
        { id: '6', data: { label: 'Solución' }, position: { x: 250, y: 400 } },
      ],
      edges: [
        { id: 'e1-2', source: '1', target: '2' },
        { id: 'e2-3', source: '2', target: '3', animated: true },
        { id: 'e3-4', source: '3', target: '4' },
        { id: 'e4-5', source: '4', target: '5', label: 'No óptimo' },
        { id: 'e5-3', source: '5', target: '3', animated: true },
        { id: 'e4-6', source: '4', target: '6', label: 'Óptimo' },
      ],
    },
  },
  '5': {
    id: 5,
    nombre: 'Algoritmo 5',
    descripcionCompleta: `Algoritmo 5 representa tecnología de última generación en computación moderna.
    
    Incorpora los últimos avances en teoría de algoritmos, incluyendo técnicas cuánticas simuladas y optimización multiobjetivo. Su arquitectura modular permite extensiones y personalizaciones avanzadas.
    
    Características principales:
    - Tecnología: Cutting-edge
    - Escalabilidad: Infinita
    - Eficiencia energética: Alta
    - Innovación: Máxima
    
    Diseñado para aplicaciones del futuro donde los límites tradicionales no aplican.`,
    grafo: {
      nodes: [
        { id: '1', data: { label: 'Input' }, position: { x: 250, y: 0 } },
        { id: '2', data: { label: 'Quantum Layer' }, position: { x: 150, y: 100 } },
        { id: '3', data: { label: 'Neural Net' }, position: { x: 350, y: 100 } },
        { id: '4', data: { label: 'Fusion' }, position: { x: 250, y: 200 } },
        { id: '5', data: { label: 'Optimize' }, position: { x: 250, y: 300 } },
        { id: '6', data: { label: 'Output' }, position: { x: 250, y: 400 } },
      ],
      edges: [
        { id: 'e1-2', source: '1', target: '2', animated: true },
        { id: 'e1-3', source: '1', target: '3', animated: true },
        { id: 'e2-4', source: '2', target: '4' },
        { id: 'e3-4', source: '3', target: '4' },
        { id: 'e4-5', source: '4', target: '5' },
        { id: 'e5-6', source: '5', target: '6', animated: true },
      ],
    },
  },
  '6': {
    id: 6,
    nombre: 'Algoritmo 6',
    descripcionCompleta: `El Algoritmo 6 está diseñado específicamente para escalabilidad máxima.
    
    Implementa técnicas de sharding y distribución automática de carga, permitiendo escalar horizontalmente sin límites prácticos. Su sistema de coordinación distribuida garantiza consistencia eventual mientras mantiene alta disponibilidad.
    
    Características principales:
    - Escalabilidad: Horizontal ilimitada
    - Disponibilidad: 99.99%
    - Consistencia: Eventual
    - Latencia: < 10ms p95
    
    Perfecto para sistemas que necesitan manejar millones de operaciones por segundo.`,
    grafo: {
      nodes: [
        { id: '1', data: { label: 'Load Balancer' }, position: { x: 250, y: 0 } },
        { id: '2', data: { label: 'Shard 1' }, position: { x: 50, y: 100 } },
        { id: '3', data: { label: 'Shard 2' }, position: { x: 250, y: 100 } },
        { id: '4', data: { label: 'Shard 3' }, position: { x: 450, y: 100 } },
        { id: '5', data: { label: 'Coordinator' }, position: { x: 250, y: 200 } },
        { id: '6', data: { label: 'Response' }, position: { x: 250, y: 300 } },
      ],
      edges: [
        { id: 'e1-2', source: '1', target: '2', animated: true },
        { id: 'e1-3', source: '1', target: '3', animated: true },
        { id: 'e1-4', source: '1', target: '4', animated: true },
        { id: 'e2-5', source: '2', target: '5' },
        { id: 'e3-5', source: '3', target: '5' },
        { id: 'e4-5', source: '4', target: '5' },
        { id: 'e5-6', source: '5', target: '6' },
      ],
    },
  },
};

/**
 * Página de detalle de un algoritmo específico
 * 
 * :returns: Vista detallada con descripción completa y visualización de grafo
 */
export const DetalleAlgoritmo = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const algoritmo = id ? algoritmosData[id] : null;

  if (!algoritmo) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Algoritmo no encontrado
          </h1>
          <Button variant="primary" onClick={() => navigate('/comenzar')}>
            Volver al catálogo
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Button
            variant="secondary"
            onClick={() => navigate('/comenzar')}
            className="mb-4"
          >
            ← Volver al catálogo
          </Button>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
            {algoritmo.nombre}
          </h1>
          <p className="text-lg text-gray-600">
            Información detallada y visualización
          </p>
        </div>

        {/* Sección: Descripción Completa */}
        <Section title="Descripción del Algoritmo">
          <div className="prose max-w-none">
            <p className="text-lg leading-relaxed whitespace-pre-line">
              {algoritmo.descripcionCompleta}
            </p>
          </div>
        </Section>

        {/* Sección: Visualización del Grafo */}
        <Section title="Visualización del Grafo">
          <div className="bg-gray-50 rounded-lg p-4">
            <GraphVisualization data={algoritmo.grafo} height="600px" />
          </div>
          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">
              💡 Interacción:
            </h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Arrastra los nodos para reorganizar el grafo</li>
              <li>• Usa la rueda del mouse para hacer zoom</li>
              <li>• Haz clic y arrastra el fondo para mover la vista</li>
              <li>• Usa los controles en la esquina inferior izquierda</li>
            </ul>
          </div>
        </Section>
      </div>
    </div>
  );
};

