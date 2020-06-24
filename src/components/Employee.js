import React, { useState } from 'react';
import { EmployeeProvider } from '../contexts/EmployeeContext';
import EmployeeDetails from './EmployeeDetails';

function Employee() {

  const [employee, setEmployee] = useState({
    id: 45,
    name: 'Elisson',
    salary: 8534.45,
    age: 25
  });

  return (
    <EmployeeProvider value={employee}>
      <EmployeeDetails />
    </EmployeeProvider>
  );
}

export default Employee;