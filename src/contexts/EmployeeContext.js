import { createContext } from 'react';

const EmployeeContext = createContext();

const EmployeeProvider = EmployeeContext.Provider;

export { EmployeeContext, EmployeeProvider };