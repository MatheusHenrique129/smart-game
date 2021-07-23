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
  justify-content: space-around;
  background-color: #f35353;

  >p{
    color: #FFF;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
  }
`;

export const Logo = styled.img`
  width: 100px;
  height: 100px;
  margin-top: 40px;
  margin-left: 50px;
  margin-right: 18px;
  border-radius: 100%;
  cursor: pointer;
  transition: 0.2s;

  :hover {
    transform: scale(1.1);
  }
`;

export const Content = styled.div`
  width: 1300px;
  padding: 10px 0px;
  overflow-y: auto;  
  margin-top: 55px;
  
`;

export const CardContainer = styled.div`
  padding: 10px 0px;
  overflow-y: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  display: grid;
    grid-template-columns: 25% 25% 25%;

`;

export const GameCard = styled.article`
  width: 80%;
  margin: 10px 20px 10px 20px;
  border-radius: 4px;
  
  > div {
    gap: 10px;
    border-radius: 4px;

    > img {
      width: 100%;
      height: 370px;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
      background-color: #151dcc11;
    }
  }

  > section {
    margin-top: 8px;
    padding: 10px;

    

    display: flex;
    flex-direction: column;
    gap: 10px;

    > strong {
      color: #f12354;
      font-size: 1.6em;
      margin-top: -70px;
      margin-bottom: 27px;
      text-align: center;


      /* box-shadow: 0px 0px 50px 15px var(--dark); */
    }

    > p {
      color: #fff;
      font-size: 1.8em;
      font-weight: 600;
      padding: 10px 10px;
      border-left: 2px solid var(--primary);
    }

    > div {
      background-color: brown;
      display: flex;
      align-items: flex-end;
      justify-content: right;
    }

    >  button {
      width: 100px;
      border: none;
      font-style: italic;
    }
  }
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #000000;
  padding: 30px 0;
`;