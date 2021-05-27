import React from 'react'
import TodoList from './TodoList'

function TodoItem(
    {todo, toggleComplete, deleteTodo}
    ) {
    function handleCheckbox() {
        toggleComplete(todo.id);
    }

    function handleDelete(id) {
        deleteTodo(todo.id)
    }

    return (
        <div class="py-3" style={{  display: "flex", textDecoration: todo.completed ? "line-through": null}}>
            <input class="m-4" type="checkbox" onClick={handleCheckbox} />
            <li>{todo.item}</li>
            <button class=" bg-red-500 hover:bg-red text-white active:bg-red-600 font-bold uppercase text-xs mx-4  px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" onClick={handleDelete} deleteTodo={deleteTodo}>delete</button>
        </div>
    )
}

export default TodoItem
