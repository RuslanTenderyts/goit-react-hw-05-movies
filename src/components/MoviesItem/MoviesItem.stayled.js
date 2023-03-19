import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }
`;
export const Container = styled.div`
    max-width: 960px;
    margin: 0 auto;
    padding: 0 16px;
    border-bottom: 1px solid black;
  `;
export const ContaineItem = styled.div`
    gap: 68px;
    padding: 40px 72px 40px 36px;
    display: flex;
`

export const Img = styled.img`
    display: block;
    width: 264px;
    height: 374px;
    object-fit: cover;
    border-radius: 5px;
    border: 1px solid #d1cdcd;
`
