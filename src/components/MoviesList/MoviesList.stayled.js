import styled from "styled-components";

export const Container = styled.ul`
  font: 18px "Trebuchet MS", "Lucida Sans";
  width: 300px;
  text-shadow: 0 1px 0 rgba(255,255,255,.5);
`;

export const CardWrapper = styled.li`
  a {
    position: relative;
    display: block;
    padding: 0 ;
    border-radius: .3em;
    transition: .3s ease-out;
    };
    a:hover {
      background: #E9E4E0;
    };
`;

export const MovieName = styled.p`
  margin: 0;
  pading: 4px;
`;