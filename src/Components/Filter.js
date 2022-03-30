import React from "react";

export default function Filter(props) {
  const { changeType } = props;
  return (
    <div>
      <select className="type-filter" onChange={changeType}>
        <option>All</option>
        <option>Hard</option>
        <option>Easy</option>
      </select>
    </div>
  );
}
