import React from "react";

/**
 * Todo:
 * Lengkapi komponen "Todo" sesuai dengan kriteria berikut
 * 1. Dapt menambahkan to-do
 * 2. Dapat menampilkan daftar to-do
 * 3. Dapat menghapus daftar to-do
 */


const Todo = () => {
    const [todos, setTodos] = React.useState([]);
    const [input, setInput] = React.useState('');

    const addTodoHandler = () => {

        setTodos((prevTodos)=> {
            return[...prevTodos, {id: +new Date(), name : input}];
        });

        // Menghapus nilai di dalam input setelah To-do dimasukkan.

        setInput('');
    };


    const removeTodoHandler = (id) => {
        setTodos((prevTodos) => {
            return prevTodos.filter((todo) => todo.id !== id );
        });

    };


    const inputChangeHandler = (event) => {

        setInput(event.target.value);
    };



    return (
        <div>
            <div>
                <input value={input} onChange={inputChangeHandler} />
                <button onClick={addTodoHandler}>Add to-do</button>
            </div>

            <ul>
                {todos.map((todo)=> (
                    <li key={todo.id}>
                        {todo.name}
                        <button onClick={()=> removeTodoHandler(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>

        </div>
    );
}

export default Todo;