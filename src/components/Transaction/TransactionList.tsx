import React, {useEffect} from 'react';
import TransactionItem from './TransactionItem';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {selectTransactions} from '../../store/transaction/transactionSlice';
import {selectCategories} from '../../store/category/categorySlice';
import {fetchAllTransactions} from '../../store/transaction/transactionThunks';

const TransactionList: React.FC = () => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector(selectCategories);
  const transactions = useAppSelector(selectTransactions);
  
  useEffect(() => {
    void dispatch(fetchAllTransactions(categories));
  }, [categories, dispatch]);
  
  return (
    <div>
      {transactions.map((transaction) => (
        <TransactionItem
          key={transaction.id}
          transaction={transaction}
        />
      ))}
    </div>
  );
};

export default TransactionList;