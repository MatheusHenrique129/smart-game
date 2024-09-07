import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 80px;
  z-index: 9;
  display: flex;
  position: fixed;
  align-items: center;
  background-color: #010a19;
  justify-content: space-around;
  border-bottom: 1.5px solid #ffffff;

  > p {
    color: #fff;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
  }
`;

export const Logo = styled.img`
  width: 100px;
  height: 100px;
  cursor: pointer;
  margin-top: 40px;
  transition: 0.2s;
  margin-left: 50px;
  margin-right: 18px;
  border-radius: 100%;

  :hover {
    transform: scale(1.1);
  }
`;

export const Container = styled.div`
  width: 100%;
  height: auto;
  padding-top: 110px;
`;

export const Content = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  margin-bottom: 100px;
  justify-content: center;
  padding: 0px 10px 0px 10px;
`;

export const CardContent = styled.div`
  width: 80%;
  color: #fff;
  display: grid;
  max-width: 1920px;
  justify-content: center;
  grid-template-columns: 25% 25% 25% 25%;
`;

export const ContentModal = styled.div`
  gap: 20px;
  display: grid;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  grid-template-areas: "image image description description" "image image platform price" "image image store price";

  > img {
    width: 340px;
    grid-area: image;
    max-height: 750px;
    border-radius: 5px;
    box-shadow: 3px 3px 3px #000;
  }
`;

export const Description = styled.div`
  grid-area: description;
`;

export const StoresModal = styled.div`
  grid-area: store;

  > h3 {
    cursor: pointer;
    transition: 0.2s;

    :hover {
      color: var(--light);
    }

    :active {
      transform: scale(0.95);
    }
  }
`;

export const PlatformModal = styled.div`
  gap: 5px;
  display: flex;
  grid-area: platform;
  flex-direction: column;
  align-items: flex-start;
`;

export const PriceModal = styled.div`
  display: grid;
  grid-area: price;
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
    padding: 5px;
    grid-area: text;
    background-color: #000000;
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

export const Footer = styled.footer`
  color: var(--dark);
  width: 100%;
  min-height: 100%;
  padding: 30px 30px 0px 30px;

  background-color: var(--footerPrimary);
`;

export const FooterContent = styled.div`
  width: auto;
  display: grid;
  // pading: 152px;
  align-items: flex-start;
  justify-content: space-around;
  grid-template-columns: 33% 33% 33%;
`;

export const FooterInfo = styled.div`
  flex: 1;
  gap: 15px;
  display: flex;
  flex-direction: column;
`;

export const GameInfo = styled.div`
  padding: 20px;

  > p {
    font-size: 10px;
  }
`;

export const PoweredBy = styled.div`
  padding: 10px;

  > p {
    font-size: 10px;
  }

  > h3 {
    font-size: 20px;
  }
`;

export const FooterCopyright = styled.div`
  width: auto;
  height: 38px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border-top: 1.5px solid var(--dark);

  > p {
    font-size: 14px;
  }
`;
