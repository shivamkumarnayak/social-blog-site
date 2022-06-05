import React from 'react';
import './contact.css';

const Contact= ()=>{
    return(
        <>
       <div className="contact">
            <h3>For Enquiry Contact Us</h3>

            <div class="container">
            <form>      
               <div className="field">
               <input name="name" type="text" class="feedback-input" placeholder="Enter Your Name" />   
               </div>
                <div className="field">
                <input name="email" type="text" class="feedback-input" placeholder="Enter Your Email" />
                </div>
                <div className="field">
                    <input type="number" class="feedback-input" placeholder='Enter Your Phone Number' />
                </div>
               <div className="btn">
               <input type="submit" id='button' value="SUBMIT"/>
               </div>
            </form>
            </div>
       </div>
        </>
    );
};
export default Contact;
