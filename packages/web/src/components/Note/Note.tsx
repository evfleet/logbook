import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import { Controls } from "./Controls";

const content = "<h1>Hello World!</h1>";

export function Note() {
  const editor = useEditor({
    content,
    extensions: [StarterKit],
    editorProps: {
      attributes: {
        class: "focus:outline-none",
      },
    },
  });

  if (!editor) {
    return null;
  }

  return (
    <main className="prose">
      <Controls editor={editor} />
      <EditorContent editor={editor} />
    </main>
  );
}
