import React from 'react';
import {useAppDispatch, useAppSelector} from '../../../app/hooks';
import {selectCreateLoading} from '../../../store/category/categorySlice';
import CategoryForm from '../../../components/CategoryForm/CategoryForm';
import {ApiCategory} from '../../../types';
import {createCategory} from '../../../store/category/categoryThunks';

const AddCategory: React.FC = () => {
  const dispatch = useAppDispatch();
  const createLoading = useAppSelector(selectCreateLoading);
  
  const onSubmit = async (category: ApiCategory) => {
    await dispatch(createCategory(category));
    console.log('submitted');
  };
  
  return (
    <div>
      <CategoryForm
        onSubmitCategory={onSubmit}
        isLoading={createLoading}
      />
    </div>
  );
};

export default AddCategory;