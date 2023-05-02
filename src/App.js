/* eslint-disable jsx-a11y/no-redundant-roles */
import React from "react";
import Form from "./components/Form"; //done
import FilterButton from "./components/FilterButton"; //done
import Todo from "./components/Todo"; //in-prog
import { nanoid } from "nanoid";
import { useState } from "react";
import SearchBox from "./components/searchBox";
import './App.css';
import imgsrc from './assets/logo.svg'

//props=data=[]

function App(props) {
  const [filter, setFilter] = useState('All');
  const FILTER_MAP = {
    All: () => true,
    Active: (task) => !task.completed,
    Completed: (task) => task.completed
  };
  const FILTER_NAMES = Object.keys(FILTER_MAP);
  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));
  const [tasks, setTasks] = useState(props.tasks);

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        // use object spread to make a new object
        // whose `completed` prop has been inverted
        return { ...task, completed: !task.completed }
      }
      return task;
    });
    setTasks(updatedTasks);
  }
  var taskList = tasks
    .filter(FILTER_MAP[filter])
    .map((task) => (
      <Todo
        id={task.id}
        name={task.name}
        completed={task.completed}
        key={task.id}
        deadline={task.deadline}
        description={task.description}
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    ));


  function handleSearch(query) {
    const filteredTasks = tasks.filter((task) =>
      task.name.toLowerCase().includes(query.toLowerCase())
    );
    setTasks(filteredTasks);
  }


  function addTask(name, date, descript) {
    const newTask = { id: nanoid(), name, deadline: date, description: descript, completed: false };
    setTasks([...tasks, newTask]);
  }
  function deleteTask(id) {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  }
  function editTask(id, newName, newDeadline) {
    const editedTaskList = tasks.map((task) => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        //
        return { ...task, name: newName, deadline: new Date(newDeadline) }
      }
      return task;
    });
    setTasks(editedTaskList);
  }


  const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task';
  const headingText = `${taskList.length} ${tasksNoun} remaining`;


  return (
    <div className="container">
      <figure align="center">
        <img src={imgsrc} alt="Logo"></img>
        <figcaption>ToDo App</figcaption>
      </figure>
      <div><SearchBox handleSearch={handleSearch} /></div>
      <Form className="task-item" addTask={addTask} />
      <br />
      <div className="filter-buttons">
        {filterList}
      </div>
      <h2 align="center">{headingText}</h2><br />
      <div className="card-grid">
        {taskList}
      </div>

    </div>
  );
}

export default App;
