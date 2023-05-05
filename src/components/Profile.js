import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {actionCreators } from '../state/index';

import "../App.css"

function Profile(props) {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    function handleChange(e) {
        setName(e.target.value);
    }
    function handleSubmit(e) {
        e.preventDefault();
        dispatch(actionCreators.profileAdd(props.pidList,name));
        //props.addProfile(name);
        setName("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <h2 className="form">

            </h2>
            <input
                type="text"
                id="new-todo-input"
                className="input input__lg"
                name="text"
                autoComplete="off"
                value={name}
                placeholder="Profile Name"
                onChange={handleChange}
            />
           
            <button type="submit" className="btn btn__primary btn__lg">
                Add Profile
            </button>
        </form>
    );
}

export default Profile;
