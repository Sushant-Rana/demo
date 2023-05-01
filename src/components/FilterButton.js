import React from "react";
import "../App.css"
function FilterButton(props) {
    return (
        
      <button
        type="button"
        className="filter-button"
        aria-pressed={props.isPressed}
        onClick={() => props.setFilter(props.name)}
      >
        <span className="visually-hidden">Show </span>
        <span>{props.name}</span>
        <span className="visually-hidden"> tasks</span>
      </button>
    );
  }
export default FilterButton;
