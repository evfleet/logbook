import { TopBar } from "../TopBar";
import { Note } from "../Note";
import { NoteTree } from "../NoteTree";

export function App() {
  return (
    <div className="h-screen grid grid-rows-[50px_1fr]">
      <TopBar />

      <div className="grid grid-cols-[200px_1fr]">
        <NoteTree />
        <Note />
      </div>
    </div>
  );
}
