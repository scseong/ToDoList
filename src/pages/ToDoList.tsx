import { useRecoilState, useRecoilValue } from 'recoil';
import { categoryState, newCategoryState, toDoSelector } from '../atom';
import { Categories } from '../db';
import CreateCategory from './components/CreateCategory';
import CreateToDo from './components/CreateToDo';
import ToDo from './components/ToDo';

import styled from 'styled-components';

const FORM = styled.form`
  select {
    width: 100%;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #444;
    padding: 15px;
    border: 1px solid #aaa;
    border-radius: 0.5em;
    box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
    &:hover {
      border-color: #888;
    }
    &:focus {
      border-color: #aaa;
      box-shadow: 0 0 1px 2px rgba(241, 89, 86, 0.5);
      box-shadow: 0 0 0 3px -moz-mac-focusring;
      color: #222;
      outline: none;
    }
    &:disabled {
      opacity: 0.5;
    }
  }
`;

const UL = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  li {
    display: flex;
    flex-direction: column;
    width: inherit;
    padding: 15px;
    margin: 10px 0;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
      rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
    span {
      display: inline-block;
      width: 100%;
      font-size: 24px;
      font-weight: bold;
      padding: 0 10px;
      margin-bottom: 5px;
    }
    div {
      padding: 0 10px;
    }
  }
`;

const ToDoList = () => {
  const toDos = useRecoilValue(toDoSelector);
  const newCategory = useRecoilValue(newCategoryState);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (e: React.FormEvent<HTMLSelectElement>) => {
    setCategory(e.currentTarget.value as Categories);
  };

  return (
    <div>
      <FORM>
        <select value={category} onInput={onInput}>
          <option value={Categories.TODO}>ToDo</option>
          <option value={Categories.DOING}>Doing</option>
          <option value={Categories.DONE}>Done</option>
          {newCategory?.map(({ category, id }) => (
            <option key={id} value={category}>
              {category}
            </option>
          ))}
        </select>
      </FORM>
      <CreateCategory />
      <UL>
        {toDos?.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </UL>
      <CreateToDo />
    </div>
  );
};

export default ToDoList;
