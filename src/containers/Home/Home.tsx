import React from 'react';
import TransactionList from '../../components/Transaction/TransactionList';
import AddTransaction from '../AddTransaction/AddTransaction';
import ModalAddTransaction from '../../components/Modal/ModalAddTransaction';

const Home: React.FC = () => {
  return (
    <div>
      <TransactionList/>
      <ModalAddTransaction>
        <AddTransaction/>
      </ModalAddTransaction>
    </div>
  );
};

export default Home;