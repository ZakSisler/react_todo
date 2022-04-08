//Step 4 - CatCreate - Create the form
import React from "react";
import { Formik, Form, Field } from "formik";
import catSchema from "../../Utilities/validationSchemas";
import axios from "axios";

export default function CatForm(props) {
  const handleSubmit = (values) => {
    console.log(values);
    if (!props.category) {
      // console.log('sicko mode (create)')
      //Step 7 - CatCreate - Create function
      //Assemble temporary object to send the data
      const catToCreate = {
        Name: values.Name,
        Description: values.Description,
      };
      //send to the API
      axios
        .post("http://localhost:53439/api/Categories", catToCreate)
        .then(() => {
          props.setShowCreate(false);
          props.getCategories();
        });
    } else {
      console.log("goblin mode (edit)");
    }
  };
  return (
    <div className="createCategory m-2 text-white text-center">
      <Formik
        initialValues={{
          Name: props.category ? props.category.Name : "",
          Description: props.category ? props.category.Description : "",
        }}
        validationSchema={catSchema}
        onSubmit={(values) => handleSubmit(values)}
      >
        {({ errors, touched }) => (
          <Form id="catForm" className="row text-center m-auto">
            <div className="form-group m-1 p-1">
              <Field name="Name" className="form-control" placeholder="Name" />
              {errors.Name && touched.Name ? (
                <div className="text-danger">{errors.Name}</div>
              ) : null}
            </div>
            <div className="form-group m-1 p-1">
              <Field
                name="Description"
                className="form-control"
                placeholder="Description"
              />
              {errors.Description && touched.Description ? (
                <div className="text-danger">{errors.Description}</div>
              ) : null}
            </div>
            <div className="form-group m-1">
              <button className="btn btn-success" type="submit">
                Submit Category to API
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
