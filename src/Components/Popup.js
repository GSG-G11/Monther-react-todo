import React from "react";

export default function Popup(props) {
  const { closePopUp, addToDos } = props;
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <div className="popup-header">
          <h3>Add New task</h3>
          <button onClick={closePopUp}>X</button>
        </div>
        <hr />
        <form className="form" onSubmit={addToDos}>
          <label htmlFor="title">Title :</label>
          <input type="text" id="title" />
          <label htmlFor="desc">Description :</label>
          <textarea type="field" id="desc"></textarea>
          <label htmlFor="date">Date :</label>
          <input type="date" id="date" />
          <select id="type">
            <option>Hard</option>
            <option>Easy</option>
          </select>
          <button>Add</button>
        </form>
      </div>
    </div>
  ) : (
    ""
  );
}
