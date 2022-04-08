//Step 1 - Read - Add useEffect and useState to the import
import React, { useState, useEffect } from "react";
// import "./Resources.css";
import { Container } from "react-bootstrap";
import axios from "axios";
import SingleToDo from "./SingleToDo";
import { useAuth } from "../../contexts/AuthContext";

export default function ToDos() {
  //Step 2 - read - Create a hook to house data
  const [todos, setToDos] = useState([]);

  const [showCreate, setShowCreate] = useState(false);
  const { currentUser } = useAuth();

  const getToDos = () => {
    //In order to make the request to the API, we must first install and import axios (npm install axios)
    axios.get("http://localhost:53439/api/ToDo").then((response) => {
      console.log(response);
      setToDos(response.data);
    });
  };

  useEffect(() => {
    getToDos();
  }, []);

  return (
    <section className="todos">
      <article className="bg-info p-5">
        <h1 className="text-center">ToDo Dashboard</h1>
      </article>
      {/* step 2 - CREATE - create the conditional render for the form to populate in */}
      {currentUser.email === process.env.REACT_APP_EMAIL_ADMIN && (
        <div className="bg-dark p-2 mb-3 text-center">
          <button
            className="btn btn-info"
            onClick={() => setShowCreate(!showCreate)}
          >
            {!showCreate ? "Create New ToDo" : "Close Form"}
          </button>
          <div className="createContainer">
            <h1>Showing Form</h1>
          </div>
        </div>
      )}
      {/* step 5 - READ - create UI - see SingleToDo.js for full implementation */}
      <Container>
        <article className="todoGallery row justify-content-center">
          {todos.map((x) => (
            <SingleToDo key={x.TodoId} todo={x} />
          ))}
        </article>
      </Container>
    </section>
  );
}
