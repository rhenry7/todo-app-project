import React, {useState} from 'react'
import TodoList from './TodoList';


function TodoForm({ addTodo, deleteTodoAll }) {
    const [todo, setTodo] = useState({
        id: "",
        item: "",
        completed: false
    });


    function handleChange(e) {
        setTodo({...todo, item: e.target.value});
    }
    // uuid for giving each item its own id. import for only deleting individual item and not all items. 
    function uuid(){
        var dt = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = (dt + Math.random()*16)%16 | 0;
            dt = Math.floor(dt/16);
            return (c=='x' ? r :(r&0x3|0x8)).toString(16);
        });
        return uuid;
    }
    
    function handleSubmit(e){
        e.preventDefault();
        // if field is empty, display an alert to enter information
        if (todo.item === ""){
            return alert("Please enter a new item. Input is currently empty")
        } else {
            addTodo({...todo, id: uuid() });
            // reset todo 
            setTodo({...todo, item: "" });
        }
    }


    function handleDeleteAll(e){
        e.preventDefault();
        setTodo({...todo, item: "" });
    }

    // function noTodos(e){
    //     e.preventDefault();
    //     if(todo.item === 0){
    //         return alert("Please enter a new item. Input is currently empty")
    //     } else {
    //         addTodo({...todo, id: uuid() });
    //         // reset todo 
    //         setTodo({...todo, item: "" });
    //     }
        
    // }

    // function handleDeleteAll(e) {
    //     e.preventDefault();
    //     deleteTodoAll(todo.id)
    // }

    function deleteTodoAll(e) {
        e.preventDefault();
        setTodo({...todo, item: "" });
        return alert("delete all was clicked");
      }

    return (
        <div>
<form onSubmit={handleSubmit} className="py-3">
           <input 
           className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded-full text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full text-gray-900 " 
           name="item"
           type="text"
           value={todo.item}
           onChange={handleChange}
           placeholder="Add a new item!" />
           <button 
           class="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" 
           type="submit">Submit</button> 


        {
            // button below is to delete all.. 
        }
          
       </form>
       {/* <button 
           class="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" 
           type="submit" 
           value={todo.item}
           onChange={handleChange}
           handleDeleteAll={handleDeleteAll}
           deleteTodoAll={deleteTodoAll}> 
           Delete All
           </button> */}
        </div>
       
    )
}

export default TodoForm
