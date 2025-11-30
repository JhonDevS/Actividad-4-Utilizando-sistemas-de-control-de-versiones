import { useCallback } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  BackgroundVariant,
  type Edge,
  type Connection,
} from 'reactflow';
import 'reactflow/dist/style.css';

interface GraphData {
  nodes: Array<{
    id: string;
    data: { label: string };
    position: { x: number; y: number };
    type?: string;
  }>;
  edges: Array<{
    id: string;
    source: string;
    target: string;
    label?: string;
    animated?: boolean;
  }>;
}

interface GraphVisualizationProps {
  data: GraphData;
  height?: string;
}

/**
 * Componente de visualización de grafos usando ReactFlow
 * 
 * :param data: Datos del grafo en formato JSON con nodos y aristas
 * :param height: Altura del contenedor del grafo
 * :returns: Visualización interactiva del grafo
 */
export const GraphVisualization = ({
  data,
  height = '500px',
}: GraphVisualizationProps) => {
  const [nodes, setNodes, onNodesChange] = useNodesState(data.nodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(data.edges);

  const onConnect = useCallback(
    (params: Connection | Edge) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div style={{ width: '100%', height }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <Controls />
        <MiniMap />
        <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
      </ReactFlow>
    </div>
  );
};

