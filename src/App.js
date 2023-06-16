import React from 'react';
import TaskList from './components/TaskList.js';
import './App.css';
import { useState } from 'react';

const TASKS = [
  {
    id: 1,
    title: 'Mow the lawn',
    isComplete: false,
  },
  {
    id: 2,
    title: 'Cook Pasta',
    isComplete: true,
  },
];

const App = () => {
  const [tasks, setTasks] = useState(TASKS);

  const updateIsComplete = (taskId) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        task.isComplete = !task.isComplete;
        return {...task}
      } else {
        return {...task}
      }
    })

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
