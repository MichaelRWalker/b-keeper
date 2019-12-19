import React from 'react';
import authKey from './Helpers/authKey';
import AddBand from './components/band/AddBand';
import Roster from './components/roster/Roster';
import AddSession from './components/session/AddSession';



function App() {
  sessionStorage.setItem('auth-token',authKey)
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
