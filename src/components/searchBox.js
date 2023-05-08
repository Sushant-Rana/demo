import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';

function SearchBox(props) {
  const data = useSelector(state => state.amount);
  const [searchQuery, setSearchQuery] = useState("");
console.log('data is:',data._root.entries[0][1])
  function handleSearch(event) {
    event.preventDefault();
    props.handleSearch(searchQuery);
  }

  function handleInputChange(event) {
    setSearchQuery(event.target.value);
  }

  return (<div >
    <form className="search-box" onSubmit={handleSearch}>
      {data._root.entries[0][1]}<br />
      <input type="text" value={searchQuery} onChange={handleInputChange} placeholder="Enter here ..." />
      <button className="search-button" type="submit">Search</button>
    </form></div>
  );
}

export default SearchBox;
