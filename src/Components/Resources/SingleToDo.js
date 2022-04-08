import React from "react";

export default function SingleToDo(props) {
  return (
    <div className="singletodo col-md-5 m-4">
      <h3>{props.todo.Name}</h3>
      {props.todo.Description !== null ? (
        <p>{props.todo.Description}</p>
      ) : (
        <p>No Description Provided</p>
      )}
      <a
        href={props.todo.Url}
        target="_blank"
        rel="noreferrer"
        className="btn btn-info"
      >
        Visit {props.todo.LinkText}
      </a>
    </div>
  );
}
