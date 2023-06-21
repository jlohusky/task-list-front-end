import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';
import './TaskList.css';

const TaskList = (props) => {
  const tasks = props.tasks;

  const getTaskListJSX = (tasks, markComplete) => {
    return tasks.map((task) => {
      return (
        <Task
          key={task.id}
          id={task.id}
          title={task.title}
          isComplete={task.isComplete}
          // updateIsComplete={updateIsComplete}
          updateDelete={props.updateDelete}
          markComplete={markComplete}
        />
      );
    });
  };
  return <ul className="tasks__list no-bullet">{getTaskListJSX(tasks, props.markComplete)}</ul>;
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      isComplete: PropTypes.bool.isRequired,
    })
  ).isRequired,
  // updateIsComplete: PropTypes.func,
  updateDelete: PropTypes.func,
  markComplete:PropTypes.func
};

export default TaskList;
