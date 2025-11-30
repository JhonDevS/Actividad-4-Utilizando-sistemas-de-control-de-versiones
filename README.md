# React 19 + TypeScript + Tailwind CSS + Vite

Una aplicación moderna de React con tutorial interactivo, editor de texto enriquecido y visualización de grafos.

## 🚀 Características

- ⚛️ **React 19** - La última versión de React
- 🔷 **TypeScript** - Tipado estático para código más seguro
- 🎨 **Tailwind CSS 4.x** - Framework CSS utility-first
- ⚡ **Vite** - Build tool ultra rápido
- 🗺️ **React Router** - Navegación entre páginas
- 📝 **Editor de texto enriquecido** - Tiptap editor con formato completo
- 📊 **Visualización de grafos** - ReactFlow para grafos interactivos
- 📁 **Estructura organizada** - Carpetas separadas por funcionalidad
- 🎓 **Tutorial interactivo** - Sistema de onboarding paso a paso

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** versión 20.18.0 o superior
- **npm** versión 10.x o superior

Para verificar tus versiones:

```bash
node --version
npm --version
```

## 🛠️ Instalación Paso a Paso

### 1. Clonar o Descargar el Proyecto

```bash
# Si usas Git
git clone <url-del-repositorio>
cd carpeta-sin-título-2

# O simplemente descarga y extrae el ZIP
```

### 2. Instalar Dependencias

```bash
npm install
```

Este comando instalará todas las dependencias necesarias incluyendo:
- React 19 y React DOM
- TypeScript
- Tailwind CSS 4.x con PostCSS
- React Router DOM
- Tiptap (editor de texto)
- ReactFlow (visualización de grafos)
- Vite y herramientas de desarrollo

**Nota:** Pueden aparecer advertencias sobre versiones de Node.js, pero el proyecto funcionará correctamente.

### 3. Iniciar el Servidor de Desarrollo

```bash
npm run dev
```

La aplicación estará disponible en: **http://localhost:5173**

Deberías ver en la terminal algo como:

```
  VITE v7.2.4  ready in XXX ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

### 4. ¡Listo! 🎉

Abre tu navegador y visita `http://localhost:5173` para ver la aplicación en funcionamiento.

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables de UI
│   ├── Button.tsx      # Botón con variantes y tamaños
│   ├── Card.tsx        # Tarjeta con truncado de texto
│   ├── Input.tsx       # Input con validación
│   ├── Tutorial.tsx    # Tutorial paso a paso
│   ├── Tabs.tsx        # Sistema de pestañas
│   ├── Section.tsx     # Secciones para organizar contenido
│   ├── RichTextEditor.tsx  # Editor de texto enriquecido
│   ├── GraphVisualization.tsx  # Visualización de grafos
│   └── index.ts        # Exports centralizados
│
├── contexts/           # Context API de React
│   ├── ThemeContext.tsx  # Contexto de tema
│   └── index.ts
│
├── hooks/              # Custom hooks personalizados
│   ├── useLocalStorage.ts  # Persistencia en localStorage
│   └── index.ts
│
├── layouts/            # Layouts de la aplicación
│   ├── MainLayout.tsx  # Layout con navegación
│   └── index.ts
│
├── pages/              # Páginas/vistas de la aplicación
│   ├── Home.tsx        # Página de inicio con tutorial
│   ├── Comenzar.tsx    # Catálogo de algoritmos y editor
│   ├── DetalleAlgoritmo.tsx  # Vista detallada de algoritmo
│   └── index.ts
│
├── services/           # Servicios para llamadas API
│   ├── api.ts          # Cliente HTTP
│   └── index.ts
│
├── types/              # Tipos y interfaces de TypeScript
│   └── index.ts
│
├── utils/              # Funciones utilitarias
│   ├── formatters.ts   # Formateo de datos
│   └── index.ts
│
├── App.tsx             # Componente raíz con router
├── main.tsx            # Punto de entrada
└── index.css           # Estilos globales con Tailwind
```

## 🚀 Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo en http://localhost:5173 |
| `npm run build` | Construye la aplicación para producción en `/dist` |
| `npm run preview` | Previsualiza la build de producción |
| `npm run lint` | Ejecuta ESLint para verificar el código |

## 🎯 Funcionalidades Principales

### 1. Tutorial Interactivo 🎓

Al entrar a la aplicación, puedes iniciar un tutorial paso a paso que te guía por las funcionalidades:

- 4 pasos con navegación
- Indicadores visuales de progreso
- Botones para avanzar/retroceder
- Opción para saltar el tutorial
- Animaciones suaves

### 2. Catálogo de Algoritmos 📚

En la sección "Comenzar" encontrarás:

- **Grid de tarjetas** con algoritmos disponibles
- **Texto truncado automático** con "Ver más" cuando excede el límite
- **Click en tarjeta** para ver detalles completos
- 6 algoritmos de ejemplo incluidos

### 3. Vista Detallada de Algoritmos 🔍

Cada algoritmo tiene su propia página con:

- **Sección 1: Descripción completa** del algoritmo
- **Sección 2: Grafo interactivo** con ReactFlow
  - Arrastra nodos para reorganizar
  - Zoom con la rueda del mouse
  - Minimapa para navegación
  - Controles de vista

### 4. Editor de Texto Enriquecido ✍️

En la pestaña "Entrada Manual":

- **Barra de herramientas completa:**
  - Títulos (H1, H2, H3)
  - Negrita, Cursiva, Subrayado, Tachado
  - Alineación (izquierda, centro, derecha)
  - Listas (viñetas y numeradas)
  - Citas, bloques de código
  - Deshacer/Rehacer
- **Vista previa** del contenido formateado
- **Botón Procesar** para enviar el contenido

### 5. Sistema de Navegación 🧭

- **Header fijo** con logo y menú
- **Rutas:**
  - `/` - Página de inicio
  - `/comenzar` - Catálogo y editor
  - `/algoritmo/:id` - Detalle de algoritmo
- **Botones de navegación** resaltados en ruta activa

## 🎨 Personalización

### Modificar Algoritmos

Edita el archivo `src/pages/DetalleAlgoritmo.tsx`:

```typescript
const algoritmosData = {
  '1': {
    id: 1,
    nombre: 'Tu Algoritmo',
    descripcionCompleta: 'Descripción detallada...',
    grafo: {
      nodes: [
        { id: '1', data: { label: 'Nodo' }, position: { x: 250, y: 0 } }
      ],
      edges: [
        { id: 'e1-2', source: '1', target: '2', animated: true }
      ]
    }
  }
};
```

### Modificar Tutorial

Edita `src/components/Tutorial.tsx` para cambiar los pasos:

```typescript
const tutorialSteps = [
  {
    id: 1,
    title: 'Tu Paso',
    content: 'Tu contenido...'
  }
];
```

### Personalizar Estilos

Los estilos usan Tailwind CSS. Edita las clases directamente en los componentes o personaliza `src/index.css`.

## 🔧 Configuración Avanzada

### Variables de Entorno

Crea un archivo `.env` en la raíz (opcional):

```env
VITE_API_BASE_URL=https://tu-api.com
VITE_ENV=development
```

Accede a ellas con:

```typescript
const apiUrl = import.meta.env.VITE_API_BASE_URL;
```

### TypeScript

Configuración en:
- `tsconfig.json` - Base
- `tsconfig.app.json` - Aplicación
- `tsconfig.node.json` - Node.js

### Tailwind CSS 4.x

Este proyecto usa Tailwind CSS 4.x con la nueva sintaxis:

```css
/* src/index.css */
@import "tailwindcss";
```

Configuración en `tailwind.config.js` y `postcss.config.js`.

## 🐛 Solución de Problemas

### El servidor no inicia

```bash
# Limpia node_modules y reinstala
rm -rf node_modules package-lock.json
npm install
```

### Errores de versión de Node.js

El proyecto funciona con Node.js 20.18.0. Si ves advertencias de "EBADENGINE", puedes ignorarlas de forma segura.

### Errores de Tailwind CSS

Asegúrate de que `src/index.css` contenga:

```css
@import "tailwindcss";
```

Y que `postcss.config.js` tenga:

```javascript
export default {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
}
```

### El editor de texto no funciona

Verifica que estén instalados:

```bash
npm list @tiptap/react @tiptap/starter-kit
```

Si no están, reinstala:

```bash
npm install @tiptap/react @tiptap/starter-kit @tiptap/extension-text-align @tiptap/extension-underline
```

### Los grafos no se muestran

Verifica la instalación de ReactFlow:

```bash
npm list reactflow
```

Si hay problemas:

```bash
npm install reactflow
```

## 📦 Build para Producción

```bash
# Construir
npm run build

# Previsualizar
npm run preview
```

Los archivos optimizados estarán en la carpeta `dist/`.

### Desplegar

Puedes desplegar en cualquier servicio de hosting estático:

- **Vercel**: `vercel deploy`
- **Netlify**: Arrastra la carpeta `dist/`
- **GitHub Pages**: Configura en el repositorio
- **AWS S3**: Sube la carpeta `dist/`

## 🛠️ Stack Tecnológico Completo

### Core
- [React 19.2.0](https://react.dev/) - Biblioteca UI
- [TypeScript 5.9.3](https://www.typescriptlang.org/) - Tipado estático
- [Vite 7.2.4](https://vitejs.dev/) - Build tool

### Estilos
- [Tailwind CSS 4.1.17](https://tailwindcss.com/) - Framework CSS
- [PostCSS 8.5.6](https://postcss.org/) - Procesador CSS
- [Autoprefixer 10.4.22](https://github.com/postcss/autoprefixer) - Prefijos CSS

### Routing
- [React Router DOM 7.x](https://reactrouter.com/) - Navegación

### Editor
- [Tiptap React](https://tiptap.dev/) - Editor WYSIWYG
- Extensiones: Starter Kit, Text Align, Underline

### Visualización
- [ReactFlow 11.x](https://reactflowdev.com/) - Grafos interactivos

### Desarrollo
- [ESLint 9.39.1](https://eslint.org/) - Linter
- [TypeScript ESLint 8.46.4](https://typescript-eslint.io/) - Reglas TS

## 📚 Recursos Adicionales

- **QUICKSTART.md** - Guía rápida de inicio
- Documentación inline en cada componente
- Ejemplos de uso en los archivos de ejemplo

## 🤝 Contribución

Para contribuir al proyecto:

1. Sigue los principios SOLID
2. Usa TypeScript con tipos estrictos
3. Documenta con formato reStructuredText
4. Sigue las convenciones de nombres:
   - PascalCase para componentes
   - camelCase para funciones y variables
   - kebab-case para archivos CSS
5. Usa Conventional Commits para mensajes de commit

## 📄 Licencia

Este proyecto está bajo la licencia MIT.

## 🆘 Soporte

Si tienes problemas:

1. Revisa la sección "Solución de Problemas"
2. Verifica que todas las dependencias estén instaladas
3. Asegúrate de usar Node.js 20.x
4. Consulta la documentación de cada librería

---

**¡Disfruta construyendo con React 19! 🚀**

Hecho con ❤️ usando React, TypeScript y Tailwind CSS
