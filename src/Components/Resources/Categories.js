//Step 1 CategoriesRead
import React, { useState, useEffect } from "react";
// import "./Categories.css";
import { Container } from "react-bootstrap";
import axios from "axios";
import SingleCategory from "./SingleCategory";
//Step 1 - CatCreate - Import the useAuth
import { useAuth } from "../../contexts/AuthContext";
import CatCreate from "./CatCreate";

export default function Categories() {
  //Step 2 - CategoriesRead
  const [categories, setCategories] = useState([]);

  //Step 2 - CatCreate - currentUser & state variable for showCreate
  const { currentUser } = useAuth();
  const [showCreate, setShowCreate] = useState(false);

  //Step 3 - create the function (import axios)
  const getCategories = () => {
    axios.get("http://localhost:53439/api/Categories").then((response) => {
      setCategories(response.data);
    });
  };

  //Step 4 CategoriesRead - useEffect
  useEffect(() => {
    getCategories();
  }, []); // at this point you can test browser by inspecting the components state data

  return (
    <section className="categories">
      <article className="bg-info p-5">
        <h1 className="text-center">Categories Dashboard</h1>
      </article>
      {/* step 3 - CatCreate - button and form conditional rendering */}
      {currentUser.email === process.env.REACT_APP_EMAIL_ADMIN && (
        <div className="bg-dark p-2 mb-3 text-center">
          {showCreate ? (
            <>
              <button
                onClick={() => setShowCreate(false)}
                className="btn btn-warning"
              >
                Cancel
              </button>
              {/* Step 6 - CatCreate - Render the CatForm */}
              <CatCreate
                setShowCreate={setShowCreate}
                getCategories={getCategories}
              />
            </>
          ) : (
            <button
              onClick={() => setShowCreate(true)}
              className="btn btn-info"
            >
              Create a New Category
            </button>
          )}
        </div>
      )}
      <Container>
        <table className="table bg-info table-dark mt-3 mb-3">
          <thead className="table-secondary text-uppercase">
            <tr>
              <th>Name</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {/* Step 5 - CategoriesRead - map the categories to the Single Category component */}
            {categories.map((x) => (
              <SingleCategory key={x.CategoryId} category={x} />
            ))}
          </tbody>
        </table>
      </Container>
    </section>
  );
}
