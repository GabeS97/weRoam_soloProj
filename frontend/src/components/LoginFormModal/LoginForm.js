import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import './LoginForm.css'
import DemoUser from "../Navigation/DemoUser";

function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  return (
    <form className='login_form' onSubmit={handleSubmit}>
      <header className="login__title">Log In</header>
      {/* <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul> */}

      <div className="login__inputs">
        <label>
          {/* Username or Email */}
          <input className="user"
            type="text"
            placeholder="Username or Email"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            required
          />
        </label>
        <label>
          {/* Password */}
          <input
            className="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
      </div>

      <div className="login__buttons">
        <div className="login__button">
          <button className="login__submit" type="submit">Log In</button>
        </div>

        <div className="login__or__demo">
          or
        </div>

        <div className="demo__button">
          <button className="demo__submit" type="submit">
            <DemoUser />
          </button>
        </div>
      </div>
    </form >
  );
}

export default LoginForm;
