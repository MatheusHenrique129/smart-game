import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 80px;
  margin: 10px;
  z-index: 99;
  border-radius: 4px;
  transition: width 0.4s;
  background-color: #04d929cc;
  whitespace: nowrap;
  overflow: hidden;

  > h1 {
    font-size: 18px;
    margin: 5px;
  }

  > p {
    font-size: 14px;
    margin-left: 5px;
  }

  > span {
    top: 5px;
    right: 10px;
    font-size: 25px;
    cursor: pointer;
    transition: 0.2s;
    position: absolute;

    :hover {
      color: var(--dark);
    }
  }
`;
