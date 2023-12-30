import {CategoryMutation, Transaction} from '../../types';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {createTransaction, deleteTransaction, fetchAllTransactions, fetchCategoryPreview} from './transactionThunks';
import {RootState} from '../../app/store';

interface TransactionState {
  transactions: Transaction[];
  categoryPreview: CategoryMutation[];
  createLoading: boolean;
  fetchLoading: boolean;
  fetchPreviewLoading: boolean;
  deleteLoading: false | string;
  showAddTransactionModal: boolean;
}

const initialState: TransactionState = {
  transactions: [],
  categoryPreview: [],
  createLoading: false,
  fetchLoading: false,
  fetchPreviewLoading: false,
  deleteLoading: false,
  showAddTransactionModal: false,
};

export const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  reducers: {
    showAddTransactionModal: (state, action: PayloadAction<boolean>) => {
      state.showAddTransactionModal = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(createTransaction.pending, (state) => {
      state.createLoading = true;
    });
    builder.addCase(createTransaction.fulfilled, (state) => {
      state.createLoading = false;
    });
    builder.addCase(createTransaction.rejected, (state) => {
      state.createLoading = false;
    });
    
    builder.addCase(fetchCategoryPreview.pending, (state) => {
      state.fetchPreviewLoading = true;
    });
    builder.addCase(fetchCategoryPreview.fulfilled, (state, {payload: categories}) => {
      state.fetchPreviewLoading = false;
      state.categoryPreview = categories;
    });
    builder.addCase(fetchCategoryPreview.rejected, (state) => {
      state.fetchPreviewLoading = false;
    });
    
    builder.addCase(fetchAllTransactions.pending, (state) => {
      state.fetchLoading = true;
    });
    builder.addCase(fetchAllTransactions.fulfilled, (state, {payload: transactions}) => {
      state.fetchLoading = false;
      state.transactions = transactions;
    });
    builder.addCase(fetchAllTransactions.rejected, (state) => {
      state.fetchLoading = false;
    });
    
    builder.addCase(deleteTransaction.pending, (state, {meta}) => {
      state.deleteLoading = meta.arg;
    });
    builder.addCase(deleteTransaction.fulfilled, (state) => {
      state.deleteLoading = false;
    })
    builder.addCase(deleteTransaction.rejected, (state) => {
      state.deleteLoading = false;
    })
  }
});


export const transactionReducer = transactionSlice.reducer;

export const {
  showAddTransactionModal,
} = transactionSlice.actions;


export const selectTransactions = (state: RootState) => state.transaction.transactions;
export const selectCategoryPreview = (state: RootState) => state.transaction.categoryPreview;
export const selectFetchTransactionsLoading = (state: RootState) => state.transaction.fetchLoading;
export const selectPreviewLoading = (state: RootState) => state.transaction.fetchPreviewLoading;
export const selectCreateTransactionLoading = (state: RootState) => state.transaction.createLoading;
export const selectShowTransaction = (state: RootState) => state.transaction.showAddTransactionModal;
export const selectDeleteTransaction = (state: RootState) => state.transaction.deleteLoading;