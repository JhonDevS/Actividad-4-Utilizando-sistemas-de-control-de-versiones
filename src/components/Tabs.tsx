import { ReactNode } from 'react';

export interface TabItem {
  id: string;
  label: string;
  content: ReactNode;
}

interface TabsProps {
  tabs: TabItem[];
  activeTab: string;
  onChange: (tabId: string) => void;
}

/**
 * Componente de pestañas (tabs) reutilizable
 * 
 * :param tabs: Array de pestañas con id, label y contenido
 * :param activeTab: ID de la pestaña activa
 * :param onChange: Función que se ejecuta al cambiar de pestaña
 * :returns: Componente de tabs con navegación
 */
export const Tabs = ({ tabs, activeTab, onChange }: TabsProps) => {
  const activeTabContent = tabs.find((tab) => tab.id === activeTab)?.content;

  return (
    <div className="w-full">
      {/* Navegación de tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex -mb-px space-x-8" aria-label="Tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onChange(tab.id)}
              className={`
                py-4 px-1 border-b-2 font-medium text-sm transition-all duration-200
                ${
                  activeTab === tab.id
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Contenido de la tab activa */}
      <div className="py-6">
        <div className="animate-fadeIn">{activeTabContent}</div>
      </div>
    </div>
  );
};

