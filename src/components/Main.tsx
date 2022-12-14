import { Outlet } from 'react-router-dom';
import { Main as StyledMain } from './styles';

const Main = () => {
  return (
    <StyledMain>
      <Outlet />
    </StyledMain>
  );
};

export default Main;
