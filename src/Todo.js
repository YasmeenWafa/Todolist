import React, { useState } from 'react';

function Todo({name, completed, id, toggleTodo}){
    if(completed){
    return(
        <li className="completed" onClick={() => toggleTodo(id)}>
            {name}
        </li>
    )
    }else{
        return(
            <li className="pending" onClick={() => toggleTodo(id)}>
                {name}
            </li>
        )
    }
}

export default Todo;
