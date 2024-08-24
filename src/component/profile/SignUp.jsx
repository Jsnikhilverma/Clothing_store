import logo from "../../assets/logo.jpg";
import React, { useState } from "react";
import "./signup.css";

const SignUpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-up logic here
    if (password === confirmPassword) {
      console.log("Sign-Up attempt:", { name, email, password });
    } else {
      console.error("Passwords do not match");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <img
          src={logo}
          alt="CodeShala Logo"
          className="logo"
        />
        <form onSubmit={handleSubmit}>
          <h2>Sign Up</h2>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
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
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button type="submit" className="signup-button">
            Create Account
          </button>
          <p className="login-link">
            Already have an account? <a href="#">Sign in</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
