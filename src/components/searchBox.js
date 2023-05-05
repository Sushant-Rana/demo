import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';

function SearchBox(props) {
  const data = useSelector(state => state.amount);
  const [searchQuery, setSearchQuery] = useState("");

  function handleSearch(event) {
    event.preventDefault();
    props.handleSearch(searchQuery);
  }

  function handleInputChange(event) {
    setSearchQuery(event.target.value);
  }

  return (<div >
    <form className="search-box" onSubmit={handleSearch}>
      {data}
      <input type="text" value={searchQuery} onChange={handleInputChange} placeholder="Enter here ..." />
      <button className="search-button" type="submit">Search</button>
    </form></div>
  );
}

export default SearchBox;
