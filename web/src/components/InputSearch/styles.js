import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

export const Container = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;

  > input {
    border: 0;
    padding-left: 45px;
    padding-right: 8px;
    border-radius: 50px;
    width: 150px;
    height: 40px;
    font-size: 14px;
    font-weight: lighter;
    transition: width 0.4s ease-in-out;
  }

  > input:focus {
    width: 400px;
    border: 1.5px solid var(--light);
    box-shadow: 1px 1px 10px var(--light);
  }

  > input:focus + svg {
    color: var(--light);
  }
`;

export const IconSearch = styled(FaSearch)`
  position: absolute;
  left: 12px;
  font-size: 20px;
  color: var(--darkGray);
  cursor: pointer;
`;
