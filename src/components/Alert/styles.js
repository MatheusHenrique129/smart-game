import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 100;
  right: 0;
  width: 0px;
  height: 80px;
  margin: 10px;
  gap: 10px;
  transition: width 0.4s;
  background-color: ${(props) =>
    props.type === "error" ? "#d90429cc" : "#04d929cc"};
  border-radius: 5px;
  white-space: nowrap;
  overflow: hidden;
  z-index: 11;

  > h1 {
    font-size: 18px;
    margin: 5px;
  }

  > p {
    font-size: 14px;
    margin-left: 5px;
  }

  > span {
    position: absolute;
    top: 5px;
    right: 10px;
    font-size: 30px;
    cursor: pointer;
    transition: 0.2s;

    :hover {
      color: var(--dark);
    }
  }
`;
