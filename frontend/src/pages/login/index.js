import React from "react";
import "./style.css";
import LoginForm from "../../components/form/loginForm";
import RegisterForm from "../../components/form/registerForm";
import { Header } from "../../components";
const Login = () => {
  return (
    <div>
      <Header />
      <LoginForm />
      <RegisterForm /> 
    </div>
  );
};

export default Login;
