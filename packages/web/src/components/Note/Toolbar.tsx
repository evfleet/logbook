import { Bold } from "lucide-react";
import { clsx } from "clsx";
import { Editor } from "@tiptap/react";

type ToolbarProps = {
  editor: Editor;
};

export function Toolbar({ editor }: ToolbarProps) {
  return (
    <div>
      <button
        onClick={() => editor?.chain().focus().toggleBold().run()}
        className={clsx(editor?.isActive("bold") && "bg-gray-200")}
      >
        <Bold />
      </button>
    </div>
  );
}
