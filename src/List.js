import React from "react";

function List(props) {

    return(
        <ul>
            {props.items.map(item => <li className="teste" key={item.id}>
                {item.text}
                <button onClick={() => {props.onItemDeleted(item)}}>
                    <img src="./assets/delete.png" alt="delete"></img>
                </button>
                </li>)}              
        </ul>)
} 

export default List;