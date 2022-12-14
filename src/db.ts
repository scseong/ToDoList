export enum Categories {
  'TODO' = 'TODO',
  'DOING' = 'DOING',
  'DONE' = 'DONE',
}

export interface IToDoForm {
  toDo: string;
}

export interface ICategoryForm {
  category: string;
  id?: number;
}

export interface IToDo {
  text: string;
  id: number;
  category: Categories;
}
