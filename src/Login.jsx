import React from "react";
import { Button } from "@material-ui/core";
import { styled } from "styled-components";
// IMPORT FIRE BASE FOR GOOGLE LOGIN

const LoginContainer = styled.div`
  background-color: #f8f8f8;
  height: 100vh;
  display: grid;
  place-items: center;
`;

const InnerLoginContainer = styled.div`
  border-radius: 10px;
  text-align: center;
  padding: 100px;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15), 0 1px 2px rgba(0, 0, 0, 0.25);

  > img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;
  }

  > button {
    margin-top: 50px;
    text-transform: inherit !important;
    background-color: #0a8d48 !important;
  }
`;

const Login = () => {
  const signIn = (e) => {
    e.preventDefault();
    // auth.signInWithPopup(provider).catch(error=>alert(error.message))
  };

  return (
    <LoginContainer>
      <InnerLoginContainer>
        <img src="" alt="Slack Logo" />
        <h1>Sign in to the DreamDevs.</h1>
        <p>vakho.slack.com</p>
        <Button onClick={signIn}>Sign in with Google</Button>
      </InnerLoginContainer>
    </LoginContainer>
  );
};

export default Login;
