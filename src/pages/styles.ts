import styled from 'styled-components';

export const FormContiner = styled.form`
  width: 100%;
  padding: 10px 0;
  div {
    width: 100%;
    position: relative;
    input {
      width: 100%;
      border: none;
      border-bottom: 2px solid silver;
      padding: 15px;
      font-size: 17px;
      &:focus {
        outline: none;
        box-shadow: 0 2px 1px -1px #999;
      }
    }
  }
`;
