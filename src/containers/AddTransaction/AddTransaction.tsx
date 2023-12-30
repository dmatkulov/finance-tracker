import React from 'react';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {selectCreateTransactionLoading} from '../../store/transaction/transactionSlice';
import {ApiTransaction} from '../../types';
import {createTransaction} from '../../store/transaction/transactionThunks';
import TransactionForm from '../../components/TransactionForm/TransactionForm';

const AddTransaction: React.FC = () => {
  const dispatch = useAppDispatch();
  const createLoading = useAppSelector(selectCreateTransactionLoading);
  
  const onSubmit = async (transaction: ApiTransaction)=> {
    await dispatch(createTransaction(transaction));
    console.log('created');
  };
  
  return (
    <div>
      <TransactionForm onSubmitTransaction={onSubmit} isLoading={createLoading}/>
    </div>
  );
};

export default AddTransaction;