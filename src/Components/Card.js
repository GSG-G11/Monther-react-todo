import React from "react";

export default function Card(props) {
  const { title, desc, date, type } = props;
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{desc}</p>
      <div className="date-card">
        <p>{date}</p>
      </div>
      <div className="type-card">
        <p>{type}</p>
      </div>
      <input className="check-card" type="checkbox" />
      <button>X</button>
    </div>
  );
}
