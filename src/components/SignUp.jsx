import React, { useState } from "react";
import { Link } from "@reach/router";
import styled from "styled-components";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState(null);
  const createUserWithEmailAndPasswordHandler = (event, email, password) => {
    event.preventDefault();
    setEmail("");
    setPassword("");
    setDisplayName("");
  };
  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;
    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    } else if (name === "displayName") {
      setDisplayName(value);
    }
  };
  return (
    <SignUpWrapper className="col-8 mx-auto col-md-6 col-lg-6">
      <div className="card text-center">
        <h1 className="h1">Sign Up</h1>
        <div className="">
          {error !== null && <div className="">{error}</div>}
          <form className="">
            <input
              type="text"
              className="form-control "
              name="displayName"
              value={displayName}
              placeholder="angels"
              id="displayName"
              onChange={(event) => onChangeHandler(event)}
            />
               <div className="block"></div>
            <input
              type="email"
              className="form-control"
              name="userEmail"
              value={email}
              placeholder="nglzeeplt@gmail.com"
              id="userEmail"
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
               <div className="block"></div>
            <button
              className="btn btn-success"
              onClick={(event) => {
                createUserWithEmailAndPasswordHandler(event, email, password);
              }}
            >
              Sign up
            </button>
          </form>
          <p className="text-center my-3">or</p>
          <button className="btn btn-danger">Sign In with Google</button>
          <p className="text-center ">
            Already have an account?{" "}
            <Link to="/" className="btn btn-link">
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </SignUpWrapper>
  );
};
export default SignUp;

const SignUpWrapper = styled.div`

.block {
    height: 20px;
  }

`;
