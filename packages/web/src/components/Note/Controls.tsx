import { Editor } from "@tiptap/react";

import { Toolbar } from "./Toolbar";

type ControlProps = {
  editor: Editor;
};

export function Controls({ editor }: ControlProps) {
  return (
    <div>
      <input type="text" placeholder="Title" />
      <Toolbar editor={editor} />
    </div>
  );
}
