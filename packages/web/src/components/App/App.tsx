import { Editor } from "../Editor";
import { TopBar } from "../TopBar";
import { NoteTree } from "../NoteTree";

export function App() {
  return (
    <div className="h-screen grid grid-rows-[50px_1fr]">
      <div className="border-b-2">
        <TopBar />
      </div>

      <div className="grid grid-cols-[200px_1fr]">
        <div className="border-r-2">
          <NoteTree />
        </div>

        <div className="bg-slate-200">
          <Editor />
        </div>
      </div>
    </div>
  );
}
