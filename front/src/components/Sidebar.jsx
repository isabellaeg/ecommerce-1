import React from 'react'
import { Link} from "react-router-dom";

function Sidebar(props) {
    console.log('PROPS', props)
    return (
        <div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <button onClick={() => { props.handleSubmit("Cuerdas") }}>Cuerdas</button>
        </div>
    )
}

export default Sidebar
