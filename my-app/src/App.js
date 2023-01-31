import { React } from "react";
import "./Componets/css/App.css";
import Header from "./Componets/NoteComponets/Header";
import Notes from "./Componets/NoteComponets/Notes";
function App() {
  return (
    <div className="main">
      <Header />
      <Notes />
    </div>
  );
}
export default App;
