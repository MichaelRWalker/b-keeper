import React from 'react';
import authKey from './Helpers/authKey';
import AddBand from './components/band/AddBand';
import Roster from './components/roster/Roster';
import AddSession from './components/session/AddSession';
import Ledger from './components/ledger/Ledger';
import LoginPage from './components/login/Login';
import RegisterPage from './components/register/Register';

function App() {
  sessionStorage.setItem('auth-token',authKey)
  return (
    <div className="App">
    <br/>
    <hr/>
    <h1>Register</h1>
    <hr/>
    <br/>
    <RegisterPage/>
    <br/>
    <hr/>
    <h1>Login</h1>
    <hr/>
    <br/>
    <LoginPage/>
    <br/>
    <hr/>
    <h1>Ledger</h1>
    <hr/>
    <br/>
    <Ledger/>
    <br/>
    <hr/>
    <h1>add Session</h1>
    <hr/>
    <br/>
    <AddSession/>
    <br/>
    <hr/>
    <h1>Add Band</h1>
    <hr/>
    <br/>
    <AddBand/>
    <br/>
    <hr/>
    <h1>Roster</h1>
    <hr/>
    <br/>
    <Roster/>
    <br/>
    <hr/>
    </div>
  );
}

export default App;

/*
      <br/>
      <hr/>
      <AddSession></AddSession>
      <br/>
      <hr/>
      <AddBand></AddBand>
      <br/>
      <hr/>
      <Roster></Roster>
      <br/>
      <hr/>

*/