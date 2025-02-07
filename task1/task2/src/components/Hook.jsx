import React from "react";
import { IoMdClose } from "react-icons/io";

const UsestateHook=({handleLoginForm})=>{
    return(<>
        <div className="content">
            <form className="formcontainer">
                <div className="button">
                <div>
                    <IoMdClose onClick={handleLoginForm} className="input"/>
                    </div>
                   
    <h2>Forgot your password?</h2>
    <p class="sub-heading">Enter the email address associatedwith your account
         and we willseend you a link to reset your password</p>
    <label for="email">Email address*</label><br/>
    <input type="text" placeholder="Enter your email address"/><br/>
    <button><a href="change.html">send a link</a></button>
   

                    </div>
            </form>
        </div></>
    )
}
export default Hook