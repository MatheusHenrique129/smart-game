import styled, { keyframes } from "styled-components";

export const Animation = keyframes`
0%{
    opacity: 0;
    top: -250px;
    transform: scale(0.01);
  }
  100%{
    top: 0px;
    opacity: 1;
    transform: scale(1);
  }
`;

export const Overlay = styled.div`
  z-index: 10;
  width: 100%;
  height: 100%;
  display: flex;
  position: fixed;
  align-items: center;
  background-color: #2b2e35cc;
  justify-content: center;
`;

export const ModalContainer = styled.section`
  color: #fff;
  z-index: 19;
  padding: 20px;
  overflow-y: auto;
  width: 75%;
  height: 80vh;
  padding: 10px;
  min-width: 500px;
  min-height: 250px;
  position: relative;
  border-radius: 4px;
  border: 1px solid #fff;
  animation: ${Animation} 0.8s;
  background-color: var(--dark);
  max-height: calc(100vh - 20px);
  box-shadow: 0px 0px 10px black;

  > span {
    top: 15px;
    right: 20px;
    color: #fff;
    font-size: 2em;
    cursor: pointer;
    transition: 0.2s;
    position: absolute;

    :hover {
      color: var(--primary);
    }
  }

  > header {
    color: #fff;
    font-size: 2.3em;
    margin: 0px 20px;
    font-weight: bold;
    text-align: center;
  }
`;
