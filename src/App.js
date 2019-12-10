import React, { useState } from 'react';
import './App.css';
import  Todo from './Todo.js';
import  AddTodo from './AddTodo.js';


function App() {
  const [todos, setTodos] = useState([
  {id: 0, name: "Go home", completed: true},
  {id: 1, name: "sleep", completed: false},
  {id: 2, name: "work", completed: true}]);

  
const toggleTodo = (id) => {
  const newTodos = [...todos];
  newTodos[id].completed = ! todos[id].completed;
  setTodos(newTodos);
};

const addTodo = (todo) => {
  todo.id = todos.length;
  const newTodos = [...todos, todo];
  setTodos(newTodos)
}


const todoItems = todos.map((todo) =>
  <Todo name={todo.name} key={todo.id} id={todo.id} completed={todo.completed} setTodos={setTodos} toggleTodo={toggleTodo}/>
);

  return (
    <div className="App">
      <h1>
        TodoList
      </h1>
     <ul className="todolist">
      {todoItems}
     </ul>
     <AddTodo addTodo={addTodo}/>
    </div>
  );
}

export default App;
