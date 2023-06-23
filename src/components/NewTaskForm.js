import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';

const INITIAL_FORM_DATA = {
    title: '',
    description: ''
}

const NewTaskForm = (props) => {
    const [taskFormData, setTaskFormData] = useState(INITIAL_FORM_DATA);

    const anInputChanged = (event) => {
        console.log(event);
        const newTaskFormData = {
            ...taskFormData,
            [event.target.name]: event.target.value
        };

        setTaskFormData(newTaskFormData);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        props.createTask(taskFormData);

        setTaskFormData(INITIAL_FORM_DATA);
    };

    return(
        <div>
            <h2>New Task</h2>
            <form onSubmit={onFormSubmit}>
                <label htmlFor="taskTitle">Task: </label>
                <input
                id="taskTitle"
                name="title"
                type="text"
                value={taskFormData.name}
                onChange={anInputChanged}
                ></input>
                <label htmlFor="taskDescription">Description: </label>
                <input
                id="taskDescription"
                name="description"
                type="text"
                value={taskFormData.description}
                onChange={anInputChanged}
                ></input>
                <input type="submit" value="add a task!"></input> 
            </form>

        </div>
    );
};

NewTaskForm.propTypes = {
    createTask: PropTypes.func
};

export default NewTaskForm;