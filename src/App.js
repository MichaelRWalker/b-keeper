import React from 'react';
import authKey from './Helpers/authKey';
import Ledger from './components/ledger/Ledger';



function App() {
  sessionStorage.setItem('auth-token',authKey)
  return (
    <div className="App">
    <Ledger></Ledger>
    </div>
  );
}

export default App;
