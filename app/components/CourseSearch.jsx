"use client";

import { useState } from "react";

const CourseSearch = ({ getSearchResults }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(query);
    const res = await fetch(`/api/courses/search?query=${query}`);
    const courses = await res.json();
    getSearchResults(courses);
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        className="search-input"
        type="text"
        placeholder="Search Courses"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />
      <button className="search-button" type="submit">
        Search
      </button>
    </form>
  );
};

export default CourseSearch;
