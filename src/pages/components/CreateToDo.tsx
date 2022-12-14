import { useForm } from 'react-hook-form';
import { FormContiner } from '../styles';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { categoryState, toDoState } from '../../atom';
import { IToDoForm } from '../../db';

const Form = () => {
  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState);
  const { register, handleSubmit, reset } = useForm<IToDoForm>();
  const onSubmit = ({ toDo }: IToDoForm) => {
    setToDos((oldToDos) => [
      { text: toDo, id: Date.now(), category },
      ...oldToDos,
    ]);
    reset();
  };

  return (
    <FormContiner onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          {...register('toDo', { required: true })}
          placeholder="+ Add Task"
          type="text"
        />
      </div>
    </FormContiner>
  );
};

export default Form;
