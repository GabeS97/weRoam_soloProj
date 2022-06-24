import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import * as sessionActions from "../../store/session";
import DemoUser from "../Navigation/DemoUser";
import './SignupForm.css'

function SignupForm({ hideForm }) {
  const dispatch = useDispatch();
  // const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const history = useHistory()

  // if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, username, password }))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
          history.push('/spots')
          hideForm()
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  return (
    <form className='signup__form' onSubmit={handleSubmit}>
      <header className="signup__title">Sign In</header>
      <ul>
        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>
      <div className="signup__inputs">
        <label>
          {/* Email */}
          <input className="emailSignIn"
            placeholder="Please enter your email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          {/* Username */}
          <input className="usernameSignIn"
            placeholder="Please enter your username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <label>
          {/* Password */}
          <input className="passwordSignIn"
            placeholder="Please enter your password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <label>
          {/* Confirm Password */}
          <input className="confirmSignIn"
            placeholder="Please confirm your password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </label>
      </div>
      <div className="signup__buttons">
        <div className="signup__button">
          <button className="signup__submit" type="submit">Log In</button>
        </div>

        <div className="signup__or__demo">
          or
        </div>

        <div className="demo__button">
          <button className="demo__submit" type="submit">
            <DemoUser hideForm={hideForm} />
          </button>
        </div>
      </div>

    </form>
  );
}

export default SignupForm;
