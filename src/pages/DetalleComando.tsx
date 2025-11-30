import { useParams, useNavigate } from 'react-router-dom';
import { Section, GraphVisualization, Button } from '../components';

// Datos educativos de comandos Git
const comandosGitData: Record<string, {
  id: number;
  nombre: string;
  descripcionCompleta: string;
  sintaxis: string;
  ejemplos: string[];
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
    nombre: 'git init',
    descripcionCompleta: `El comando "git init" es el primer paso para comenzar a usar Git en cualquier proyecto. Este comando inicializa un nuevo repositorio Git en el directorio actual.
    
Cuando ejecutas git init, Git crea una carpeta oculta llamada ".git" en tu directorio. Esta carpeta contiene toda la estructura y metadatos necesarios para el control de versiones: objetos, referencias, configuración, hooks, y más.

**¿Cuándo usar git init?**
- Cuando comienzas un proyecto nuevo desde cero
- Cuando quieres agregar control de versiones a un proyecto existente
- Cuando necesitas crear un repositorio local antes de conectarlo a un remoto

**Importante:** Solo necesitas ejecutar este comando una vez por proyecto. Una vez inicializado, Git rastreará todos los cambios en ese directorio y sus subdirectorios.

Después de git init, típicamente configurarás tu información de usuario (git config) y crearás tu primer commit.`,
    sintaxis: 'git init [directorio]',
    ejemplos: [
      '# Inicializar en el directorio actual',
      'git init',
      '',
      '# Inicializar en un directorio específico',
      'git init mi-proyecto',
      '',
      '# Inicializar con rama principal personalizada',
      'git init -b main',
    ],
    grafo: {
      nodes: [
        { id: '1', data: { label: 'Proyecto sin Git' }, position: { x: 250, y: 0 } },
        { id: '2', data: { label: 'Ejecutar: git init' }, position: { x: 250, y: 100 } },
        { id: '3', data: { label: 'Crear carpeta .git' }, position: { x: 250, y: 200 } },
        { id: '4', data: { label: 'Inicializar objetos' }, position: { x: 100, y: 300 } },
        { id: '5', data: { label: 'Crear referencias' }, position: { x: 250, y: 300 } },
        { id: '6', data: { label: 'Configurar hooks' }, position: { x: 400, y: 300 } },
        { id: '7', data: { label: 'Repositorio Listo' }, position: { x: 250, y: 400 } },
      ],
      edges: [
        { id: 'e1-2', source: '1', target: '2', animated: true },
        { id: 'e2-3', source: '2', target: '3', label: 'Crear estructura', animated: true },
        { id: 'e3-4', source: '3', target: '4' },
        { id: 'e3-5', source: '3', target: '5' },
        { id: 'e3-6', source: '3', target: '6' },
        { id: 'e4-7', source: '4', target: '7' },
        { id: 'e5-7', source: '5', target: '7' },
        { id: 'e6-7', source: '6', target: '7' },
      ],
    },
  },
  '2': {
    id: 2,
    nombre: 'git clone',
    descripcionCompleta: `El comando "git clone" crea una copia local de un repositorio remoto existente. Es la forma principal de obtener una copia completa de un proyecto Git que ya existe en otro lugar.
    
A diferencia de solo descargar archivos, git clone:
- Descarga TODO el historial del proyecto (todos los commits, ramas, tags)
- Configura automáticamente el repositorio remoto como "origin"
- Te deja en la rama principal del proyecto
- Mantiene toda la información de control de versiones

**¿Cuándo usar git clone?**
- Cuando quieres contribuir a un proyecto open source
- Cuando te unes a un equipo y necesitas trabajar en su código
- Cuando quieres hacer un fork de un proyecto existente
- Cuando necesitas una copia de respaldo de un repositorio

**URLs comunes para clonar:**
- HTTPS: https://github.com/usuario/repositorio.git
- SSH: git@github.com:usuario/repositorio.git
- Git Protocol: git://github.com/usuario/repositorio.git

Después de clonar, puedes comenzar a trabajar inmediatamente con el código.`,
    sintaxis: 'git clone <url> [directorio]',
    ejemplos: [
      '# Clonar un repositorio desde GitHub',
      'git clone https://github.com/usuario/repo.git',
      '',
      '# Clonar en un directorio específico',
      'git clone https://github.com/usuario/repo.git mi-carpeta',
      '',
      '# Clonar usando SSH',
      'git clone git@github.com:usuario/repo.git',
      '',
      '# Clonar solo la rama principal (shallow clone)',
      'git clone --depth 1 https://github.com/usuario/repo.git',
    ],
    grafo: {
      nodes: [
        { id: '1', data: { label: 'Repositorio Remoto' }, position: { x: 250, y: 0 } },
        { id: '2', data: { label: 'Ejecutar: git clone' }, position: { x: 250, y: 100 } },
        { id: '3', data: { label: 'Descargar objetos' }, position: { x: 100, y: 200 } },
        { id: '4', data: { label: 'Descargar ramas' }, position: { x: 250, y: 200 } },
        { id: '5', data: { label: 'Descargar historial' }, position: { x: 400, y: 200 } },
        { id: '6', data: { label: 'Configurar origin' }, position: { x: 250, y: 300 } },
        { id: '7', data: { label: 'Checkout rama main' }, position: { x: 250, y: 400 } },
        { id: '8', data: { label: 'Repositorio Local Listo' }, position: { x: 250, y: 500 } },
      ],
      edges: [
        { id: 'e1-2', source: '1', target: '2', animated: true },
        { id: 'e2-3', source: '2', target: '3', animated: true },
        { id: 'e2-4', source: '2', target: '4', animated: true },
        { id: 'e2-5', source: '2', target: '5', animated: true },
        { id: 'e3-6', source: '3', target: '6' },
        { id: 'e4-6', source: '4', target: '6' },
        { id: 'e5-6', source: '5', target: '6' },
        { id: 'e6-7', source: '6', target: '7' },
        { id: 'e7-8', source: '7', target: '8' },
      ],
    },
  },
  '3': {
    id: 3,
    nombre: 'git add',
    descripcionCompleta: `El comando "git add" agrega cambios del directorio de trabajo al área de staging (preparación). Es un paso intermedio crucial antes de confirmar cambios.
    
**Las tres áreas de Git:**
1. Working Directory: donde editas archivos
2. Staging Area: donde preparas cambios para commit
3. Repository: donde se guardan commits permanentes

git add mueve cambios del Working Directory al Staging Area.

**¿Por qué usar staging?**
- Permite commits selectivos (solo algunos cambios, no todos)
- Te da oportunidad de revisar cambios antes de confirmar
- Facilita commits atómicos (un cambio lógico por commit)
- Puedes preparar archivos en múltiples pasos

**Variaciones comunes:**
- git add archivo.txt → agrega un archivo específico
- git add *.js → agrega todos los archivos .js
- git add . → agrega todos los cambios en el directorio actual
- git add -A → agrega todos los cambios en todo el repositorio
- git add -p → modo interactivo para agregar cambios parciales

Después de git add, usas git commit para confirmar los cambios preparados.`,
    sintaxis: 'git add <archivo|directorio|patrón>',
    ejemplos: [
      '# Agregar un archivo específico',
      'git add index.html',
      '',
      '# Agregar todos los archivos en un directorio',
      'git add src/',
      '',
      '# Agregar todos los cambios',
      'git add .',
      '',
      '# Agregar archivos interactivamente',
      'git add -p',
      '',
      '# Agregar archivos modificados y eliminados (no nuevos)',
      'git add -u',
    ],
    grafo: {
      nodes: [
        { id: '1', data: { label: 'Modificar archivos' }, position: { x: 250, y: 0 } },
        { id: '2', data: { label: 'Working Directory' }, position: { x: 250, y: 100 } },
        { id: '3', data: { label: 'Ejecutar: git add' }, position: { x: 250, y: 200 } },
        { id: '4', data: { label: 'Revisar cambios' }, position: { x: 100, y: 300 } },
        { id: '5', data: { label: 'Calcular hash' }, position: { x: 400, y: 300 } },
        { id: '6', data: { label: 'Staging Area' }, position: { x: 250, y: 400 } },
        { id: '7', data: { label: 'Listo para commit' }, position: { x: 250, y: 500 } },
      ],
      edges: [
        { id: 'e1-2', source: '1', target: '2' },
        { id: 'e2-3', source: '2', target: '3', animated: true, label: 'git add' },
        { id: 'e3-4', source: '3', target: '4' },
        { id: 'e3-5', source: '3', target: '5' },
        { id: 'e4-6', source: '4', target: '6' },
        { id: 'e5-6', source: '5', target: '6' },
        { id: 'e6-7', source: '6', target: '7', animated: true },
      ],
    },
  },
  '4': {
    id: 4,
    nombre: 'git commit',
    descripcionCompleta: `El comando "git commit" guarda los cambios del staging area de forma permanente en el repositorio. Cada commit es una instantánea completa de tu proyecto en ese momento.
    
**Anatomía de un commit:**
- Hash SHA-1 único (identificador)
- Autor y fecha
- Mensaje descriptivo
- Puntero al árbol de archivos
- Puntero al commit padre (excepto el primero)

**Buenas prácticas para commits:**
1. Commits atómicos: un cambio lógico por commit
2. Mensajes claros: explica QUÉ y POR QUÉ, no cómo
3. Tiempo presente: "Add feature" no "Added feature"
4. Primera línea breve (50 caracteres max)
5. Cuerpo detallado si es necesario (después de línea en blanco)

**Formato de mensaje convencional:**

tipo(alcance): descripción breve

Explicación detallada opcional de los cambios,
por qué fueron necesarios, y cualquier contexto
adicional que sea útil.

Tipos comunes: feat, fix, docs, style, refactor, test, chore

Los commits son permanentes y forman el historial del proyecto. ¡Escribe buenos mensajes!`,
    sintaxis: 'git commit -m "mensaje"',
    ejemplos: [
      '# Commit con mensaje simple',
      'git commit -m "feat: add user authentication"',
      '',
      '# Commit con mensaje detallado',
      'git commit -m "fix: resolve login bug" -m "Users couldn\'t login with special characters"',
      '',
      '# Commit abriendo editor para mensaje largo',
      'git commit',
      '',
      '# Agregar y commit en un solo paso',
      'git commit -am "update documentation"',
      '',
      '# Modificar el último commit',
      'git commit --amend',
    ],
    grafo: {
      nodes: [
        { id: '1', data: { label: 'Staging Area' }, position: { x: 250, y: 0 } },
        { id: '2', data: { label: 'Ejecutar: git commit' }, position: { x: 250, y: 100 } },
        { id: '3', data: { label: 'Escribir mensaje' }, position: { x: 100, y: 200 } },
        { id: '4', data: { label: 'Crear snapshot' }, position: { x: 400, y: 200 } },
        { id: '5', data: { label: 'Generar hash SHA-1' }, position: { x: 250, y: 300 } },
        { id: '6', data: { label: 'Vincular con padre' }, position: { x: 150, y: 400 } },
        { id: '7', data: { label: 'Actualizar HEAD' }, position: { x: 350, y: 400 } },
        { id: '8', data: { label: 'Commit guardado' }, position: { x: 250, y: 500 } },
      ],
      edges: [
        { id: 'e1-2', source: '1', target: '2', animated: true },
        { id: 'e2-3', source: '2', target: '3' },
        { id: 'e2-4', source: '2', target: '4' },
        { id: 'e3-5', source: '3', target: '5' },
        { id: 'e4-5', source: '4', target: '5' },
        { id: 'e5-6', source: '5', target: '6' },
        { id: 'e5-7', source: '5', target: '7' },
        { id: 'e6-8', source: '6', target: '8' },
        { id: 'e7-8', source: '7', target: '8' },
      ],
    },
  },
  '5': {
    id: 5,
    nombre: 'git push',
    descripcionCompleta: `El comando "git push" envía tus commits locales a un repositorio remoto. Es la forma de compartir tu trabajo con otros desarrolladores y sincronizar cambios.
    
**¿Cómo funciona git push?**
Git compara los commits en tu rama local con la rama remota. Si tu rama local tiene commits que el remoto no tiene, Git los envía. Si el remoto tiene commits que tú no tienes, Git rechaza el push para evitar sobrescribir trabajo.

**Componentes de un push:**
- Remoto: dónde enviar (usualmente "origin")
- Rama local: qué rama enviar
- Rama remota: dónde guardar en el remoto

**Situaciones comunes:**
1. Push normal: tu rama está adelantada del remoto
2. Push rechazado: el remoto tiene commits que no tienes (necesitas pull primero)
3. Force push: sobrescribe el remoto (¡CUIDADO! puede perder trabajo)
4. Push de rama nueva: crea la rama en el remoto

**Flujo recomendado:**
1. git pull (obtener últimos cambios)
2. Resolver conflictos si hay
3. git push (enviar tus cambios)

Nunca hagas force push a ramas compartidas como main o develop.`,
    sintaxis: 'git push [remoto] [rama]',
    ejemplos: [
      '# Push a la rama actual',
      'git push',
      '',
      '# Push especificando remoto y rama',
      'git push origin main',
      '',
      '# Push y configurar tracking',
      'git push -u origin feature-branch',
      '',
      '# Push todas las ramas',
      'git push --all',
      '',
      '# Push forzado (usar con precaución)',
      'git push --force',
      '',
      '# Push de tags',
      'git push --tags',
    ],
    grafo: {
      nodes: [
        { id: '1', data: { label: 'Commits Locales' }, position: { x: 100, y: 0 } },
        { id: '2', data: { label: 'Ejecutar: git push' }, position: { x: 250, y: 100 } },
        { id: '3', data: { label: 'Verificar permisos' }, position: { x: 250, y: 200 } },
        { id: '4', data: { label: 'Comparar historiales' }, position: { x: 250, y: 300 } },
        { id: '5', data: { label: '¿Actualizado?' }, position: { x: 250, y: 400 } },
        { id: '6', data: { label: 'Rechazado' }, position: { x: 100, y: 500 }, },
        { id: '7', data: { label: 'Transferir objetos' }, position: { x: 400, y: 500 } },
        { id: '8', data: { label: 'Hacer pull' }, position: { x: 100, y: 600 } },
        { id: '9', data: { label: 'Actualizar remoto' }, position: { x: 400, y: 600 } },
        { id: '10', data: { label: 'Push exitoso' }, position: { x: 400, y: 700 } },
      ],
      edges: [
        { id: 'e1-2', source: '1', target: '2', animated: true },
        { id: 'e2-3', source: '2', target: '3' },
        { id: 'e3-4', source: '3', target: '4' },
        { id: 'e4-5', source: '4', target: '5' },
        { id: 'e5-6', source: '5', target: '6', label: 'No' },
        { id: 'e5-7', source: '5', target: '7', label: 'Sí', animated: true },
        { id: 'e6-8', source: '6', target: '8' },
        { id: 'e7-9', source: '7', target: '9' },
        { id: 'e9-10', source: '9', target: '10' },
      ],
    },
  },
  '6': {
    id: 6,
    nombre: 'git pull',
    descripcionCompleta: `El comando "git pull" descarga cambios de un repositorio remoto y los fusiona con tu rama actual. Es esencial para mantenerse sincronizado con el trabajo del equipo.
    
**git pull = git fetch + git merge**
1. git fetch: descarga commits, archivos y referencias del remoto
2. git merge: integra los cambios descargados en tu rama actual

**¿Cuándo usar git pull?**
- Al comenzar tu jornada de trabajo
- Antes de crear una nueva rama
- Antes de hacer push
- Cuando alguien te avisa que hizo cambios
- Periódicamente durante el día

**Posibles resultados:**
1. Fast-forward: tu rama simplemente se adelanta (no hay conflictos)
2. Merge automático: Git fusiona cambios sin conflictos
3. Conflictos: tú y otro desarrollador modificaron las mismas líneas

**Variantes útiles:**
- git pull --rebase: aplica tus commits encima de los cambios remotos (historial más limpio)
- git pull origin main: pull específico de rama
- git fetch + git merge: pull manual con más control

Hacer pull frecuentemente reduce conflictos y facilita la integración.`,
    sintaxis: 'git pull [remoto] [rama]',
    ejemplos: [
      '# Pull de la rama actual',
      'git pull',
      '',
      '# Pull de rama específica',
      'git pull origin main',
      '',
      '# Pull con rebase en lugar de merge',
      'git pull --rebase',
      '',
      '# Pull de todas las ramas',
      'git pull --all',
      '',
      '# Fetch sin merge (solo descargar)',
      'git fetch',
      'git merge origin/main',
    ],
    grafo: {
      nodes: [
        { id: '1', data: { label: 'Repositorio Remoto' }, position: { x: 400, y: 0 } },
        { id: '2', data: { label: 'Ejecutar: git pull' }, position: { x: 250, y: 100 } },
        { id: '3', data: { label: 'Git Fetch' }, position: { x: 250, y: 200 } },
        { id: '4', data: { label: 'Descargar cambios' }, position: { x: 250, y: 300 } },
        { id: '5', data: { label: 'Git Merge' }, position: { x: 250, y: 400 } },
        { id: '6', data: { label: '¿Conflictos?' }, position: { x: 250, y: 500 } },
        { id: '7', data: { label: 'Resolver conflictos' }, position: { x: 100, y: 600 } },
        { id: '8', data: { label: 'Merge exitoso' }, position: { x: 400, y: 600 } },
        { id: '9', data: { label: 'Rama actualizada' }, position: { x: 250, y: 700 } },
      ],
      edges: [
        { id: 'e1-2', source: '1', target: '2', animated: true },
        { id: 'e2-3', source: '2', target: '3', label: 'Fase 1' },
        { id: 'e3-4', source: '3', target: '4', animated: true },
        { id: 'e4-5', source: '4', target: '5', label: 'Fase 2' },
        { id: 'e5-6', source: '5', target: '6' },
        { id: 'e6-7', source: '6', target: '7', label: 'Sí' },
        { id: 'e6-8', source: '6', target: '8', label: 'No', animated: true },
        { id: 'e7-9', source: '7', target: '9' },
        { id: 'e8-9', source: '8', target: '9' },
      ],
    },
  },
};

/**
 * Página de detalle de un comando Git específico
 * 
 * :returns: Vista detallada con descripción completa y visualización de grafo del flujo
 */
export const DetalleComando = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const comando = id ? comandosGitData[id] : null;

  if (!comando) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Comando no encontrado
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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 font-mono">
            {comando.nombre}
          </h1>
          <p className="text-lg text-gray-600">
            Aprende cómo funciona este comando de Git
          </p>
        </div>

        {/* Sección: Descripción Completa */}
        <Section title="Descripción del Comando">
          <div className="prose max-w-none">
            <p className="text-lg leading-relaxed whitespace-pre-line mb-6">
              {comando.descripcionCompleta}
            </p>
            <div className="bg-gray-900 rounded-lg p-4 mb-4">
              <p className="text-sm text-gray-400 mb-2">Sintaxis:</p>
              <code className="text-green-400 font-mono">{comando.sintaxis}</code>
            </div>
          </div>
        </Section>

        {/* Sección: Ejemplos */}
        <Section title="Ejemplos de Uso">
          <div className="bg-gray-900 rounded-lg p-6">
            <pre className="text-gray-300 font-mono text-sm overflow-x-auto">
              <code>{comando.ejemplos.join('\n')}</code>
            </pre>
          </div>
          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">
              💡 Consejo:
            </h3>
            <p className="text-sm text-gray-700">
              Prueba estos comandos en tu terminal. La mejor forma de aprender Git
              es practicando en proyectos reales.
            </p>
          </div>
        </Section>

        {/* Sección: Diagrama de Flujo */}
        <Section title="Diagrama de Flujo del Comando">
          <div className="bg-gray-50 rounded-lg p-4">
            <GraphVisualization data={comando.grafo} height="600px" />
          </div>
          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">
              🎯 Interacción con el Diagrama:
            </h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Arrastra los nodos para reorganizar el diagrama</li>
              <li>• Usa la rueda del mouse para hacer zoom</li>
              <li>• Haz clic y arrastra el fondo para mover la vista</li>
              <li>• Los nodos animados muestran el flujo principal del comando</li>
              <li>• Las etiquetas en las flechas indican condiciones o pasos</li>
            </ul>
          </div>
        </Section>
      </div>
    </div>
  );
};

