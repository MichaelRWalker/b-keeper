import React from 'react';
import Roster from './components/roster/Roster';
import authKey from './Helpers/authKey';


function App() {
  sessionStorage.setItem('auth-token',authKey)
  return (
    <div className="App">
      <Roster></Roster>
    </div>
  );
}

export default App;
