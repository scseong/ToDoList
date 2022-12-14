import { createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import ToDoList from './pages/ToDoList';

const Router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Root />,
      children: [
        {
          path: '/',
          element: <ToDoList />,
        },
      ],
    },
  ],
  { basename: 'http://scseong.github.io/ToDoList' }
);

export default Router;
