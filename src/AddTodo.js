import React, { useState } from 'react';

function AddTodo({addTodo}){

    const [name, setName] = useState("");

     const handleChange = (e) => {
        e.preventDefault();
        setName(e.target.value);
    }
     const handleSubmit = (e) => {
        e.preventDefault();
        
        let todo = {name: name, completed: false}
        addTodo(todo);
        setName("");
    }

   return(
       <form onSubmit={handleSubmit}>
           <input placeholder="Enter text here ..." required onChange={handleChange} value={name}/>
           <button>Add Todo</button>
       </form>
   )
}

export default AddTodo;
