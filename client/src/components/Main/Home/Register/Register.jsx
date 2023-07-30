import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [registerData, setRegisterData] = useState({});
  const [emailMessage, setEmailMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("")

  // Generates custom error message below search input
  const newError = (errMessage) => {
    setErrorMessage(errMessage)

    setTimeout(() => {
      setErrorMessage("")
    }, 3000);
  }

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    try {
      const registerData = {
        "user_name": e.target.registerUserName.value,
        "email": e.target.registerEmail.value,
        "password": e.target.registerPassword.value
      };
      setRegisterData(registerData);

      const request = await axios.post("https://backend-app-hbpdfkrhla-ew.a.run.app/api/users/register", registerData);
      if (request.data === 201) {
        console.log("user has been registered");
      };
    } catch (error) {
      newError(error.response.data.message)
    };
  };

  const handleEmailChange = (e) => {
    const emailValidation = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const email = e.target.value;
    if (!emailValidation.test(email) && email.length > 0) {
      setEmailMessage("Email must have a valid format");
    } else {
      setEmailMessage("");
    }
  };

  const handlePasswordChange = (e) => {
    const passwordValidation = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{9,}$/;
    const password = e.target.value;
    if (!passwordValidation.test(password) && password.length > 0) {
      setPasswordMessage("Password must contain lowercase, uppercase, digit, and special character, and be at least 9 characters long");
    } else {
      setPasswordMessage("");
    }
  };

  return (
    <div className="container">
      <h2>Register</h2>
      <img src="https://www.tailorbrands.com/wp-content/uploads/2020/07/mcdonalds-logo.jpg" alt="" />
      <form action="" className="auth-forms" onSubmit={handleRegisterSubmit} id="register-form">
        <input name="registerUserName" type="text" placeholder="Your user name" />
        <input name="registerEmail" type="email" placeholder="Place your email" onChange={handleEmailChange} />
        {emailMessage && <p className="error-message">{emailMessage}</p>}
        <input name="registerPassword" type="password" placeholder="Write a new password" onChange={handlePasswordChange} />
        {passwordMessage && <p className="error-message">{passwordMessage}</p>}
        <button type="submit" className="form-btn">Register</button>
      </form>

      {/* Displays error message */}
      {errorMessage.length ? <p className="error">{errorMessage}</p> : <></>}

    </div>
  );
};

export default Register;
