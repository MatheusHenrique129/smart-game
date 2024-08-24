import styled from "styled-components";

export const Container = styled.article`
  width: auto;
  max-height: 390px;
  border-radius: 4px;
  margin: 0px 15px 30px 15px;
  transition: transform 450ms;

  :hover {
    transform: scale(1.08);
    box-shadow: 1px 0px 10px #fff;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
      height: 250px;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }
  }

  > section {
    padding: 10px;

    > strong {
      display: flex;
      font-size: 1em;
      text-align: center;
      align-items: center;
      color: var(--primary);
      justify-content: center;
    }

    > p {
      font-size: 0.9em;
      padding-top: 0.5em;
      color: --var(--light);
    }

    > span {
      font-size: 1.5em;
      font-weight: 600;
      color: --var(--light);
      border-left: 2px solid var(--primary);
    }

    button {
      width: 100%;
      margin-top: 10px;
      font-style: italic;
      background-color: --var(--darkGray);
    }
  }
`;
