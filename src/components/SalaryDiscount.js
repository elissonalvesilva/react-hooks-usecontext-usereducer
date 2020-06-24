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