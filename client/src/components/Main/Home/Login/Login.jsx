import React from "react";

const Login = () => {
  const handleLoginSubmit = () => {

  }
  //const emailValidation = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  return <>
    <h2>Log in</h2>
    <form action="" className="auth-forms" onSubmit={handleLoginSubmit} id="login-form">
      <input name="logInEmail" type="text" placeholder="Write your email" />
      <input name="logInPassword" type="password" placeholder="write your password" />
      <button type="submit" className="form-btn">Log in</button>
    </form>
  </>;
};

export default Login;
