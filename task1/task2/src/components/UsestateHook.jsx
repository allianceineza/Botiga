import React, { useState } from "react";
import '../Styles/hooks.css';
import { IoMdClose } from "react-icons/io";
import Signup from "./Signup";
// import Signin from "./Signin";
import { IoCheckbox } from "react-icons/io5";

const Hooks = ({ closeform}) => {

  const[signup,setSignup]=useState(false);
  const handlemodal=()=>
  {
    setSignup(!signup);
  }
  const[signin,setSignin]=useState(false);
  const handleModal=()=>{
 setSignin(!signin);
  }
  return (
    <div>
    
      <form >
        <div className="overlay">
          <div className="form">
            <div>
              <IoMdClose onClick={closeform} className="close" />
            </div>

            <p>Login to an account</p>
            <label htmlFor="email">Email address*</label>
            <input type="email" placeholder="enter email" className="input" id="email" />
            <label type="password">Password*</label>
            <input type="password" placeholder="Enter your password" className="input" id="password" />
            <div className="forget">
             < input type="Checkbox" className="checkbox"/>Remember me 
               <span Link to="/signin" onclick={handleModal} Forgot password>Forgot password</span>
            </div>
            <button type="button" className="signin-button">Sign in</button>
            <p> Don't have an account? <span className="signup-button" onClick={handlemodal}><b>Sign up</b></span></p>
          </div>
        </div>
      </form>
      {signup && <Signup handlemodal={handlemodal}/>}
      {signin && <Signin handleforget={handleforget}/>}
    </div>
  );
}

export default Hooks;
