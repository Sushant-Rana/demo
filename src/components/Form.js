import React, { useState } from "react";
import "../App.css"

function Form(props) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleChanged(e) {
    setDate(e.target.value);
  }


  function handleChangedd(e) {
    setDescription(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    props.addTask(name,date,description);
    setName("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2 className="form">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={name}
        placeholder="Heading"
        onChange={handleChange}
      />
       <input
        type="date"
        id="new-todo-inp"
        className="input input__lg"
        name="text"
        autoComplete="off"
        min={new Date().toISOString().slice(0,10)}
        value={date}
        placeholder="Deadline"
        onChange={handleChanged}
      />
      <input
        type="text"
        id="new-todo"
        className="input input__lg"
        name="text"
        autoComplete="on"
        value={description}
        placeholder="Description"
        onChange={handleChangedd}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
}

export default Form;
