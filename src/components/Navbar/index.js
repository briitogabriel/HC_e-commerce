
import React, { useEffect, useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import Cart from '../Cart/index'
import { GlobalContext } from "../../store/GlobalContext";
import * as Style from './style';

export default function Navbar() {
  const [activeCart, setCart] = useState(false);
  const [quantidadeItensCarrinho, setQuantidadeItensCarrinho] = useState(0);
  const [valorItensCarrinho, setValorItensCarrinho] = useState(0);
  const cart = React.useContext(GlobalContext);
  useEffect(() => {

    if (cart.dados) {
      setQuantidadeItensCarrinho(cart.dados.length);
      let valorCarrinho = 0;
      cart.dados.forEach(item => {
        valorCarrinho += item.price;
        setValorItensCarrinho(valorCarrinho);
      });
    }
  }, [cart]);

  return (
    <>
      <Style.Navbar>
        <Style.Logo><Link to="/">Breakfast E-commerce (HC)</Link></Style.Logo>
        <Style.StyledLink to="/products">Products</Style.StyledLink>
        <Style.StyledLink to="/customers">Customers</Style.StyledLink>
        <Style.ButtonCart onClick={() => setCart(!activeCart)}>{valorItensCarrinho.toLocaleString('pt-BR', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })} | {quantidadeItensCarrinho} < AiOutlineShoppingCart /> Cart</Style.ButtonCart>
        <Cart activeCart={activeCart}></Cart>
      </Style.Navbar>
      <Cart></Cart>
    </>
  );
}