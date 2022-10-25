import NoteContext from "./NotesContext";
import { useState } from "react";

const NoteState = (props) => {
    const host = "http://localhost:5000/api";
    const id = "6351f8e63739ca7f871b91fe";
    const notesInitial = [];
    const [notes, setNotes] = useState(notesInitial);

    //get all notes
    const getNotes = async () => {
        //API call
        const response = await fetch(`${host}/notes/fetchallnotes`, {
            method: 'GET',

            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM1MWY4OWIzNzM5Y2E3Zjg3MWI5MWY3In0sImlhdCI6MTY2NjMxNjQ0M30.YZKapmGClj16cdv8eUFVVpDzq3HiuAq_5qCN60XU0Ns'
            }
        });
        const json = await response.json();
        console.log(json);
        setNotes(json);
    }
    //Add a note
    const addNote = async (title, description, tag) => {

        //API call

        const response = await fetch(`${host}/notes/addnote`, {
            method: 'POST',

            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM1MWY4OWIzNzM5Y2E3Zjg3MWI5MWY3In0sImlhdCI6MTY2NjMxNjQ0M30.YZKapmGClj16cdv8eUFVVpDzq3HiuAq_5qCN60XU0Ns'
            },

            body: JSON.stringify({ title, description, tag })
        });


        const note = {
            "_id": "6351f8739hca7f871b9200",
            "user": "6351f89b3739ca7f871b91f7",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2022-10-21T01:41:59.047Z",
            "__v": 0
        }
        setNotes(notes.concat(note))
    }


    //delete a note
    const deleteNote = async (id) => {
        //API call
        const response = await fetch(`${host}/notes/deletenote/${id}`, {
            method: 'DELETE',

            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM1MWY4OWIzNzM5Y2E3Zjg3MWI5MWY3In0sImlhdCI6MTY2NjMxNjQ0M30.YZKapmGClj16cdv8eUFVVpDzq3HiuAq_5qCN60XU0Ns'
            }

        });
        const json = response.json();
        console.log(json);
        const newNotes = notes.filter((note) => { return note._id !== id });
        setNotes(newNotes);
    }



    //Edit a note
    const editNote = async (id, title, description, tag) => {
        //API call

        const response = await fetch(`${host}/notes/updatenote/6351f8e63739ca7f871b91fe`, {
            method: 'PUT',

            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM1MWY4OWIzNzM5Y2E3Zjg3MWI5MWY3In0sImlhdCI6MTY2NjMxNjQ0M30.YZKapmGClj16cdv8eUFVVpDzq3HiuAq_5qCN60XU0Ns'
            },

            body: JSON.stringify({ title, description, tag })
        });
        console.log(response.json());
        // const json = response.json();

        // Logic to client side
        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if (element._id === id) {
                element.title = title;
                element.description = description;
                element.tag = tag;
            }
        }
    }
    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;