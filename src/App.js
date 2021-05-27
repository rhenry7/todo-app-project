import React, { useState, useEffect } from "react";
import "./App.css";
import Input from "./components/Input";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const localStoragekey = "cloud-todo-list-todos";

function App() {
  const [todos, SetTodos, setTodo] = useState([]);

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(localStoragekey));
    if (storageTodos) {
      SetTodos(storageTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(localStoragekey, JSON.stringify(todos));
  }, [todos]);

  function addTodo(todo) {
    SetTodos([todo, ...todos]);
  }

  function toggleComplete(id) {
    SetTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
       
        return todo;
      })
    );
  }

  function deleteTodo(id) {
    SetTodos(todos.filter((todo) => todo.id !== id));
  }

  function deleteTodoAll(id) {
    setTodo(todos.filter((todo) => todo.id === id));
  }


  // gets the date 
  function getDate(){
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    
    return today = mm + '/' + dd + '/' + yyyy;
  }


  return (
    <div className="App">
      <header className="App-header">
      <div class="bg-gray-700 px-10 py-10 rounded-lg">
      <p>Today's Todo's: {getDate()}</p>
        <TodoForm addTodo={addTodo} />
        <TodoList
          todos={todos}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          deleteTodoAll={deleteTodoAll}
        />
      </div>
       
      </header>
    </div>
  );
}

export default App;
