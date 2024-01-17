//! This file contains the code for the Contact page. Css not kept here.

// import
import '../App.css';
import { useState } from 'react';
import { validateEmail } from '../helpers/helpers';

// export Contact function that returns the Contact Me page html
export default function Contact() {
  // set our const's
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const[message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Function to handle any change of input boxes
  const handleInputChange = (e) => {
    // Getting the value and name of the new input
    const { target } = e;
    const inputType = target.name; 
    const inputValue = target.value;

    // Set the state of wherever user types
    if (inputType === 'userName') {
      setUserName(inputValue);
    } else if (inputType === 'email'){
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // prevent the default which is to refresh the page
    e.preventDefault();

    // First check to see if the email is valid or if username is empty.
    if (!validateEmail(email) || !userName) {
      setErrorMessage('Username is null or email is invalid');

      return;
    }

    // Return form to default if a sucessful submission
    setUserName('');
    setEmail('');
    setMessage('');
    setErrorMessage('');
  };


  return (
    <div className="main-div">
          <h1 className="page-title">Contact Me </h1>
          <p className='description-tag'>Below you can contact me via email.</p>
          <hr></hr>

        {/* Error message */}
        <section className='error-message'>
          <p>{errorMessage}</p>
        </section>

        {/* Form needs to have inputs for name, email, and message */}
        <form className='email-form'>
          <h2 className='form-titles'>Name: </h2>
          <input name='userName' value={userName} type='text' placeholder='Please provide your name here' className='formName-input' onChange={handleInputChange} ></input>

          <h2 className='form-titles'>Email: </h2>
          <input name='email' value={email} type='text' placeholder='Please provide your email here. (Must be valid!)' className='formEmail-input' onChange={handleInputChange}></input>

          <h2 className='form-titles'>Message: </h2>
          <textarea name='message' value={message} type='text' placeholder='Please provide your message here' className='formMessage-input' onChange={handleInputChange}></textarea>

          <button className="formSubmit-button" onClick={handleFormSubmit}>Submit Your Message</button>
        </form>

        {/* Error message */}
        <section className='btm-error-message'>
          <p>{errorMessage}</p>
        </section>


      </div>
    );
  }
  
  // e.preventDefault();
  // console.log(e);

  // const { name, value } = e.target;
  // setEmail(value);