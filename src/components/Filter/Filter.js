import React, { useState } from "react";
import "./Filter.css";

const Filter = ({ onFilter }) => {
  const [date, setDate] = useState("");
  const [type, setType] = useState("");

  const handleDateChange = (e) => {
    setDate(e.target.value);
    onFilter({ date: e.target.value, type });
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
    onFilter({ date, type: e.target.value });
  };

  return (
    <div className="filter">
      <select
        className="filter-by-date"
        value={date}
        onChange={handleDateChange}
      >
        <option value="">Filter by Date</option>
        <option value="2023-2024">2023-2024</option>
        <option value="2024-2025">2024-2025</option>
      </select>
      <select className="all-types" value={type} onChange={handleTypeChange}>
        <option value="">All Types</option>
        <option value="Yoga">Yoga</option>
        <option value="Meditation">Meditation</option>
        <option value="Detox">Detox</option>
      </select>
    </div>
  );
};

export default Filter;
