import React, { useState } from "react";
import { SIGNUP, LOGIN } from "../utils/mutations";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";

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
    const { data } = await login({
      variables: { ...loginState },
    });
    Auth.login(data.login.token);
    window.location.assign(`/Room/${data?.login.user.rooms[0]._id}`);
  };
  const handleSignup = async (event) => {
    event.preventDefault();
    const { data } = await signup({
      variables: { ...signupState },
    });
    Auth.login(data.signup.token);
    window.location.assign(`/Room/${data?.signup.user.rooms[0]._id}`);
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
};

export default Signin;
