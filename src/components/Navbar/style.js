import styled from "styled-components";
import { Link } from "react-router-dom";

export const Navbar = styled.nav`
  width: 100%;
  height: 60px;
  background: #051f74;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0;
  box-shadow: 0 4px 6px 10px rgba(1,1,1,.1);
  @media screen and (max-width:700px) {
    justify-content: space-around;
    height: 130px;
  }
`;

export const Logo = styled.div`
  a {
  display: flex;
  align-items: center;
  color: #4177eb;
  margin-left: 30px;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.1rem;
  color: white;
  
  @media screen and (max-width:700px) {
    margin: 0;
  }
}
`;

export const StyledLink = styled(Link)`
  color: #769de4;
  cursor: pointer;
  text-decoration: none;
`;

export const ButtonCart = styled.button`
  cursor: pointer;
  font-size: 1.2rem;
  background: none;
  border: none;
  color: white;
  display: flex;
  align-items: center;
  margin-right: 20px;

  svg {
    margin-right: 10px;
    font-size: 1.5rem;
  }

  @media screen and (max-width:700px) {
    margin-top: 20px
  }
`;