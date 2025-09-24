import React, { useState } from "react";
import "./Login.scss";

const Login = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    if (!username && !password) {
      setError("Both username and password are required.");
      return;
    } else if (!username) {
      setError("Please enter valid username");
      return;
    } else if (!password) {
      setError("Please enter your password");
      return;
    }

    if (username === "admin" && password === "admin") {
      sessionStorage.setItem("isLoggedIn", "true");
      onLoginSuccess();
    } else {
      setError("Invalid username or password.");
    }
  };

  return (
    <div className="login-card">
      <h2 className="title">Login</h2>
      <form onSubmit={handleLogin}>
        <div className="input-group">
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
          />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
        </div>

        {error && <p className="error">{error}</p>}

        <button type="submit" className="btn-login">Login</button>
      </form>
    </div>
  );
};

export default Login;
