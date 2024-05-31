<<<<<<< HEAD
import React, { useState } from 'react';
import './App.css'; // Import CSS file

// Form component
const SignInForm = ({ onSubmit, email, setEmail, password, setPassword }) => (
    <form onSubmit={onSubmit}>
        <label>
            Email:
            <input type="email" value={email} onChange={({ target: { value } }) => setEmail(value)} required />
        </label>
        <label>
            Password:
            <input type="password" value={password} onChange={({ target: { value } }) => setPassword(value)} required />
        </label>
        <button type="submit">Sign In</button>
    </form>
);

const Signin = () => {
    // State for email and password
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle sign-in logic here
        console.log(`Email: ${email}, Password: ${password}`);
    };

    return (
        <div className="signin">
            <h2>Sign In</h2>
            <SignInForm 
                onSubmit={handleSubmit} 
                email={email} 
                setEmail={setEmail} 
                password={password} 
                setPassword={setPassword} 
            />
        </div>
    );
=======
import React, { useState } from "react";
import { SIGNUP, LOGIN } from "../utils/mutations";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth"

const Signin = () => {
  const [loginState, setLoginState] = useState({
    email: "",
    password: "",
  });
  const [signupState, setSignupState] = useState({
    email: "",
    password: "",
    username: "",
  });
  const [login] = useMutation(LOGIN);
  const [signup] = useMutation(SIGNUP);

  const handleLogin = async (event) => {
    event.preventDefault();
    const {data} = await login({ 
        variables: {...loginState}
    })
    Auth.login(data.login.token)
    window.location.assign(`/Room/${data?.login.user.rooms[0]._id}`)
  };
  const handleSignup = async (event) => {
    event.preventDefault();
    const {data} = await signup({
        variables: {...signupState}
    })
    Auth.login(data.signup.token)
    window.location.assign(`/Room/${data?.signup.user.rooms[0]._id}`)
  };

  return (
    <>
      <div>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={loginState.email}
              onChange={(e) =>
                setLoginState((prev) => {
                  return {
                    ...prev,
                    [e.target.name]: e.target.value,
                  };
                })
              }
              required
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={loginState.password}
              onChange={(e) =>
                setLoginState((prev) => {
                  return {
                    ...prev,
                    [e.target.name]: e.target.value,
                  };
                })
              }
              required
            />
          </label>
          <button type="submit">Sign In</button>
        </form>
      </div>

      <div>
        <h2>Sign Up</h2>

        <form onSubmit={handleSignup}>
        <label>
            Username:
            <input
              name="username"
              value={signupState.username}
              onChange={(e) =>
                setSignupState((prev) => {
                  return {
                    ...prev,
                    [e.target.name]: e.target.value,
                  };
                })
              }
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={signupState.email}
              onChange={(e) =>
                setSignupState((prev) => {
                  return {
                    ...prev,
                    [e.target.name]: e.target.value,
                  };
                })
              }
              required
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={signupState.password}
              onChange={(e) =>
                setSignupState((prev) => {
                  return {
                    ...prev,
                    [e.target.name]: e.target.value,
                  };
                })
              }
              required
            />
          </label>
          <button type="submit">Sign In</button>
        </form>
      </div>
    </>
  );
>>>>>>> 80c66936605e6da110930962c25aedc991802ad0
};

export default Signin;
