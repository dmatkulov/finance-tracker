import React from 'react';
import TransactionList from '../../components/Transaction/TransactionList';
import TransactionForm from '../../components/TransactionForm/TransactionForm';

const Home: React.FC = () => {
  return (
    <div>
      <TransactionList/>
      <TransactionForm/>
    </div>
  );
};

export default Home;