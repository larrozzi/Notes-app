import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [notes, setNotes] = useState([])

  function addNote(note) {
    console.log("note: ", note);
    (note.title.length > 0 || note.content.length > 0) && setNotes((prevNotes) => {
      const notesArray = [...prevNotes, note]
      return notesArray
    })
  }
  console.log("notesObjectsArray:", notes);

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      })
    })
  }
  console.log("notes:", notes);

  return (
    <div>
      <Header />
      <CreateArea
        onAdd={addNote}
      />
      {/* {notes?.map((note, index) => } */}
      {notes.length > 0 && notes.map((note, index) => {
        return <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onDelete={deleteNote} />
      })
      }
      <Footer />
    </div>
  );
}

export default App;
