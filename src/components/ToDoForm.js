import React, { useState } from 'react'

function ToDoForm() {
const [input, setInput] = useState('')

const handleSubmit = e => {
    e.preventDefault();
}

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Add a ToDO" value={input} name="text" className="todo-input" />
            <button className="todo-button">Button</button>
        </form>
    )
}

export default ToDoForm
