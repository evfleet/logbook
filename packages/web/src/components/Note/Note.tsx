import { EditorContent, useEditor } from "@tiptap/react";
import { Underline } from "@tiptap/extension-underline";
import { TextAlign } from "@tiptap/extension-text-align";
import StarterKit from "@tiptap/starter-kit";
import { useState } from "react";

import { Header } from "./Header";

const content = "<h1>Hello World!</h1>";

export type Tag = "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export function Note() {
  const [tag, setTag] = useState<Tag>("h1");

  const editor = useEditor({
    content,
    extensions: [
      StarterKit,
      Underline,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
    ],
    editorProps: {
      attributes: {
        class: "focus:outline-none",
      },
    },
    onUpdate: ({ editor }) => {
      if (editor.isActive("paragraph")) {
        setTag("p");
      }

      if (editor.isActive("heading")) {
        const { level } = editor.getAttributes("heading");
        setTag(`h${level}` as Tag);
      }
    },
  });

  if (!editor) {
    return null;
  }

  return (
    <main className="prose max-w-none">
      <Header editor={editor} tag={tag} />
      <EditorContent editor={editor} />
    </main>
  );
}
