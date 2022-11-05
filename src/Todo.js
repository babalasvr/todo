import React, { useState } from "react";
import List from "./components/List";
import TodoForm from "./components/TodoForm";
import Item from "./components/Item"
import './Todo.css';

function Todo() {

    const [items, setItems] = useState([]);

    function onAddItem(text) {
        let item = new Item(text)
       setItems([...items, item])
    }

    function onItemDeleted(item) {
        let filteredItems = items.filter(it => it.id !== item.id)
        setItems(filteredItems)
    }

    const [style, setStyle] = useState("");

    function onChecked() {
        let checkbox = document.getElementById('marcou');
        // let x = items.filter(it => it.id !== item.id)
        // console.log(x);
        if(!checkbox.checked){
            setStyle("unChecked");
        }
        else{
            setStyle("checked");
        }  
    }

    return (
        <div className="container">
            <h1>To-do list</h1>
            <TodoForm onAddItem={onAddItem}></TodoForm>
            <List className={style} onChecked={onChecked} onItemDeleted={onItemDeleted} items={items}></List>
        </div>
        
    )
}

export default Todo;