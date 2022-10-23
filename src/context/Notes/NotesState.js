import NoteContext from "./NotesContext";
import { useState } from "react";

const NoteState = (props) => {
    const s1 = {
        "name": "Kartik",
        "class": "5b"
    }

    const [state, setState] = useState(s1);

    const update = () => {
        setTimeout(() => {
            setState({
                "name": "Ritik",
                "class": "phd"
            })
        }, 3000);
    }

    return (
        <NoteContext.Provider value={{ state, update }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;