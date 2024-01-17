//! This file contains the code for the Contact page. Css not kept here.

// import css
import '../App.css'

// export Contact function that returns the Contact Me page html
export default function Contact() {
    return (
      <div className="main-div">
          <h1 className="page-title">Contact Me </h1>
          <p className='description-tag'>Below you can contact me via email.</p>
          <hr></hr>

        {/* Form needs to have inputs for name, email, and message */}
        <form className='email-form' on onSubmit={''}>
          <h2 className='form-titles'>Name: </h2>
          <input type='text' placeholder='Please provide your name here' className='formName-input'></input>

          <h2 className='form-titles'>Email: </h2>
          <input type='text' placeholder='Please provide your email here. (Must be valid!)' className='formEmail-input'></input>

          <h2 className='form-titles'>Message: </h2>
          <input type='text' placeholder='Please provide your message here' className='formMessage-input'></input>

          <button className="formSubmit-button">Submit Your Message</button>
        </form>
      </div>
    );
  }
