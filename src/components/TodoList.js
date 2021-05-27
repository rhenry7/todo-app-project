import React from 'react'
import TodoItem from './TodoItem';

function TodoList(
    {todos, toggleComplete, deleteTodo}
) {
    return (
        <div>
            <ul style={{ listStyleType: "none" }}>
                {todos.map(todo => (
                <TodoItem 
                key={todo.id} 
                todo={todo} 
                toggleComplete={toggleComplete} 
                deleteTodo={deleteTodo}
                />))}
            </ul>
        </div>
    )
}

export default TodoList
