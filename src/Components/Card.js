import React from "react";

export default function Card(props) {
  const { id, title, desc, date, type, deleteToDo } = props;
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
      <button onClick={() => deleteToDo(id)}>X</button>
    </div>
  );
}
