import React, { Component } from 'react';
import authKey from './Helpers/authKey';
import AddBand from './components/band/Add Band/AddBand';
import Roster from './components/roster/Roster';
import AddSession from './components/session/AddSession';
import Ledger from './components/ledger/Ledger';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Appointment from './components/appointment/Appointment';
import Payment from './components/payment/Payment';
import AddProject from './components/project/AddProject';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/home/Home';
import Banner from './components/banner/Banner';

function App() {
  sessionStorage.setItem('auth-token',authKey)
  return (
    <div className="App">
      <Router>
      <div className='container'>
      <Banner></Banner>
      <br/>
      <Route path='/addproject'   component={AddProject}/>
      <Route path='/payment'      component={Payment}/>
      <Route path='/appointment'  component={Appointment}/>
      <Route path='/register'     component={Register}/>
      <Route path='/login'        component={Login}/>
      <Route path='/ledger'       component={Ledger}/>
      <Route path='/addsession'   component={AddSession}/>
      <Route path='/addband'      component={AddBand}/>
      <Route path='/roster'       component={Roster}/>
      <Route path='/'             component={Home}/>
      
      </div>
      </Router>
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