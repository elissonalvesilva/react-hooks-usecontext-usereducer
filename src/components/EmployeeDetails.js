import React, { useContext } from 'react';
import { EmployeeContext } from '../contexts/EmployeeContext';


function EmployeeDetails() {

  const context = useContext(EmployeeContext);

  return (
    <div>
      <div>
          <p>id: {context.id}</p>
          <p>Name: {context.name}</p>
          <p>Salaray: {context.salary}</p>
          <p>Age: {context.age}</p>
      </div>  
    </div>
  );
}

export default EmployeeDetails;