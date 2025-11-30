import { ReactNode } from 'react';

interface CardProps {
  title: string;
  description?: string;
  children?: ReactNode;
  onClick?: () => void;
  className?: string;
  maxDescriptionLength?: number;
  showViewMore?: boolean;
}

/**
 * Componente de tarjeta (card) reutilizable
 * 
 * :param title: Título de la tarjeta
 * :param description: Descripción opcional
 * :param children: Contenido adicional de la tarjeta
 * :param onClick: Función que se ejecuta al hacer clic
 * :param className: Clases CSS adicionales
 * :param maxDescriptionLength: Longitud máxima de la descripción antes de truncar
 * :param showViewMore: Si se debe mostrar el botón "Ver más"
 * :returns: Componente de tarjeta estilizada
 */
export const Card = ({
  title,
  description,
  children,
  onClick,
  className = '',
  maxDescriptionLength = 120,
  showViewMore = true,
}: CardProps) => {
  const baseClasses = 'bg-white rounded-xl shadow-md p-6 transition-all duration-300';
  const interactiveClasses = onClick
    ? 'cursor-pointer hover:shadow-xl hover:scale-105'
    : '';

  const shouldTruncate = description && description.length > maxDescriptionLength;
  const displayDescription = shouldTruncate
    ? `${description.slice(0, maxDescriptionLength)}...`
    : description;

  return (
    <div
      className={`${baseClasses} ${interactiveClasses} ${className}`}
      onClick={onClick}
    >
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      {description && (
        <p className="text-gray-600 mb-4">{displayDescription}</p>
      )}
      {children && <div className="mt-4">{children}</div>}
      {shouldTruncate && showViewMore && (
        <div className="flex items-center justify-end mt-4 pt-4 border-t border-gray-200">
          <span className="text-sm text-blue-600 font-medium flex items-center gap-1">
            Ver más
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>
        </div>
      )}
    </div>
  );
};

