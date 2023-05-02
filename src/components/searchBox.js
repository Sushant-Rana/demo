import React, { useState } from "react";

function SearchBox(props) {
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
      <input type="text" value={searchQuery} onChange={handleInputChange} placeholder="Enter here ..." />
      <button className="search-button" type="submit">Search</button>
    </form></div>
  );
}

export default SearchBox;
