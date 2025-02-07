import React from "react";
import '../Styles/contact.css';

function Contact() {
  return (
    <>
      <section className="contact-container">
        

        <div className="contact">

          <div className="amessage">

            <h1>Leave Us a Message</h1>
 
        <label for="name">Name <span class="required">*</span></label>
        <div class="name-group">
            <input type="text" id="first-name" name="first-name" placeholder="First" required/>
            <input type="text" id="last-name" name="last-name" placeholder="Last" required/>
        </div>

        <label for="email">Email <span class="required">*</span></label>
        <input type="email" id="email" name="email" required/>

        <label for="message">Comment or Message</label>
        <textarea id="message" name="message"></textarea>

        <button type="submit">Submit</button>
          </div>

          <div className="store1">
            <h1>Our Store</h1>
            <p>501-521 Fashion Ave, New York, NY 10018, USA</p>
            <p>PHONE:<br/> +1 212 244 2681</p>
            <p>E-MAIL: <br/>office@example.org</p>
            <h1>Store Hours</h1>
            <p>Sun: Closed</p>
            <p>Mon to Sat: 10 AM – 5:30 PM</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
