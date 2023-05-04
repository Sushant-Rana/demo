/* eslint-disable jsx-a11y/no-redundant-roles */
import React from "react";
import Form from "./components/Form"; //done
import FilterButton from "./components/FilterButton"; //done
import Todo from "./components/Todo"; //in-prog
import { nanoid } from "nanoid";
import { useState } from "react";
import SearchBox from "./components/searchBox";
import Bank from "./components/Bank";
import Profile from "./components/Profile";

import './App.css';
import imgsrc from './assets/logo.svg';
//props=data=[]

function App(props) {
  const [pidList,setPidList]=useState(props.profile);
  var tasks;
  const [filter, setFilter] = useState('All');
  const [showlist,setShowlist]=useState(props.tasks);
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

 const Profile_NAMES = ['p1'];
 const ProfileList = Profile_NAMES.map((name) => (
  <FilterButton
    key={name}
    name={name}
    isPressed={name === filter}
    setFilter={setFilter}
  />
));


  function profileScreener(pid) {
    const remainingTasks = tasks.filter((task) => pid === task.pid);
    setPidList(remainingTasks);
  }

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
    setShowlist(updatedTasks);
  }
  var taskList = showlist
    .filter(FILTER_MAP[filter])
    .map((task) => (
      <Todo
        pid={task.pid}
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
    setShowlist(filteredTasks);
  }

  function addProfile(name) {
    const newPid = { pid: nanoid(), name };
    setPidList([...pidList, newPid]);
  }


  function addTask(name, date, descript, pid) {
    const newTask = { id: nanoid(), name, deadline: date, description: descript, completed: false, pid: pid };
    setShowlist([...tasks, newTask]);
  }
  function deleteTask(id) {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setShowlist(remainingTasks);
  }
  function editTask(id, newName, newDeadline) {
    const editedTaskList = tasks.map((task) => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        //
        return { ...task, name: newName, deadline: newDeadline }
      }
      return task;
    });
    setShowlist(editedTaskList);
  }


  const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task';
  const headingText = `${taskList.length} ${tasksNoun} remaining`;


  return (
    <div className="container">
      
      <figure align="center">
        <img src={imgsrc} alt="Logo"></img>
        <figcaption>ToDo App</figcaption>
      </figure>
      <Bank />
      <div><SearchBox handleSearch={handleSearch} /></div>
      <Form className="task-item" addTask={addTask} />
      <br />
      <div className="filter-buttons">
        {filterList}{ProfileList}
      </div>
      <h2 align="center">{headingText}</h2><br />
      <div className="card-grid">
        {taskList}
      </div>

    </div>
  );
}

export default App;
