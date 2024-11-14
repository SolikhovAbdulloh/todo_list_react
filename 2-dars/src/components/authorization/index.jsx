import React, { useState } from "react";
import "./style.css";
import Login from "./login";
import Register from "./register";
const Authorization = () => {
  const [isActive, setActive] = useState(true);
  const activeAuth = () => setActive(!isActive);
  return (
    <>
      <div className="auth">
        <button onClick={activeAuth} className={(isActive && "active", "")}>
          Login
        </button>
        <button onClick={activeAuth} className={(!isActive && "active", "")}>
          Register
        </button>
      </div>
      {/* <Login /> */}
      {/* <Register /> */}
      {isActive ? <Login /> : <Register />}
    </>
  );
};

export default Authorization;
