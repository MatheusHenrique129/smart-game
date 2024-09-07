import styled, { keyframes } from "styled-components";

const spin = keyframes`
    100%{
        transform: rotate(360deg);
        transform: scale(15px);
    }
`;

export const Container = styled.div`
  color: #fff;
  z-index: 99;
  width: 100vw;
  height: 100%;
  display: flex;
  position: fixed;
  align-items: center;
  flex-direction: column;
  background-color: #333c;
  justify-content: center;

  > img {
    opacity: 0.8;
    width: 80px;
    height: 80px;
    user-select: none;
    border-radius: 50%;
    margin-bottom: 10px;
    animation: ${spin} 2s linear infinite;
  }
`;
