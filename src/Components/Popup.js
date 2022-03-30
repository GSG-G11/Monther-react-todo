import React from "react";

export default function Popup(props) {
  const { closePopUp } = props;
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <div className="popup-header">
          <h3>Add New task</h3>
          <button onClick={closePopUp}>X</button>
        </div>
        <hr />
        <form>
          <label for="title">Title :</label>
          <input type="text" id="title" />
          <label for="desc">Description :</label>
          <textarea type="field" id="desc"></textarea>
          <label for="date">Date :</label>
          <input type="date" id="date" />
          <button>Add</button>
        </form>
      </div>
    </div>
  ) : (
    ""
  );
}
