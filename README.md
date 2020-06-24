# React Hooks Using useContext and useReducer

## First steps

### Setup
 - Run the command bellow to install dependences
> yarn

 - Run the command bellow to start application
> yarn start

## Examples

## 1 - Using useContext to pass a userName to child component

**useContext.js**
```javascript

import { createContext } from 'react';

const UserContext = createContext();

const UserProvider = UserContext.Provider;

const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };

```
**User.js** - is a Parent Component
```javascript
import React from 'react';
import { UserProvider } from '../contexts/UserContext';
import UserName from './UserName';

function User() {
  return (
    <UserProvider value="Elisson Silva">
      <UserName />
    </UserProvider>
  );
}

export default User;

```
**Username.js** - is a Child Component
```javascript
iimport React from 'react';
import { UserConsumer } from '../contexts/UserContext';


function UserName() {
  return (
    <UserConsumer>
      {
        (username) => (
          <h1> {username} </h1>
        )
      }
    </UserConsumer>
  );
}

export default UserName;

```

## 2 - using CreateContext and useContext to pass a state to child component

**EmployeeContext.js**
```javascript

import { createContext } from 'react';

const EmployeeContext = createContext();

const EmployeeProvider = EmployeeContext.Provider;

export { EmployeeContext, EmployeeProvider };

```
**Employee.js** - is a Parent Component
```javascript
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

```
**EmployeeDetails.js** - is a Child Component
```javascript
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

```

## 3 - using CreateContext and useContext to pass a state to child component and calculate a salary

**SalaryContext.js**
```javascript

import { createContext } from 'react';

const SalaryContext = createContext();

const SalaryProvider = SalaryContext.Provider;

export {
  SalaryContext,
  SalaryProvider,
};


```
**Salary.js** - is a Parent Component
```javascript
iimport React, { useState } from 'react';
import { SalaryProvider } from '../contexts/SalaryContext';
import SalaryDiscount from './SalaryDiscount';

function Salary() {

  const [total, setTotal] = useState(0.0);
  const [baseSalary, setBaseSalary] = useState(0.0);
  const [otherDiscounts, setOtherDiscounts] = useState(0.0);

  const calculateSalary = (base, others) => {
    return base - others;
  };

  const providerValue = {
    totalResult: [total, setTotal],
    salary: [baseSalary, setBaseSalary, calculateSalary],
    othersDiscounts: [otherDiscounts, setOtherDiscounts]
  };

  return (
    <SalaryProvider value={providerValue}>
      <SalaryDiscount />
    </SalaryProvider>
  );
}

export default Salary;

```
**SalaryDiscount.js** - is a Child Component
```javascript
import React, { useContext } from 'react';
import { SalaryContext } from '../contexts/SalaryContext';

function SalaryDiscount() {
  const { salary, othersDiscounts, totalResult } = useContext(SalaryContext);
  const [baseSalary, setBaseSalary, calculateSalary] = salary;
  const [otherDiscounts, setOtherDiscounts] = othersDiscounts;
  const [total, setTotal] = totalResult;
  
  const calculate = () => {
    const result = calculateSalary(baseSalary, otherDiscounts);
    setTotal(result);
  };
  
  return (
    <div>
      <div>
        {
          total && (
            <h1>
              { total }
            </h1>
          )
        }
      </div>
      <div>
        <input type="text" onChange={(e) => setBaseSalary(e.target.value)}/>
        <input type="text" onChange={(e) => setOtherDiscounts(e.target.value)}/>
        <button onClick={calculate}>Calculate</button>
      </div>
    </div>
  );
}

export default SalaryDiscount;

```

## 4 - using useReducer to multiples counters

```javascript
import React, { useReducer } from 'react';

const initialState = 0;
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment': return state + 1;
    case 'decrement': return state - 1;
    case 'set': return action.count;
    default: throw new Error('Unexpected action');
  }
};

function Count() {
  const [count1, dispatch1] = useReducer(reducer, initialState);
  const [count2, dispatch2] = useReducer(reducer, initialState);
  return (
    <>
      <div>
        {count1}
        <button onClick={() => dispatch1({ type: 'increment' })}>+1</button>
        <button onClick={() => dispatch1({ type: 'decrement' })}>-1</button>
        <button onClick={() => dispatch1({ type: 'set', count: 0 })}>reset</button>
      </div>
      <div>
        {count2}
        <button onClick={() => dispatch2({ type: 'increment' })}>+1</button>
        <button onClick={() => dispatch2({ type: 'decrement' })}>-1</button>
        <button onClick={() => dispatch2({ type: 'set', count: 0 })}>reset</button>
      </div>
    </>
  );
}

export default Count;

```