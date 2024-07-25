import React, { useState } from "react";
import "./Search.css";
const Search = ({ onSearch }) => {
  const [term, setTerm] = useState("");

  const handleSearch = () => {
    onSearch(term);
  };

  return (
    <div className="search">
      <input
        type="text"
        className="search-input"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Search retreats by title"
      />
      <button className="search-btn" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default Search;
