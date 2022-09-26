import React, { useState } from "react";
import "./style.css";
import { Header } from "../../components";
import RegisterForm from "../../components/form/RegisterForm";
import LoginForm from "../../components/form/LoginForm";
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
