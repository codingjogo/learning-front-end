import React, { useState } from "react";

const TaskList = ({ tasks }) => {
    return (
        <ul>
            {tasks.map((task) => {
                <li key={task.id}>
                    <Task  task={task} />
                </li>;
            })}
        </ul>
    );
};

const Task = ({ task }) => {
    const [isEditing, setIsEditing] = useState(false);

    let labelContent;
    if (isEditing) {
        labelContent = (
            <>
                {/* TODO
                    - onChange
                */}
                <input type="text" value={task.text} />
                {/* TODO
                    - onSave
                */}
                <button onClick={() => setIsEditing(false)}>Save</button>
            </>
        );
    } else {
        // this is the default values from initial state
        labelContent = (
            <>
                <p>{task.text}</p>
                {/* TODO
                    - onEdit change the state to true
                */}
                <button onClick={() => setIsEditing(true)}>Edit</button>
            </>
        );
    }
    return (
        <>
            <label>
                {/* TODO
            - on Change of this checkbox **updates the state**
        */}
                <input type="checkbox" checked={task.done} />
                {labelContent}
                {/* TODO
            - onDelete of this item
        */}
                <button>Delete</button>
            </label>
        </>
    );
};

export default TaskList;
