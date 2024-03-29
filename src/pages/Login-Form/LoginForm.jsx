import React, { useContext, useEffect, useState } from 'react'
import "./loginform.css"
import { useNavigate } from 'react-router-dom'

import { ThemeBtn } from '../../Components/theme-btn/ThemeBtn'
import { AuthContext } from '../../context/AuthContext'



export const LoginForm = () => {
 
  
  
const [formValues, setFormValues] = useState({username:"", password:""})
const [formErrors, setFormErrors] = useState({})
const [isSubmit, setIsSubmit] = useState(false)
const navigate = useNavigate()

const {login} = useContext(AuthContext)



const handleChange = (e) => {
  const {name, value} = e.target;
  setFormValues({...formValues, [name]:value})
}

const handleSubmit = (e) => {
  console.log(formValues.username)
  e.preventDefault();
  setFormErrors(validate(formValues))
  setIsSubmit(true)

  if(isFormValid()){
    login()
    navigate('/home')
  }else{
    alert(`UserName= Test
Password= 1234`)
  }

}




const isFormValid = () => {
  if (
    formValues.username.trim() === "Test" &&
    formValues.password.trim() === "1234"
  ) {
    return true;
  }
  return false;
};


useEffect(()=>{
if(Object.keys(formErrors).length === 0 && isSubmit){

}
},[formErrors])




const validate = (values) => {
  const errors = {};
  if(!values.username){
    errors.username = "Username is required!"
  }
  if(!values.password){
    errors.password = "Password is required!"
  }else if (values.password.length < 4) {
    errors.password = "Password must be more than 3 characters"
  }
  else if (isFormValid() !== "true") {
    errors.username = "Username or Password is incorrect"
  }
  return errors

}


  return (
    
      
    <div className='login-main-div'>
      <div className='white-wrapper-div'>
      <div className='login-theme-btn-div'>
         <ThemeBtn/>

      </div>
      </div>



<form onSubmit={handleSubmit}>

    <div className='form-container'>
     
     <div className='alert-div'>

<p>{formErrors.username}</p>
 </div>
<div className='userName-div'>
<input type="name" name='username' placeholder='UserName' value={formValues.username} onChange={handleChange} />
</div>
<div className='alert-div'>
 <p>{formErrors.password}</p>
</div>
<div className='password-div'>
<input type='password' name='password' placeholder='password' value={formValues.password} onChange={handleChange} />
</div>

<div className='btn-div'>
         <button  >Submit</button> 
      </div>                                                                                                   
    </div>
</form>
    </div>
    
  )
}

 