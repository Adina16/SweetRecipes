import React from "react";


const loginValidation = (values) => {
    
  let errors = {};
  if (!values.username) errors.username = "Name is required.";
  if (!values.password) {
    errors.password = "Password is required.";}
  return errors;
};
export default loginValidation;
