import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface MainLayoutProps {
  children: ReactNode;
}

/**
 * Layout principal de la aplicación con navegación
 * 
 * :param children: Contenido del layout
 * :returns: Layout con header, navegación, contenido y footer
 */
export const MainLayout = ({ children }: MainLayoutProps) => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Inicio' },
    { path: '/comenzar', label: 'Comenzar' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
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
              <h1 className="text-2xl font-bold text-gray-900">
                Mi Aplicación
              </h1>
            </Link>

            <nav className="flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`
                    px-4 py-2 rounded-lg font-medium transition-all duration-200
                    ${
                      isActive(item.path)
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                    }
                  `}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center text-gray-600">
          <p>
            &copy; {new Date().getFullYear()} Mi Aplicación. Todos los derechos
            reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};
