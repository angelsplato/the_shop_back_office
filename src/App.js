import React from 'react';
import './App.css';
import { Router } from "@reach/router";
import PasswordReset from './component/PasswordReset';
import ProfilePage from './component/ProfilePage';
import SignIn from './component/SignIn';
import SignUp from './component/SignUp';


function App() {

  const user = null;



  return (
    user ?
      <ProfilePage />
      :
      <Router>
        <SignUp path="signUp" />
        <SignIn path="/" />
        <PasswordReset path="passwordReset" />
      </Router>
  );
}

export default App;
