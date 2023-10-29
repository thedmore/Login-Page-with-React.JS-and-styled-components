import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <Container>
      <LoginForm>
        <Title>Login</Title>
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        <SubmitButton>Login</SubmitButton>
        <ForgotPassword>Forgot your password?</ForgotPassword>
        <SignupLink>
          Don't have an account? <SignupAnchor href="#">Sign Up</SignupAnchor>
        </SignupLink>
      </LoginForm>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #667eea, #764ba2);
`;

const LoginForm = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 40px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  text-align: center;
  color: #333;
  margin-bottom: 30px;
`;

const Input = styled.input`
  width: 100%;
  padding: 15px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 15px;
  margin: 20px 0 10px 0;
  border: none;
  border-radius: 5px;
  background: #4caf50;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #45a049;
  }
`;

const ForgotPassword = styled.span`
  display: block;
  text-align: center;
  color: #888;
  margin-top: 10px;
  font-size: 14px;
`;

const SignupLink = styled.div`
  margin-top: 20px;
  text-align: center;
  color: #333;
  font-size: 16px;
`;

const SignupAnchor = styled.a`
  color: #764ba2;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default Login;
