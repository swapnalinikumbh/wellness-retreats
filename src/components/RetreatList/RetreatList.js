import React from "react";
import "./RetreatList.css";

const formatDate = (timestamp) => {
  const date = new Date(timestamp * 1000);
  const options = { month: "long", day: "numeric", year: "numeric" };
  return date.toLocaleDateString("en-US", options);
};

const RetreatList = ({ retreats }) => {
  return (
    <div className="retreat-list">
      {retreats.map((retreat) => (
        <div className="retreat" key={retreat.id}>
          <img src={retreat.image || "placeholder.jpg"} alt={retreat.title} />
          <h6>{retreat.title}</h6>
          <p>{retreat.description}</p>
          <p>Date: {formatDate(retreat.date)}</p>
          <p>Location: {retreat.location}</p>
          <p>Price: ${retreat.price}</p>
        </div>
      ))}
    </div>
  );
};

export default RetreatList;
