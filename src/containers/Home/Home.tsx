import React from 'react';
import TransactionList from '../../components/Transaction/TransactionList';
import AddTransaction from '../AddTransaction/AddTransaction';

const Home: React.FC = () => {
  return (
    <div>
      <TransactionList/>
      <AddTransaction/>
    </div>
  );
};

export default Home;