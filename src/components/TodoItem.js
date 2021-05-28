import React from 'react'
import "../App";
import TodoList from './TodoList'




function TodoItem({todo, toggleComplete, deleteTodo}) {
    const [on, setOnState] = React.useState(false);
    const toggle = () => setOnState(o => !o);

    function handleCheckbox() {
        toggleComplete(todo.id);
    }

    function handleDelete(id) {
        deleteTodo(todo.id)
    }

   
    return (
        <div class="" style={{  display: "flex" }}>
        <div class="flex h-screen items-center justify-center">
  <div class="grid bg-white rounded-lg shadow-xl">
    <div class="flex justify-center py-4">
      {/* <div class="flex bg-purple-200 rounded-full md:p-4 p-2 border-2 border-purple-300">
        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
      </div> */}
    </div>

    <div class="flex justify-center">
      <div class="flex">
        <h1 class="text-gray-600 font-bold md:text-2xl text-6xl">Plant Name: {todo.item}</h1>
      </div>
    </div>

    <div class="grid grid-cols-1 mt-5 mx-7">
      <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Plant Type</label>
      <input class="py-2 px-3 rounded-lg border-2 text-sm text-gray-500 border-green-300 mt-1 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent" type="text" placeholder="What kind of plant am I? "  />
    </div>

    <div class="grid grid-cols-1 mt-5 mx-7">
      <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Plant Info</label>
      <input class="py-2 px-3 rounded-lg border-2 text-sm text-gray-500 border-green-300 mt-1 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent" type="text" placeholder="When was I purchased?"  />
    </div>

    <div class="grid grid-cols-1 mt-5 mx-7">
      <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Plant Family</label>
      <input class="py-2 px-3 rounded-lg border-2 text-sm text-gray-500 border-green-300 mt-1 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent" type="text" placeholder="I am a part of what family?"  />
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
      <div class="grid grid-cols-1">
        <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Pot Type</label>
        <input class="py-2 px-3 text-gray-500  rounded-lg border-2 text-sm border-green-300 mt-1 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent" type="text" placeholder="Enter Pot" />
      </div>
      <div class="grid grid-cols-1">
        <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Fertilzer</label>
        <input class="py-2 px-3 text-gray-500  rounded-lg border-2 text-sm border-green-300 mt-1 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent" type="text" placeholder="Fertilizer" />
      </div>
    </div>



    <div class="grid grid-cols-1 mt-5 mx-7">
      <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Light requirements</label>
      <input class="py-2 px-3 text-gray-500  rounded-lg border-2 text-sm border-green-300 mt-1 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent" type="text" placeholder="How much light do I need?" />
    </div>

    <div class="grid grid-cols-1 mt-5 mx-7">
      <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold mb-1">Upload Photo</label>
        <div class='flex items-center justify-center w-full'>
            <label class='flex flex-col border-4 border-dashed w-full h-32 hover:bg-gray-100 hover:border-pugreenrple-300 group'>
                <div class='flex flex-col items-center justify-center pt-7'>
                  <svg class="w-10 h-10 text-green-400 group-hover:text-green-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                  <p class='lowercase text-sm text-gray-400 group-hover:text-green-600 pt-1 tracking-wider'>Select a photo</p>
                </div>
              <input type='file' class="hidden" />
            </label>
        </div>
    </div>
    <p className="text-gray-500 pt-8 text-md ">Have I been watered?</p>

    <div class='grdi grid-cols-1 flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5'>
    <button class=" bg-red-500 hover:bg-red text-white active:bg-red-600 font-bold uppercase text-xs mx-4  px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" onClick={handleDelete} deleteTodo={deleteTodo}>delete</button>
    <button class={on ? 'on' : 'off'} on={on} onClick={toggle}><span class="pin" /></button>
    </div>
 

  </div>
</div>
            {/* <input class="m-4" type="checkbox" onClick={handleCheckbox} />
            <li>{todo.item}</li> */}
           
        </div>
    )
}

export default TodoItem
