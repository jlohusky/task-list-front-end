import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Task.css';

const Task = (props) => {
  const [complete, setComplete] = useState(props.isComplete);
  const buttonClass = complete ? 'tasks__item__toggle--completed' : '';

  const toggleComplete = () => {
    setComplete(!complete);
    // props.updateIsComplete(props.id);
    props.markComplete(props.id);
  };

  const toggleDelete = () => {
    props.updateDelete(props.id)
  }

  return (
    <li className="tasks__item">
      <button
        className={`tasks__item__toggle ${buttonClass}`}
        onClick={toggleComplete}
      >
        {props.title}
      </button>
      <button 
        className="tasks__item__remove button"
        onClick={toggleDelete}
      >x</button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  // updateIsComplete: PropTypes.func,
  updateDelete: PropTypes.func,
  markComplete: PropTypes.func
};

export default Task;
