import { EditorContent, useEditor } from "@tiptap/react";
import { Underline } from "@tiptap/extension-underline";
import { TextAlign } from "@tiptap/extension-text-align";
import Collaboration from "@tiptap/extension-collaboration";
import StarterKit from "@tiptap/starter-kit";
import * as Y from "yjs";
import { IndexeddbPersistence } from "y-indexeddb";
import { useState } from "react";

import { Header } from "./Header";

export type Tag = "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export function Note() {
  const doc = new Y.Doc();
  const [tag, setTag] = useState<Tag>("h1");

  new IndexeddbPersistence("example-document", doc);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      Collaboration.configure({
        document: doc,
      }),
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
