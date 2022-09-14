import React from "react";
import "./style.css";
import LoginForm from "../../components/form/LoginForm";
import RegisterForm from "../../components/form/RegisterForm";
const Login = () => {
  return (
    <div>
      <LoginForm />
      <RegisterForm />
    </div>
  );
};

export default Login;
