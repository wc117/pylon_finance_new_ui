import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { toast } from "react-toastify";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faKey } from "@fortawesome/free-solid-svg-icons";

// import authActions from "../../redux/auth";

import "./auth.scss";

const Auth = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email.trim() === "") {
      toast.error("Username is required");
      return;
    }

    if (password.trim() === "") {
      toast.error("Password is required");
      return;
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-wrapper">
        <div className="auth-row">
          <FontAwesomeIcon className="icon" icon={faUser} />
          <input
            className="input"
            type="text"
            placeholder="User"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="auth-row">
          <FontAwesomeIcon className="icon" icon={faKey} />
          <input
            className="input"
            type="text"
            placeholder="******"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="auth-row">
          <button className="btn-login" onClick={(e) => handleLogin()}>
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
