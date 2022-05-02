import React from "react";

const TodoList = (props) => {
  return (
    <div className="single-list">
      <input
        type="checkbox"
        onChange={() => props.handleChange(props.id)}
        className="chkval"
      />
      <h4>{props.inp}</h4>
      <h4 className="delbtn" onClick={() => props.onSelect(props.id)}>
        X
      </h4>
    </div>
  );
};
export default TodoList;
