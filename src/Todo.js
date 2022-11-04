import React, { useState } from "react";
import './Todo.css'

function Todo() {

    const [text, setText] = useState("");
    const [items, setItems] = useState([]);

    function handleChange(event) {
        let info = event.target.value;
        setText(info);
    }

    function handleClick(event) {
        event.preventDefault();
        if(text){
            setItems([...items, text]);
            setText("");
        }
    }

    return (
        <div className="container">
            <h1>Todo</h1>
            <form id="form">
                <input id="info" type="text" 
                placeholder="Digite a tarefa"
                onChange={handleChange}
                value={text}>
                </input>
                <button id="add" onClick={handleClick}>Add</button>
            </form>

            <ul>
                {items.map(item =>{
                    return <li>{item}</li>
                })}              
            </ul>
        </div>
        
    )
}

export default Todo;