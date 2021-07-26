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
  background-color: #563434;

  > p {
    color: #fff;
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
  padding: 0px 10px 0px 10px;
  overflow-y: auto;
  margin-top: 55px;
`;

export const ContentModal = styled.div`
  display: grid;
  grid-template-areas: "image image description description" "image image platform price" "image image store price";
  gap: 20px;
  margin-left: auto;
  margin-right: auto;
  align-items: center;

  > img {
    width: 340px;
    max-height: 750px;
    grid-area: image;
    border-radius: 5px;
    box-shadow: 3px 3px 3px #000;
  }
`;

export const Description = styled.div`
  grid-area: description;
`;

export const GameInfo = styled.div`
  padding: 20px;
`;

export const StoresModal = styled.div`
  grid-area: store;
  background-color: antiquewhite;

  > h3 {
    transition: 0.2s;
    cursor: pointer;

    :hover {
      color: var(--light);
    }

    :active {
      transform: scale(0.95);
    }
  }
`;

export const PlatformModal = styled.div`
  grid-area: platform;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
`;

export const PriceModal = styled.div`
  grid-area: price;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-areas: "code code" "button text";

  > button {
    color: #fff;
    height: 50px;
    grid-area: button;
    background-color: #04d929;
  }

  > h1 {
    grid-area: text;
    background-color: #000000;
    padding: 5px;
    border-radius: 0 5px 5px 0;
  }

  > img {
    grid-area: code;
    max-width: 200px;
    border-radius: 10px;
    margin-bottom: 20px;
  }
`;

export const StoreMap = styled.iframe`
  width: 73vw;
  height: 68vh;
  border: none;
  margin-top: 15px;
  border-radius: 10px;
`;

export const CardContainer = styled.div`
  color: #fff;
  padding: 10px;
  overflow-y: auto;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  background-color: #15181dee;
`;

export const GameCard = styled.article`
  width: 93%;
  margin: 20px 50px 20px 20px;
  border-radius: 4px;
  transition: transform 450ms;

  :hover {
    transform: scale(1.08);
  }

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
      color: var(--primary);
      font-size: 1.6em;
      text-align: center;
    }

    > p {
      color: #fff;
      font-size: 1.3em;
      font-weight: 600;
      padding: 10px 10px;
      border-left: 2px solid var(--primary);
    }

    > div {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    > button {
      width: 250px;
      font-style: italic;
    }
  }
`;

export const Footer = styled.footer`
  color: #fff;
  width: 100%;
  display: flex;
  padding: 30px 0px;
  align-items: center;
  justify-content: center;
  background-color: var(--darkGray);
`;

export const FooterContent = styled.div`
  width: 1200px;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
`;

export const FooterInfo = styled.div`
  flex: 1;
  gap: 15px;
  display: flex;
  flex-direction: column;
`;
