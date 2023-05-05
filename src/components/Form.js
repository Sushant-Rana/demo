import React, { Component } from "react";
import "../App.css"

//import { useSelector, useDispatch } from 'react-redux';
//import {actionCreators } from '../state/index';


class Form extends Component {
  constructor(props) {

    super(props);
 
    console.log(this.props);
    this.state = {
      name: "",
      date: "",
      description: "",
      
    };
  }

  componentDidMount() {
    console.log("Form component mounted");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Form component updated");
  }

  componentWillUnmount() {
    console.log("Form component unmounted");
  }

  handleChange = (e) => {
    this.setState({ name: e.target.value });
  }

  handleChanged = (e) => {
    this.setState({ date: e.target.value });
  }

  handleChangedd = (e) => {
    this.setState({ description: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    //const dispatch = useDispatch();
    //dispatch(actionCreators.todoAdd(this.state.name, this.state.date, this.state.description));
    this.props.addTask(this.state.name, this.state.date, this.state.description);
    this.setState({ name: "", date: "", description: "" });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
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
          value={this.state.name}
          placeholder="Heading"
          onChange={this.handleChange}
        />
        <input
          type="date"
          id="new-todo-inp"
          className="input input__lg"
          name="text"
          autoComplete="off"
          min={new Date().toISOString().slice(0, 10)}
          value={this.state.date}
          placeholder="Deadline"
          onChange={this.handleChanged}
        />
        <input
          type="text"
          id="new-todo"
          className="input input__lg"
          name="text"
          autoComplete="on"
          value={this.state.description}
          placeholder="Description"
          onChange={this.handleChangedd}
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
      </form>
    );
  }
}

export default Form;
