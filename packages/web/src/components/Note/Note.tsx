import { EditorProvider, FloatingMenu, BubbleMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import { Controls } from "./Controls";

const content = "<h1>Hello World!</h1>";

const extensions = [StarterKit];

export function Note() {
  return (
    <main className="prose">
      <EditorProvider
        content={content}
        extensions={extensions}
        slotBefore={<Controls />}
      >
        <FloatingMenu>This is the floating menu</FloatingMenu>
        <BubbleMenu>This is the bubble menu</BubbleMenu>
      </EditorProvider>
    </main>
  );
}
