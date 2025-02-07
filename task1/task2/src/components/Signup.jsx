import React,{useState} from "react";
import '../Styles/hooks.css';
import UsestateHook from "./UsestateHook";
const handlemodel=()=>{

    const [hooks,setUsestateHook]=useState(false);
    
        setUsestateHook(!hooks);}
        
        
    const Signup=()=>{
    return(
        <div>
            <form>
            <div className="overlay">
            <div className="form">
                <h3>Create Account</h3>
                <input type="text" placeholder=" enter yourfirst name" className="input" id="name" />
                <input type="text" placeholder="enter your last name" className="input" id="name" />
                <input type="text" placeholder="enter your phone" className="input" id="phone" />
            <input type="email" placeholder="enter email" className="input" id="email" />
            <button type="login" className="button" onClick={handlemodel}>sign up</button>
            </div></div>
            </form>
             {/* {hooks && <setUsestateHook handlemodal={handlemodel}/>}  */}
        </div>
     )

 }


export default Signup;