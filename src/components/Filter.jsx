import React from "react";

const Filter = ({ onFilterChange }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onFilterChange(name, value);
  };

  return (
    <div className="filter">
      <input
        type="text"
        name="title"
        placeholder="Filter by title"
        onChange={handleChange}
      />
      <input
        type="number"
        name="rate"
        placeholder="Filter by rate"
        onChange={handleChange}
      />
    </div>
  );
};

export default Filter;
