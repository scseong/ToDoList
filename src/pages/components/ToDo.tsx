import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { newCategoryState, toDoState } from '../../atom';
import { Categories, IToDo } from '../../db';

const Btn = styled.button`
  border: none;
  background: #f15956;
  padding: 5px 20px;
  margin-right: 5px;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    font-size: 1em;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
      rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
  }
`;

const ToDo = ({ text, category, id }: IToDo) => {
  const newCagories = useRecoilValue(newCategoryState);
  const setTodos = useSetRecoilState(toDoState);
  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = e;

    setTodos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, category: name as Categories };

      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };

  return (
    <li>
      <span>{text}</span>
      <div>
        {category !== Categories.DOING && (
          <Btn name={Categories.DOING + ''} onClick={onClick}>
            Doing
          </Btn>
        )}
        {category !== Categories.TODO && (
          <Btn name={Categories.TODO + ''} onClick={onClick}>
            To Do
          </Btn>
        )}
        {category !== Categories.DONE && (
          <Btn name={Categories.DONE + ''} onClick={onClick}>
            Done
          </Btn>
        )}
        {newCagories?.map((newCategory) =>
          newCategory.category !== category ? (
            <Btn
              onClick={onClick}
              name={newCategory.category}
              key={newCategory.id}
            >
              {newCategory.category}
            </Btn>
          ) : null
        )}
      </div>
    </li>
  );
};

export default ToDo;
