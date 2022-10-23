import NoteContext from "./NotesContext";
import { useState } from "react";

const NoteState = (props) => {
    const notesInitial = [
        {
            "_id": "6351f8e63739ca7f871b91fe",
            "user": "6351f89b3739ca7f871b91f7",
            "title": "Tuesday",
            "description": "Today is gonna to be a good day",
            "tag": "Personal",
            "date": "2022-10-21T01:41:58.396Z",
            "__v": 0
        },
        {
            "_id": "6351f8e73739ca7f871b9200",
            "user": "6351f89b3739ca7f871b91f7",
            "title": "wednesday",
            "description": "Today is gonna to be a good day",
            "tag": "Personal",
            "date": "2022-10-21T01:41:59.047Z",
            "__v": 0
        },
        {
            "_id": "6351f8e73739ca7f871b9202",
            "user": "6351f89b3739ca7f871b91f7",
            "title": "Thursday",
            "description": "Today is gonna to be a good day",
            "tag": "Personal",
            "date": "2022-10-21T01:41:59.576Z",
            "__v": 0
        },
        {
            "_id": "6351f8e73739ca7f871b9200",
            "user": "6351f89b3739ca7f871b91f7",
            "title": "wednesday",
            "description": "Today is gonna to be a good day",
            "tag": "Personal",
            "date": "2022-10-21T01:41:59.047Z",
            "__v": 0
        },
        {
            "_id": "6351f8e73739ca7f871b9202",
            "user": "6351f89b3739ca7f871b91f7",
            "title": "Thursday",
            "description": "Today is gonna to be a good day",
            "tag": "Personal",
            "date": "2022-10-21T01:41:59.576Z",
            "__v": 0
        },
        {
            "_id": "6351f8e73739ca7f871b9200",
            "user": "6351f89b3739ca7f871b91f7",
            "title": "wednesday",
            "description": "Today is gonna to be a good day",
            "tag": "Personal",
            "date": "2022-10-21T01:41:59.047Z",
            "__v": 0
        },
        {
            "_id": "6351f8e73739ca7f871b9202",
            "user": "6351f89b3739ca7f871b91f7",
            "title": "Thursday",
            "description": "Today is gonna to be a good day",
            "tag": "Personal",
            "date": "2022-10-21T01:41:59.576Z",
            "__v": 0
        },
        {
            "_id": "6351f8e73739ca7f871b9200",
            "user": "6351f89b3739ca7f871b91f7",
            "title": "wednesday",
            "description": "Today is gonna to be a good day",
            "tag": "Personal",
            "date": "2022-10-21T01:41:59.047Z",
            "__v": 0
        }
    ]
    const [notes, setNotes] = useState(notesInitial);
    return (
        <NoteContext.Provider value={{ notes, setNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;