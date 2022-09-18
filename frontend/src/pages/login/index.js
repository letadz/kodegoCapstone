import React from "react";
import "./style.css";
import LoginForm from "../../components/form/LoginForm";
import RegisterForm from "../../components/form/RegisterForm";
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
