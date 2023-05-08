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
import Dropdown from "./components/dropdown";

import './App.css';
import imgsrc from './assets/logo.svg';
//props=data=[]

function App(props) {
  const [pidList,setPidList]=useState(props.profile);

  const [filter, setFilter] = useState('All');
  const [prof, setProf] = useState(pidList[0]);
  const [showlist,setShowlist]=useState(props.tasks);
  //const [tasks,settsaks]=useState(props.tasks);
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
  const PROFILE_MAP = {
    Default: () => true,
    Basic: (task) => task.pid===prof,
  };
console.log(`prof now is ${prof}`);


  function toggleTaskCompleted(id) {
    console.log(`completed: ${id}`)
    const updatedTasks = showlist.map((task) => {
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
    .filter(PROFILE_MAP['Basic'])
    .map((task) => (
      <Todo
        pid={prof}
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
    const filteredTasks = showlist.filter((task) =>
      task.name.toLowerCase().includes(query.toLowerCase())
    );
    setShowlist(filteredTasks);
  }

  function addTask(name, date, descript) {
    const newTask = { id: nanoid(), name, deadline: date, description: descript,  pid: prof,completed: false };
    console.log(showlist);
    setShowlist([...showlist, newTask]);
  }
  function deleteTask(id) {
    const remainingTasks = showlist.filter((task) => id !== task.id);
    setShowlist(remainingTasks);
  }
  function editTask(id, newName, newDeadline) {
    console.log(`editTask: ${id}`)
    const editedTaskList = showlist.map((task) => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        //
        return { ...task, name: newName, deadline: newDeadline }
      }
      return task;
    });
    setShowlist(editedTaskList);
  }


  const tasksNoun = taskList.length !== 1 ? 'showlist' : 'task';
  const headingText = `${taskList.length} ${tasksNoun} remaining`;

console.log(showlist);
  return (
    <div className="container">
      <Dropdown profiles={pidList} setProf={setProf}/>
      <Profile pidList={pidList}/>
      <figure align="center">
        <img src={imgsrc} alt="Logo"></img>
        <figcaption>ToDo App</figcaption>
      </figure>
      <Bank />
      <div><SearchBox handleSearch={handleSearch} /></div>
      <Form className="task-item" addTask={addTask} pid={prof}/>
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
