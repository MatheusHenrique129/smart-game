import styled from "styled-components";

export const Overlay = styled.div`
  z-index: 9;
  width: 100vw;
  height: 100vh;
  display: flex;
  position: absolute;
  align-items: center;
  background-color: #333c;
  justify-content: center;
`;

export const ModalContainer = styled.section`
  z-index: 19;
  padding: 20px;
  overflow-y: auto;
  width: 85%;
  height: 85vh;
  min-width: 500px;
  min-height: 250px;
  position: relative;
  border-radius: 4px;
  border: 1px solid #fff;
  background-color: var(--dark);
  max-height: calc(100vh - 20px);
  box-shadow: 0px 0px 10px black;

  > span {
    top: 15px;
    right: 20px;
    color: #fff;
    font-size: 30px;
    cursor: pointer;
    transition: 0.2s;
    position: absolute;

    :hover {
      color: var(--primary);
    }
  }

  > header {
    font-size: 24px;
    margin: 0px 20px;
    font-weight: bold;
    text-align: center;
  }
`;