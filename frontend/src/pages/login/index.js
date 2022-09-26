import React, { useState } from "react";
import "./style.css";
<<<<<<< HEAD
import LoginForm from "../../components/form/loginForm";
import RegisterForm from "../../components/form/registerForm";
=======
import LoginForm from "../../components/login/LoginForm";
import RegisterForm from "../../components/login/RegisterForm";
>>>>>>> c465ba5eed3009213f961262b3a31ff6f1340b28
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
