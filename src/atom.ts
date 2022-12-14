import { atom, selector } from 'recoil';
import { IToDo, Categories, ICategoryForm } from './db';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const isDarkAtom = atom({
  key: 'isDark',
  default: false,
});

export const categoryState = atom<Categories>({
  key: 'category',
  default: Categories.TODO,
  effects_UNSTABLE: [persistAtom],
});

export const newCategoryState = atom<ICategoryForm[]>({
  key: 'newCategory',
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const categorySelector = selector({
  key: 'categorySelector',
  get: ({ get }) => {
    const category = get(categoryState);
    const newCategory = get(newCategoryState);
    console.log(category, newCategory);
  },
});

export const toDoState = atom<IToDo[]>({
  key: 'toDo',
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const toDoSelector = selector({
  key: 'toDoSelector',
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter((toDo) => toDo.category === category);
  },
});
