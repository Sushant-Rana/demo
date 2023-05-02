import React, { useState } from "react";

import Deadline from "./deadlineBar";

export default function Todo(props) {

  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState('');
  const [date, setDate] = useState('date')

  function handleChange(e) {
    setNewName(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (newName.trim() !== "") {
      props.editTask(props.id, newName, date);
      setNewName(newName);
      setEditing(false);
    } else {
      alert("Please enter a valid value.");
    }
  }

  const editingTemplate = (<form className="stack-small" onSubmit={handleSubmit}>

    <div className="form-group">
      <label className="todo-label" htmlFor={props.id}>
        New name for {props.name}
      </label>
      <input
        id={props.id}
        className="todo-text"
        type="text"
        value={newName}
        onChange={handleChange}
      />
      <label className="todo-label" htmlFor={props.id}>
        New deadline for {props.name}
      </label>

      <input
        type="date"
        className="input"
        placeholder="Set a deadline"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

    </div>
    <div className="btn-group">
      <button
        type="button"
        className="btn todo-cancel"
        onClick={() => setEditing(false)}
      >
        Cancel
        <span className="visually-hidden">renaming {props.name}</span>
      </button>

      <button type="submit" className="btn btn__primary todo-edit">
        Save
        <span className="visually-hidden">new name for {props.name}</span>
      </button>
    </div>
  </form>
  );
  const viewTemplate = (
    <div className="card" task={props.id} data-deadline={props.deadline} >
      <div className="card-xp">
        <input
          id={props.id}
          type="checkbox"
          defaultChecked={props.completed}
          onChange={() => props.toggleTaskCompleted(props.id)}
        />
        <label htmlFor={props.id}>
          {props.name}
          <br />{props.deadline}
        </label>

      </div>

      <div className="button-grid">
        <button type="button" className="mocke" onClick={() => setEditing(true)}>
          Edit <span className="visually-hidden">{props.name}</span>
        </button>
        <button
          type="button"
          className="delmocke"
          onClick={() => props.deleteTask(props.id)}
        >
          Delete <span className="visually-hidden">{props.name}</span>
        </button></div>

    </div>


  );

  return (
    <li className="card-grid">{isEditing ? editingTemplate : viewTemplate}

    </li>
  );
}
  //<Deadline deadline= />
