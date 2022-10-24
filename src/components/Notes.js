import React, { useContext } from 'react'
import NoteContext from '../context/Notes/NotesContext';
import Noteitem from './Noteitem';

function Notes() {
    const context = useContext(NoteContext);
    const { notes, setNotes } = context;
    return (
        <div className="row my-3">
            <h4>Your Notes</h4>
            {notes.map((notes) => {
                return <Noteitem key={notes._id} note={notes} />;
            })}
        </div>
    )
}

export default Notes