import React, { useState } from 'react';
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