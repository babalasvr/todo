import React from "react";



function ListItem(props) {

    return(
            <li className={props.style} key={ props.item.id }>
                    { props.item.text }
                    <input onClick={() => { props.onChecked() }} type="checkbox"></input>
                    <button onClick={() => { props.onItemDeleted(props.item) }}>
                        <img src="./assets/delete.png" alt="delete"></img>
                    </button>
            </li>)             
} 

export default ListItem;