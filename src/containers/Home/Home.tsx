import React from 'react';
import TransactionList from '../../components/Transaction/TransactionList';
import {useAppSelector} from '../../app/hooks';
import {selectFetchTransactionsLoading} from '../../store/transaction/transactionSlice';
import Spinner from '../../components/Spinner/Spinner';

const Home: React.FC = () => {
  const transactionLoading = useAppSelector(selectFetchTransactionsLoading);
  
  return (
    <div>
      <h2>Home page</h2>
      {transactionLoading && <Spinner/>}
      <TransactionList/>
    </div>
  );
};

export default Home;