import { Editor } from "@tiptap/react";

import { Toolbar } from "./Toolbar";
import type { Tag } from "./Note";

type HeaderProps = {
  editor: Editor;
  tag: Tag;
};

export function Header({ editor, tag }: HeaderProps) {
  return (
    <div>
      <input type="text" placeholder="Title" />
      <Toolbar editor={editor} tag={tag} />
    </div>
  );
}
