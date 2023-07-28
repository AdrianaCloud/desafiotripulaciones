import React from "react";
import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [registerData, setRegisterData] = useState({})

  const handleRegisterSubmit = async (e) => {
    e.preventDefault()
    try {
      const registerData = {
        "nick_name": e.target.registerNick.value,
        "email": e.target.registerEmail.value,
        "password": e.target.registerPassword.value
      };
      setRegisterData(registerData);
      const response = await axios.post("http://localhost:3000/api/users/register", registerData);
      if (response.data === 201) {
        console.log("user has been registered")

      }
    } catch (error) {
      console.error("Error creating user:", error);
    }
  }
  return <>
    <h2>Register</h2>
    <form action="" className="auth-forms" onSubmit={handleRegisterSubmit} id="register-form">
      <input name="registerEmail" type="text" placeholder="Place your email" />
      <input name="registerPassword" type="password" placeholder="Write a new password" />
      <button type="submit" className="form-btn">Register</button>
    </form>
  </>;
};

export default Register;
