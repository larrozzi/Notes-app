import React, { useState } from "react";

function CreateArea(props) {

  const [note, setNote] = useState({ title: "", content: "" })

  function CreateNote(event) {
    const { name, value } = event.target

    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value  //[name] is replaced with either "title" or "content" depending on event.target.name 
      }
    })
    // if (name === "title") {
    //   setNote((prevValue) => {
    //     return {
    //       title: value,
    //       content: prevValue.content
    //     }
    //   })
    // }
    // else if (name === "content") {
    //   setNote((prevValue) => {
    //     return {
    //       title: prevValue.title,
    //       content: value
    //     }
    //   })
    // }
  }
  console.log("title,content:", note.title, note.content);

  return (
    <div>
      <form>
        <input onChange={CreateNote} name="title" placeholder="Title" value={note.title} />
        <textarea onChange={CreateNote} name="content" placeholder="Take a note..." rows="3" value={note.content} />
        <button type="button" onClick={() => { //type="button preventDefault of form"
          props.onAdd(note)
          setNote({ title: "", content: "" })
        }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
