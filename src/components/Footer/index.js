import React from 'react';
import * as Style from './style';

import { AiOutlineLinkedin } from 'react-icons/ai';
import { FaGithub } from 'react-icons/fa';

export default function Navbar() {
  return (
    <>
      {/* <Style.Navbar>
        <Style.Logo><Link to="/">Breakfast E-commerce (HC)</Link></Style.Logo>
        <Style.StyledLink to="/products">Products</Style.StyledLink>
        <Style.StyledLink to="/customers">Customers</Style.StyledLink>
        <Style.ButtonCart onClick={() => setCart(!activeCart)}>{valorItensCarrinho.toLocaleString('pt-BR', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })} | {quantidadeItensCarrinho} < AiOutlineShoppingCart /> Cart</Style.ButtonCart>
        <Cart activeCart={activeCart}></Cart>
      </Style.Navbar>
      <Cart></Cart> */}
      <Style.Footer>
        <Style.Div>
          <h6>Gabriel Brito Araújo - 2021</h6>
        </Style.Div>
        <Style.Div>
          <Style.Div>
            <h6>Codes: </h6>
            <Style.Links href="https://github.com/briitogabriel" target="_blank" rel="noreferrer" alt="Github"><FaGithub /></Style.Links>
          </Style.Div>
          <Style.Div>
            <h6>Networking: </h6>
            <Style.Links href="https://www.linkedin.com/in/brittogabriel/" target="_blank" rel="noreferrer" alt="LinkedIn"><AiOutlineLinkedin /></Style.Links>
          </Style.Div>
        </Style.Div>
      </Style.Footer>
    </>
  );
}