import { ReactNode } from 'react';

interface SectionProps {
  title: string;
  children: ReactNode;
  className?: string;
}

/**
 * Componente de sección reutilizable para organizar contenido
 * 
 * :param title: Título de la sección
 * :param children: Contenido de la sección
 * :param className: Clases CSS adicionales
 * :returns: Sección estilizada con título
 */
export const Section = ({ title, children, className = '' }: SectionProps) => {
  return (
    <section className={`mb-8 ${className}`}>
      <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-blue-600">
          {title}
        </h2>
        <div className="text-gray-700">{children}</div>
      </div>
    </section>
  );
};

