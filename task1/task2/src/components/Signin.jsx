import React from "react";
import '../Styles/hooks.css';
import { IoMdClose } from "react-icons/io";

const Signin =({handleModel}) =>
{
    return(
        <div>
       
            <form >
                 <div className="overlay">
                    <div className="form">
                <div><IoMdClose onClick={handleModel} className="close"/></div> 
                <h3>Reset password</h3>
                <label htmlFor="email">Email address*</label>
            <input type="email" placeholder="enter your email" className="input" id="email" required/>
            <label htmlFor="password">Password*</label>
            <input type="password" placeholder="Enter your password" className="input" id="password" required/>
            <label htmlFor="password"> Confirm Password*</label>
            <input type="password" placeholder="Enter your password" className="input" id="confirm password" required/>
   
   <button type="login" className="button">login</button>
   </div>
   </div>
   </form>
   </div>
    );
}
export default Signin