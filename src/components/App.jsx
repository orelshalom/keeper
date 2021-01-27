import React from "react";
import Header from "./Header";
import CreateArea from "./CreateArea";
import Note from "./Note";
import Footer from "./Footer";

function App() {
    const [notes, setNotes] = React.useState([]);

    function addNote(note) {
        setNotes([...notes, note]);
    }

    function deleteNote(id) {
        setNotes(notes.filter(((note, index) => index != id)));
    }

    return (
        <div>
            <Header />
            <CreateArea onAdd={addNote}/>
            {notes.map((note, index) => {
                return <Note 
                    key={index}
                    id={index}
                    title={note.title}
                    content={note.content}
                    onDelete={deleteNote}
                />;
            })}
            <Footer />
        </div>
    );
}

export default App;