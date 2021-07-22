import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: var(--dark);
`;

export const Header = styled.header`
  position: fixed;
  width: 100%;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f35353;
`;

export const Logo = styled.img`
  width: 100px;
  height: 100px;
  margin-top: 40px;
  margin-left: 50px;
  border-radius: 100%;
  cursor: pointer;
  transition: 0.2s;

  :hover {
    transform: scale(1.1);
  }
`;

export const Content = styled.div`
  width: 1280px;
  padding-top: 60px;
  background-color: aqua;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: 20% 60% 20%;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  overflow-y: auto;
  padding: 10px 0px;
`;

export const GameCard = styled.article`
  width: 500px;
  padding: 10px;
  border-radius: 4px;
  background-color: coral;
`;
