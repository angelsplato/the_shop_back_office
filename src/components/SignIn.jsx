import React, { useState } from "react";
import { Link } from "@reach/router";
import styled from "styled-components";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const signInWithEmailAndPasswordHandler = (event, email, password) => {
    event.preventDefault();
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;

    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    }
  };

  return (
    <SignInWrapper className="col-8 mx-auto col-md-6 col-lg-6">
      <div className="card">
        <h1 className="text-center">Sign up</h1>
        <form className="sign-in-form text-center">
          <input
            type="email"
            className="form-control col-lg-10"
            name="userEmail"
            placeholder="nglzeeplt@gmail.com"
            id="userEmail"
            value={email}
            onChange={(event) => onChangeHandler(event)}
          />
          <div className="block"></div>

          <input
            type="password"
            className="form-control"
            name="userPassword"
            value={password}
            placeholder="Your Password"
            id="userPassword"
            onChange={(event) => onChangeHandler(event)}
          />

          <button
            className="btn btn-primary"
            onClick={(event) => {
              signInWithEmailAndPasswordHandler(event, email, password);
            }}
          >
            Sign in
          </button>
        </form>
        <p className="text-center">or</p>
        <button
          className="btn btn-danger"
          // onClick={() => {
          //   signInWithGoogle();
          // }}
        >
          Sign in with Google
        </button>
        <p className="text-center">
          Dont have an account ? sign up here
          <Link to="signUp" className="btn btn-link">
            Sign up
          </Link>{" "}
          <br />{" "}
          <Link to="passwordReset" className="btn btn-link">
            Forgot Password?
          </Link>
        </p>
      </div>
    </SignInWrapper>
  );
};
export default SignIn;

const SignInWrapper = styled.div`
  .sign-in-form {
    padding: 20px;
    text-align: center;
  }
  .card {
    padding-top: 20%;
  }

  .block {
    height: 20px;
  }
`;
