import { createContext } from 'react';

const SalaryContext = createContext();

const SalaryProvider = SalaryContext.Provider;

export {
  SalaryContext,
  SalaryProvider,
};
