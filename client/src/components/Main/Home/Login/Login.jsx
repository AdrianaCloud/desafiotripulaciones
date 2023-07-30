import React, { useState } from "react";
import axios from 'axios';

const Login = (props) => {
  const [loginAttempts, setLoginAttempts] = useState(0);
  const [isLoginBlocked, setLoginBlocked] = useState(false);
  const [emailMessage, setEmailMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    if (isLoginBlocked) {
      console.log("Login is blocked. Please try again after 5 minutes.");
      return;
    }

    const email = e.target.logInEmail.value;
    const password = e.target.logInPassword.value;

    const emailValidation = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailValidation.test(email)) {
      setEmailMessage("Email must have a valid format");
    } else {
      setEmailMessage("");
    }

    const passwordValidation = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{9,}$/;
    if (!passwordValidation.test(password)) {
      setPasswordMessage("Password must contain lowercase, uppercase, digit, and special character, and be at least 9 characters long");
    } else {
      setPasswordMessage("");
    }

    if (emailMessage || passwordMessage) {
      console.log("Please fix the errors and try again.");
      return;
    }

    try {
      // Perform login validation here using your preferred method (e.g., sending a request to the backend)

      // Uncomment the following code to make the login request
      /*
      const request = await axios.post("https://backend-app-hbpdfkrhla-ew.a.run.app/api/users/login", { email, password });
      props.logged.setLogged(true);
      props.role.setRole(request.data.role);
      */

      // If login is successful, reset loginAttempts and clear any login block
      setLoginAttempts(0);
      setLoginBlocked(false);
    } catch (error) {
      console.log(error.message);

      // Increment loginAttempts and block login if the number of attempts exceeds 6
      setLoginAttempts((prevAttempts) => prevAttempts + 1);
      if (loginAttempts + 1 >= 6) {
        setLoginBlocked(true);

        // Unblock login after 5 minutes
        setTimeout(() => {
          setLoginBlocked(false);
          setLoginAttempts(0);
        }, 5 * 60 * 1000); // 5 minutes in milliseconds
      }
    }
  };

  return (
    <div className="container">
      <h2>Log in</h2>
      <img src="https://www.tailorbrands.com/wp-content/uploads/2020/07/mcdonalds-logo.jpg" alt="" />
      <form action="" className="auth-forms" onSubmit={handleLogin} id="login-form">
        <input name="logInEmail" type="text" placeholder="Write your email" disabled={isLoginBlocked} />
        {emailMessage && <p className="error-message">{emailMessage}</p>}
        <input name="logInPassword" type="password" placeholder="Write your password" disabled={isLoginBlocked} />
        {passwordMessage && <p className="error-message">{passwordMessage}</p>}
        {isLoginBlocked && <p className="error-message">Login is blocked. Please try again after 5 minutes.</p>}
        <button type="submit" className="form-btn" disabled={isLoginBlocked}>Log in</button>
      </form>
    </div>
  );
};

export default Login;
