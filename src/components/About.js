import React, { useContext, useEffect } from 'react'
import noteContext from '../context/Notes/NotesContext'

function About() {
    const a = useContext(noteContext);
    useEffect(() => {
        a.update();
        // eslint-disable-next-line
    }, []);
    return (
        <div>
            This is about {a.state.name} and he is in class {a.state.class}
        </div>
    )
}

export default About

