import React from 'react';
import { EditTodoForm  } from './TodoForm';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import { EditTodo } from './Todo';
uuidv4();
export const EditTodoWrapper = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        setTodos([...todos, { id: uuidv4(), task: todo, Completed: false, isEditing: false }]);
        console.log(todos);
    }

    return (
        <div className='TodoWrapper'>
            <h1>Get Things Done! Like a CHAD!</h1>

            <EditTodoForm addTodo={addTodo} />
            {todos.map((todo, index) => ( // Changed EditTodo to todo
                <EditTodo task={todo} key={index} />
            ))}
            <p>Chad=cool person</p>
            {/* Either remove this or add a valid task prop */}
        </div>
    );
}
