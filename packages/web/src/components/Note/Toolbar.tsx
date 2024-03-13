import { Editor } from "@tiptap/react";
import { Level } from "@tiptap/extension-heading";
import { clsx } from "clsx";
import {
  Bold,
  Italic,
  Underline,
  Strikethrough,
  AlignLeft,
  AlignCenter,
  AlignRight,
} from "lucide-react";
import { ChangeEvent } from "react";

import type { Tag } from "./Note";

type ToolbarProps = {
  editor: Editor;
  tag: Tag;
};

export function Toolbar({ editor, tag }: ToolbarProps) {
  function handleSelect(event: ChangeEvent<HTMLSelectElement>) {
    console.log(event.target.value);

    if (event.target.value === "p") {
      editor?.chain().focus().setParagraph().run();
    }

    if (event.target.value.includes("h")) {
      console.log("in here");

      editor
        ?.chain()
        .focus()
        .toggleHeading({
          level: parseInt(event.target.value.slice(1)) as Level,
        })
        .run();
    }
  }

  return (
    <div>
      <div>
        <select onChange={handleSelect} value={tag}>
          <option value="h1">H1</option>
          <option value="h2">H2</option>
          <option value="h3">H3</option>
          <option value="h4">H4</option>
          <option value="h5">H5</option>
          <option value="h6">H6</option>
          <option value="p">P</option>
        </select>
      </div>

      <div>
        <button
          onClick={() => editor?.chain().focus().toggleBold().run()}
          className={clsx(editor?.isActive("bold") && "bg-gray-200")}
        >
          <Bold />
        </button>

        <button
          onClick={() => editor?.chain().focus().toggleItalic().run()}
          className={clsx(editor?.isActive("italic") && "bg-gray-200")}
        >
          <Italic />
        </button>

        <button
          onClick={() => editor?.chain().focus().toggleUnderline().run()}
          className={clsx(editor?.isActive("underline") && "bg-gray-200")}
        >
          <Underline />
        </button>

        <button
          onClick={() => editor?.chain().focus().toggleStrike().run()}
          className={clsx(editor?.isActive("strike") && "bg-gray-200")}
        >
          <Strikethrough />
        </button>
      </div>

      <div>
        <button
          onClick={() => editor?.chain().focus().setTextAlign("left").run()}
          className={clsx(
            editor.isActive({ textAlign: "left" }) && "bg-gray-200"
          )}
        >
          <AlignLeft />
        </button>

        <button
          onClick={() => editor?.chain().focus().setTextAlign("center").run()}
          className={clsx(
            editor?.isActive({ textAlign: "center" }) && "bg-gray-200"
          )}
        >
          <AlignCenter />
        </button>

        <button
          onClick={() => editor?.chain().focus().setTextAlign("right").run()}
          className={clsx(
            editor?.isActive({ textAlign: "right" }) && "bg-gray-200"
          )}
        >
          <AlignRight />
        </button>
      </div>
    </div>
  );
}
