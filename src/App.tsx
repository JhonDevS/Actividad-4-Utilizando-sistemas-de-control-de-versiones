import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts';
import { MainLayout } from './layouts';
import { Home, Comenzar, DetalleAlgoritmo } from './pages';

/**
 * Componente raíz de la aplicación con enrutamiento
 * 
 * :returns: Aplicación con providers, router y layout
 */
function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/comenzar" element={<Comenzar />} />
            <Route path="/algoritmo/:id" element={<DetalleAlgoritmo />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
