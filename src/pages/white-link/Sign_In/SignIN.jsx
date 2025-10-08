

import React, { useState } from "react";
import "./SignIn.css";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple login check (replace with real authentication logic)
    if (email === "admin@example.com" && password === "12345") {
      alert("Login Successful!");
    } else {
      alert("Invalid credentials. Try again.");
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-card">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="signin-btn">Sign In</button>

          <p className="signup-link">
            Don’t have an account? <Link to="/pages/white-link/Sign_Up">Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
