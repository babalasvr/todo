import React from "react";
import ListItem from "./ListItem";


function List(props) {

    return(
        <ul>
            {props.items.map(item => 
            <ListItem 
                key={ item.id } item={ item }
                onChecked={ props.onChecked} 
                onItemDeleted={ props.onItemDeleted }>
            </ListItem>)}
        </ul>)
} 

export default List;