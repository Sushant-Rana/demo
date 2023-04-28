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

  return (
    <form onSubmit={handleSearch}>
      <input type="text" value={searchQuery} onChange={handleInputChange} />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBox;
