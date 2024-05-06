import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="login__container">
      <h2>Login</h2>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div>
            <input
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: '200px', height: '100%' }}
              required
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: '200px', height: '100%' }}
              required
            />
          </div>
          <div>
            <button className="login__btn" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
