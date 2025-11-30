import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import TextAlign from '@tiptap/extension-text-align';
import Underline from '@tiptap/extension-underline';

interface RichTextEditorProps {
  content: string;
  onChange: (content: string) => void;
  placeholder?: string;
}

/**
 * Editor de texto enriquecido con Tiptap
 * 
 * :param content: Contenido HTML del editor
 * :param onChange: Función que se ejecuta cuando cambia el contenido
 * :param placeholder: Texto de placeholder
 * :returns: Editor de texto enriquecido con barra de herramientas
 */
export const RichTextEditor = ({
  content,
  onChange,
  placeholder = 'Escribe aquí...',
}: RichTextEditorProps) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
    ],
    content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: 'prose max-w-none focus:outline-none min-h-[300px] p-4',
      },
    },
  });

  if (!editor) {
    return null;
  }

  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden bg-white">
      {/* Barra de herramientas */}
      <div className="bg-gray-50 border-b border-gray-300 p-2 flex flex-wrap gap-1">
        {/* Tamaños de fuente / Encabezados */}
        <div className="flex gap-1 border-r border-gray-300 pr-2">
          <button
            onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
            className={`px-3 py-1 rounded hover:bg-gray-200 transition-colors ${
              editor.isActive('heading', { level: 1 })
                ? 'bg-blue-200 text-blue-800'
                : 'bg-white'
            }`}
            title="Título 1"
          >
            H1
          </button>
          <button
            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            className={`px-3 py-1 rounded hover:bg-gray-200 transition-colors ${
              editor.isActive('heading', { level: 2 })
                ? 'bg-blue-200 text-blue-800'
                : 'bg-white'
            }`}
            title="Título 2"
          >
            H2
          </button>
          <button
            onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
            className={`px-3 py-1 rounded hover:bg-gray-200 transition-colors ${
              editor.isActive('heading', { level: 3 })
                ? 'bg-blue-200 text-blue-800'
                : 'bg-white'
            }`}
            title="Título 3"
          >
            H3
          </button>
          <button
            onClick={() => editor.chain().focus().setParagraph().run()}
            className={`px-3 py-1 rounded hover:bg-gray-200 transition-colors ${
              editor.isActive('paragraph') ? 'bg-blue-200 text-blue-800' : 'bg-white'
            }`}
            title="Párrafo"
          >
            P
          </button>
        </div>

        {/* Formato de texto */}
        <div className="flex gap-1 border-r border-gray-300 pr-2">
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={`px-3 py-1 rounded hover:bg-gray-200 transition-colors font-bold ${
              editor.isActive('bold') ? 'bg-blue-200 text-blue-800' : 'bg-white'
            }`}
            title="Negrita"
          >
            B
          </button>
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={`px-3 py-1 rounded hover:bg-gray-200 transition-colors italic ${
              editor.isActive('italic') ? 'bg-blue-200 text-blue-800' : 'bg-white'
            }`}
            title="Cursiva"
          >
            I
          </button>
          <button
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            className={`px-3 py-1 rounded hover:bg-gray-200 transition-colors underline ${
              editor.isActive('underline') ? 'bg-blue-200 text-blue-800' : 'bg-white'
            }`}
            title="Subrayado"
          >
            U
          </button>
          <button
            onClick={() => editor.chain().focus().toggleStrike().run()}
            className={`px-3 py-1 rounded hover:bg-gray-200 transition-colors line-through ${
              editor.isActive('strike') ? 'bg-blue-200 text-blue-800' : 'bg-white'
            }`}
            title="Tachado"
          >
            S
          </button>
        </div>

        {/* Alineación */}
        <div className="flex gap-1 border-r border-gray-300 pr-2">
          <button
            onClick={() => editor.chain().focus().setTextAlign('left').run()}
            className={`px-3 py-1 rounded hover:bg-gray-200 transition-colors ${
              editor.isActive({ textAlign: 'left' })
                ? 'bg-blue-200 text-blue-800'
                : 'bg-white'
            }`}
            title="Alinear a la izquierda"
          >
            ⬅
          </button>
          <button
            onClick={() => editor.chain().focus().setTextAlign('center').run()}
            className={`px-3 py-1 rounded hover:bg-gray-200 transition-colors ${
              editor.isActive({ textAlign: 'center' })
                ? 'bg-blue-200 text-blue-800'
                : 'bg-white'
            }`}
            title="Centrar"
          >
            ↔
          </button>
          <button
            onClick={() => editor.chain().focus().setTextAlign('right').run()}
            className={`px-3 py-1 rounded hover:bg-gray-200 transition-colors ${
              editor.isActive({ textAlign: 'right' })
                ? 'bg-blue-200 text-blue-800'
                : 'bg-white'
            }`}
            title="Alinear a la derecha"
          >
            ➡
          </button>
        </div>

        {/* Listas */}
        <div className="flex gap-1 border-r border-gray-300 pr-2">
          <button
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={`px-3 py-1 rounded hover:bg-gray-200 transition-colors ${
              editor.isActive('bulletList') ? 'bg-blue-200 text-blue-800' : 'bg-white'
            }`}
            title="Lista con viñetas"
          >
            •
          </button>
          <button
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={`px-3 py-1 rounded hover:bg-gray-200 transition-colors ${
              editor.isActive('orderedList') ? 'bg-blue-200 text-blue-800' : 'bg-white'
            }`}
            title="Lista numerada"
          >
            1.
          </button>
        </div>

        {/* Otros */}
        <div className="flex gap-1">
          <button
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            className={`px-3 py-1 rounded hover:bg-gray-200 transition-colors ${
              editor.isActive('blockquote') ? 'bg-blue-200 text-blue-800' : 'bg-white'
            }`}
            title="Cita"
          >
            "
          </button>
          <button
            onClick={() => editor.chain().focus().toggleCodeBlock().run()}
            className={`px-3 py-1 rounded hover:bg-gray-200 transition-colors ${
              editor.isActive('codeBlock') ? 'bg-blue-200 text-blue-800' : 'bg-white'
            }`}
            title="Bloque de código"
          >
            {'<>'}
          </button>
          <button
            onClick={() => editor.chain().focus().setHorizontalRule().run()}
            className="px-3 py-1 rounded hover:bg-gray-200 transition-colors bg-white"
            title="Línea horizontal"
          >
            ─
          </button>
        </div>

        {/* Deshacer/Rehacer */}
        <div className="flex gap-1 ml-auto">
          <button
            onClick={() => editor.chain().focus().undo().run()}
            disabled={!editor.can().undo()}
            className="px-3 py-1 rounded hover:bg-gray-200 transition-colors bg-white disabled:opacity-50 disabled:cursor-not-allowed"
            title="Deshacer"
          >
            ↶
          </button>
          <button
            onClick={() => editor.chain().focus().redo().run()}
            disabled={!editor.can().redo()}
            className="px-3 py-1 rounded hover:bg-gray-200 transition-colors bg-white disabled:opacity-50 disabled:cursor-not-allowed"
            title="Rehacer"
          >
            ↷
          </button>
        </div>
      </div>

      {/* Editor */}
      <EditorContent editor={editor} className="bg-white" />
    </div>
  );
};

