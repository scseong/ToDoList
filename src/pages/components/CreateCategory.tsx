import React from 'react';
import { useForm } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';
import { newCategoryState } from '../../atom';
import { ICategoryForm } from '../../db';
import { FormContiner } from '../styles';

const CreateCategory = () => {
  const setCategories = useSetRecoilState(newCategoryState);

  const { register, handleSubmit, reset } = useForm<ICategoryForm>();
  const onSubmit = ({ category }: ICategoryForm) => {
    setCategories((categories) => [
      { category, id: Date.now() },
      ...categories,
    ]);
    reset();
  };

  return (
    <FormContiner onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          {...register('category')}
          placeholder="+ Add Category"
          type="text"
        />
      </div>
    </FormContiner>
  );
};

export default CreateCategory;
