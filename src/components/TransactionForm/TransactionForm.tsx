import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {fetchCategoryPreview} from '../../store/transaction/transactionThunks';
import {selectCategoryPreview} from '../../store/transaction/transactionSlice';
import {ApiCategory, ApiTransaction} from '../../types';

const initialState: ApiTransaction = {
  category: '',
  amount: 0,
  createdAt: ''
};

interface Props {
  onSubmit: (category: ApiTransaction) => void;
  existingCategory?: ApiTransaction;
  isEdit?: boolean;
  isLoading?: boolean;
}

const TransactionForm: React.FC<Props> = () => {
  const dispatch = useAppDispatch();
  const [selectValue, setSelectValue] = useState<ApiCategory>({
    type: '',
    name: ''
  });
  const categories = useAppSelector(selectCategoryPreview);
  
  const changeSelect = (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const {name, value} = event.target;
    setSelectValue(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  useEffect(() => {
    selectValue.type.length > 0 && void dispatch(fetchCategoryPreview(selectValue.type));
  }, [dispatch, selectValue]);
  
  return (
    <form>
      <h4 className="mb-3">
        Create new Transaction
      </h4>
      <div className="form-group mb-3">
        <label htmlFor="type" className="text-secondary mb-2">Category type</label>
        <select
          required
          name="type"
          id="type"
          className="form-select"
          value={selectValue.type}
          onChange={changeSelect}
        >
          <option disabled value="">Select type</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>
      <div className="form-group mb-3">
        <label htmlFor="name" className="text-secondary mb-2">Category name</label>
        <select
          required
          name="name"
          id="name"
          className="form-select"
          value={selectValue.name}
          onChange={changeSelect}
        >
          <option disabled value="">Select a category</option>
          {categories.length > 0 ? (
            categories.map((category) => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))
          ) : null}
        </select>
      </div>
      <button
        type="submit"
        className="btn btn-success w-100"
      >
        Create
      </button>
    </form>
  );
};

export default TransactionForm;