import React, { useState } from "react";

function TodoForm(props) {

    const [text, setText] = useState("");

    function handleChange(event) {
        let info = event.target.value;
        setText(info);
    }

    function handleClick(event) {
        event.preventDefault();
        if(text){
            props.onAddItem(text);
            setText("");
        }
        
    }

    return(
        <form id="form">
                <input id="info" type="text" 
                placeholder="Digite a tarefa"
                onChange={handleChange}
                value={props.text}>
                </input>
                <button id="add" onClick={handleClick}>Add</button>
            </form>
    )
}

export default TodoForm;