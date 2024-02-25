import React, {useState} from 'react';


export const EditTodoForm = ({addTodo}) => {
    const [value, setValue] = useState('')
    const handleSubmit = e => {
        e.preventDefault();
        
        addTodo(value)

        setValue('')

        let cutValue = value.replace(/\s+/g, '')

        if (cutValue === '') {
            console.log('no way hosei')
            value('')
        }
        
    }
    
    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input type='text' 
            className='todo-input' 
            value={value}
            placeholder='What is the task today?'
            onChange={(event) => setValue(event.target.value)}>
            </input>
            <button type='submit' className='todo-btn'>Add Task</button>
        </form>
    );
}
