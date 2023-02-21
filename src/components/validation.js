import React from "react";

const validation = (values) =>{
    let errors={};
    if(!values.username)
        errors.username="Name is required."
    if(!values.email){
        errors.email="Email is required."
    } else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email="Email is inavlid."
    }
    if(!values.password){
        errors.password="Password is required."
    } else if(values.password.length < 5){
        errors.password="Password must be more then five characters."
    }
    // if(!values.confirmPassword){
    //     errors.confirmPassword="Confirm password is required."
    //     // }else if(values.confirmPassword!== values.password ){
    //     //     errors.confirmPassword="Password and Confirm Password does not match."
    //     }
 
    
    return errors
}
 export default validation;