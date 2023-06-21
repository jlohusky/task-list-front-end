import React from 'react';
import TaskList from './components/TaskList.js';
import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect( () => {
    axios.get('https://task-list-api-c17.onrender.com/tasks')
    .then( (response) => {
      const initialTasks = [];
      console.log('success!', response.data);
    })
    .catch( (error) => {
      console.log('error', error);
    });
  }, []);

  const updateIsComplete = (taskId) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        task.isComplete = !task.isComplete;
        return {...task};
      } else {
        return {...task};
      }
    });

    setTasks(updatedTasks);
  };

  const updateDelete = (taskId) => {
    const updatedTasks = tasks.map(task => {
      if (task.id !== taskId) {
        return {...task};
      }
    });

    const filteredUpdatedTasks = updatedTasks.filter(function (element) {
      return element !== undefined;
    });

    setTasks(filteredUpdatedTasks);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>{<TaskList 
        tasks={tasks} 
        updateIsComplete={updateIsComplete}
        updateDelete={updateDelete}
        />}</div>
      </main>
    </div>
  );
};

export default App;
