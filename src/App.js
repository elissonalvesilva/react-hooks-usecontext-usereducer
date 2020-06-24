import React from 'react';
import User from './components/User';
import Employee from './components/Employee';
import Salary from './components/Salary';
import Count from './components/CountReducer';

function App() {
  return (
    <div className="App">
      <User />
      <hr/>
      <Employee />
      <hr/>
      <Salary />
      <hr/>
      <Count/>
    </div>
  );
}

export default App;
