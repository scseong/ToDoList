import Today from './Today';
import { Header as StyledHeader } from './styles';

const Header = () => {
  return (
    <StyledHeader>
      <h1>ToDoList</h1>
      <Today />
    </StyledHeader>
  );
};

export default Header;
