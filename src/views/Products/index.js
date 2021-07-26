import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import FormProdutos from "../../components/FormProducts";
import * as Styled from './style';
export default function Produtos() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let listaProducts = JSON.parse(localStorage.getItem('products'));
    if (listaProducts) {
      setProducts(listaProducts);
    }
  }, [products])
  return (
    <>
      <h1>Products</h1>
      <FormProdutos></FormProdutos>
      <Styled.Table>
        <thead>
          <tr>
            <th>Code</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => {
            return (
              <tr key={index}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })}</td>
              </tr>
            )
          })}
        </tbody>
      </Styled.Table>
      <Footer />
    </>
  )
}