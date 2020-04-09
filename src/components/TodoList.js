// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import { Todo } from './';

const TodoList = props => {
        return(
            <div>
                {props.todo.map(thing => (
                    <Todo thing={thing} key={thing.id} />
                ))}
            </div>
        )
}

export default TodoList;