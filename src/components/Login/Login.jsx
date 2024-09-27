/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Login.css";

const Login = ({ handleLogin }) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  return (
    <div className="login">
      <div className="container">
        <div className="form d-flex">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Your Email"
            name="email"
            id="email"
            onChange={(e) =>
              setUser({ ...user, [e.target.name]: e.target.value })
            }
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Your Password"
            name="password"
            id="password"
            onChange={(e) =>
              setUser({ ...user, [e.target.name]: e.target.value })
            }
          />
          <button onClick={() => handleLogin(user)}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
