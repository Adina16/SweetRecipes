import React from "react";


const validation = (values) => {
    
  let errors = {};
  if (!values.username) errors.username = "Name is required.";
  if (!values.email) {
    errors.email = "Email is required.";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email is inavlid.";
  }
  if (!values.password) {
    errors.password = "Password is required.";
  } else if (values.password.length < 5) {
    errors.password = "Password must be more then five characters.";
  }
  if(!values.confirm_password){
      errors.confirm_password="Confirm password is required."
      }else if(values.confirm_password!== values.password ){
          errors.confirm_password="Password and Confirm Password does not match."
      }

  return errors;
};
export default validation;
