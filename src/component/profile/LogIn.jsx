import logo from "../../assets/logo.jpg";
import React, { useState } from "react";
import "./login.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt:", { email, password });
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <img src={logo} alt="Amazon Logo" className="logo" />
        <form onSubmit={handleSubmit}>
          <h2>Sign In</h2>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="login-button">
            Sign In
          </button>
          <p className="forgot-password">Forgot your password?</p>
          <p className="create-account">
            New to CodeShala? <a href="#">Create your CodeShala account</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
