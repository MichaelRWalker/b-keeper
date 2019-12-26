import React, { useState } from 'react';
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
import requester from './Helpers/requester';


function App() {
  const setLogin=(value)=> sessionStorage.setItem('login',value);
  const setToken = (token) => sessionStorage.setItem('auth-token',token);
  const [user,setUser]=useState(null);
  const isLoggedIn = sessionStorage.getItem('login');
  
  isLoggedIn && requester.user.get().then(res=>setUser(res.data));
  
  return (
    <div className="App">
      <Router>

        <div className='container'>
            <Banner
                isLoggedIn={isLoggedIn}
                studioName={user&&user.studioName}
            />
            <br/>
            <Route
                path='/'
                exact>
                {isLoggedIn?
                    <Home user={user?user:'How Did you get here???'}/>
                :   <Login
                        login={setLogin}
                        setUser={setUser}
                        auth={setToken}
                    />}
            </Route>
            <Route path='/login'>
                <Login
                    login={setLogin}
                    setUser={setUser}
                    auth={setToken}
                />
            </Route>
                <Route path='/ledger'>
                    <Ledger/>
                </Route>
                <Route path='/addproject'>
                    <AddProject/>
                </Route>
                <Route path='/payment'      >
                    <Payment/>
                </Route>
                <Route path='/appointment'  >
                    <Appointment/>
                </Route>
                <Route path='/register'     >
                    <Register/>
                </Route>
                <Route path='/addsession'   >
                    <AddSession/>
                </Route>
                <Route path='/addband'      >
                    <AddBand/>
                </Route>
                <Route path='/roster'       >
                    <Roster/>
                </Route>
            </div>
      </Router>
    </div>
  );
}

export default App;
