import React, { useState } from "react";
import "./style.css";
import LoginForm from "../../components/login/LoginForm";
import RegisterForm from "../../components/login/RegisterForm";
import { Header } from "../../components";
const Login = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Header />
      <div className="login">
        <div className="login_wrapper">
          <LoginForm setVisible={setVisible} />
          {visible && <RegisterForm setVisible={setVisible} />}
        </div>
      </div>
    </>
  );
};

export default Login;
