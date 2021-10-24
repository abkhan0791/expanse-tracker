import React from 'react';
import './App.css';
import Expanse from './expanse.js';
import { TransactionProvider } from './transactionC';

function App() {
  return (
    <TransactionProvider>
     <Expanse/>
     </TransactionProvider>
  );
}

export default App;
