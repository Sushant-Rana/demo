/* eslint-disable jsx-a11y/no-redundant-roles */
import React from "react";
import Form from "./components/Form"; //done
import FilterButton from "./components/FilterButton"; //done
import Todo from "./components/Todo"; //in-prog
import { nanoid } from "nanoid";
import { useState } from "react";
import SearchBox from "./components/searchBox";


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
  
  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        // use object spread to make a new object
        // whose `completed` prop has been inverted
        return {...task, completed: !task.completed}
      }
      return task;
    });
    setTasks(updatedTasks);
  }
  
  function handleSearch(query) {
    const filteredTasks = tasks.filter((task) =>
      task.name.toLowerCase().includes(query.toLowerCase())
    );
    setTasks(filteredTasks);
  }

  const [tasks, setTasks] = useState(props.tasks);
  function addTask(name) {
  const newTask ={id:nanoid(), name, completed: false };
  setTasks([...tasks, newTask]);
  }
  function deleteTask(id) {
  const remainingTasks = tasks.filter((task) => id !== task.id);
  setTasks(remainingTasks);
  }
  function editTask(id, newName) {
  const editedTaskList = tasks.map((task) => {
  // if this task has the same ID as the edited task
    if (id === task.id) {
      //
      return {...task, name: newName}
    }
    return task;
  });
  setTasks(editedTaskList);
  }

  const taskList = tasks
  .filter(FILTER_MAP[filter])
  .map((task) => (
  <Todo
  id={task.id}
  name={task.name}
  completed={task.completed}
  key={task.id}
  toggleTaskCompleted={toggleTaskCompleted}
  deleteTask={deleteTask}
  editTask={editTask}
  />
  ));




  const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task';
  const headingText = `${taskList.length} ${tasksNoun} remaining`;


  return (
    <div className="todoapp stack-large">
    
      <h1>TodoMatic</h1>
      <SearchBox handleSearch={handleSearch} />
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
      {filterList}
      </div>
      <h2 id="list-heading">{headingText}</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}

export default App;
