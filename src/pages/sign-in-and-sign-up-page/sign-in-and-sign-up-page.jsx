import React from "react";
import "./sign-in-and-sign-up-page.scss";
import Signin from "../../components/sign-in/sign-in";
import { Redirect } from "react-router";
import SignUp from "../../components/sign-up/sign-up";

const SignInAndSignUpPage = ({ currentUser }) => {

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div className="sign-in-and-sign-up-page">
      <Signin />
      <SignUp/>
    </div>
  );
};
export default SignInAndSignUpPage;
