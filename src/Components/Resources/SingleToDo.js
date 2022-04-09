import React from "react";

export default function SingleToDo(props) {
  return (
    <div className="singletodo col-md-5 m-4">
      <h3>{props.todo.Action}</h3>
      {props.todo.Done ? <p>Complete</p> : <p>In progress</p>}
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
