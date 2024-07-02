import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.scss";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    if (
      email === "mock@gmail.com" &&
      password === "123456" &&
      name === "Göktuğ"
    ) {
      alert("Giriş Yapıldı");
    }
  };

  const handleUserChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleLogin = () => {
    navigate("/Login");
  };

  return (
    <div className="login__container">
      <h2>Signin</h2>
      <form className="login__container-form" onSubmit={handleSignup}>
        <div className="form-group mb-3">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            className="form-control"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="form-control"
            value={email}
            onChange={handleUserChange}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="form-control"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div className="button-container">
          <button type="submit" className="login-button">
            Login
          </button>
        </div>
        <p>
          Do you have an account?{" "}
          <span onClick={handleLogin} className="signup-button">
            Signin
          </span>
        </p>
      </form>
    </div>
  );
};

export default Signin;
