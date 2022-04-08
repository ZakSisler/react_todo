//npm install yup - This is for a validation tool - see implementation below
//npm install formik - This allows us to create forms easily in React
import * as Yup from "yup";
//Here we import everything from Yup package and alias it as Yup

const catSchema = Yup.object().shape({
  //Below we call to each property that will need to be validated and use Yup to define the requirements for each property (required, stringLength, etc.)
  Name: Yup.string().max(50, "Max 50 Character").required("Required"),
  Description: Yup.string().max(100, "Max 100 Characters"),
});

const todoSchema = Yup.object().shape({
  Action: Yup.string().max(200, "Max 200 Characters").required(),
  Done: Yup.bool().required(),
  CategoryId: Yup.number(),
});

export { todoSchema };
export default catSchema;
