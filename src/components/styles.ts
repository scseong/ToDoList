import styled from 'styled-components';

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    width: 15px;
    height: 15px;
    background-color: inherit;
    border: none;
    cursor: pointer;
    img {
      width: inherit;
      height: inherit;
    }
  }
`;

export const Header = styled.header`
  background-color: ${(props) => props.theme.headerColor};
  color: ${(props) => props.theme.headerFontColor};
  h1 {
    position: absolute;
    top: 10px;
    left: 10px;
    font-weight: bold;
    opacity: 0.5;
  }
`;

export const Main = styled.main`
  width: 480px;
  height: 85vh;
  margin: 0 auto;
  padding: 30px;
  position: relative;
`;

export const DateContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  div:first-child {
    display: inline-block;
    height: inherit;
    margin-right: 7px;
    span {
      display: inline-block;
      font-size: 60px;
      font-weight: bold;
      line-height: 1.2;
      text-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
  }
  div:last-child {
    display: flex;
    flex-direction: column;
    justify-content: center;
    span:first-child {
      font-weight: bold;
      margin-top: 12px;
    }
    span {
      font-size: 10px;
    }
  }
`;
