import { React, useState, useEffect } from "react";
import "../css/Note.css";
import Note from "./Note"
import CreateNote from "./CreateNote";
import { v4 as uuid } from "uuid";











function Notes() {
    //states
    const [notes, setNotes] = useState([]);
    const [inputText, setInputText] = useState("");
  
    const deleteNote = (id) => {
        const filteredNotes = notes.filter((note) => note.id !== id);
        setNotes(filteredNotes);
      };
    
      // get text and store in state
const textHandler = (e) => {
    setInputText(e.target.value);
  };

  const saveHandler = () => {
    setNotes((prevState) => [
      ...prevState,
      {
        id: uuid(),
        text: inputText,
      },
    ]);
    //clear the textarea
    setInputText("");
  };
  
  
    return (
    <div className="notes">
    {notes.map((note) => (
      <Note
        key={note.id}
        id={note.id}
        text={note.text}
        deleteNote={deleteNote}
      />
    ))}
    <CreateNote
      textHandler={textHandler}
      saveHandler={saveHandler}
      inputText={inputText}
    />
  </div>
 );
}

export default Notes