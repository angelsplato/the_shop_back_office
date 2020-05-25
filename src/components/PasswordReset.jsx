import React, { useState } from "react";
import { Link } from "@reach/router";
import styled from "styled-components";

const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const [emailHasBeenSent, setEmailHasBeenSent] = useState(false);
  const [error, setError] = useState(null);
  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;
    if (name === "userEmail") {
      setEmail(value);
    }
  };
  const sendResetEmail = (event) => {
    event.preventDefault();
  };
  return (
    <PasswordResetWrapper className="col-8 mx-auto col-md-6 col-lg-6 text-center">
      <div className="">
        <h1 className="text-center">Reset your Password</h1>
        <div className="">
          <form action="">
            {emailHasBeenSent && (
              <div className="">An email has been sent to you!</div>
            )}
            {error !== null && <div className="">{error}</div>}
            <div className="block"></div>
            <input
              type="email"
              name="userEmail"
              id="userEmail"
              value={email}
              placeholder="Input your email"
              onChange={onChangeHandler}
              className="form-control"
            />
            <div className="block"></div>
            <button className=" btn btn-success">Send me a reset link</button>
          </form>
          <div className="block"></div>
          <Link to="/" className=" btn btn-link">
            &larr; back to sign in page
          </Link>
        </div>
      </div>
    </PasswordResetWrapper>
  );
};
export default PasswordReset;
const PasswordResetWrapper = styled.div`
  .block {
    height: 20px;
  }
`;
