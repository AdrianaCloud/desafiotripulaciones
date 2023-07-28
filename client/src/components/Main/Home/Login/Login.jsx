import React from "react";
import { axios } from 'axios'

const Login = (props) => {
  const handleLogin = async () => {
    try {
      // const request = await axios({
      //   method: 'post',
      //   url: 'api/users/login',
      //   data: { email, password }
      // });
      // props.logged.setLogged(true);
      // props.role.setRole(request.data.role);
      //La coocki se adhiere automatiamente a cualquier petición

    } catch (error) {
      console.log(error.message);
    }
  };

  return <>
    <h2>Log in</h2>
    <form action="" className="auth-forms" onSubmit={handleLogin} id="login-form">
      <input name="logInEmail" type="text" placeholder="Write your email" />
      <input name="logInPassword" type="password" placeholder="write your password" />
      <button type="submit" className="form-btn">Log in</button>
    </form>
  </>;
};

export default Login;
