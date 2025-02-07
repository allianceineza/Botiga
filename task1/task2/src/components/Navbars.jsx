import React, {useState} from "react";
function Navbars() {
    const [form, setForm]= useState(false);
    const handleForm=()=>{
        setForm(!form);
    }
    return(
        <section className="navigation">
     {form && <LoginForm handleForm={handleForm}/>
     }
     <div className="container">
        <div>logo</div>
     <button></button>
     </div>
        </section>
    )
}
export default Navbars