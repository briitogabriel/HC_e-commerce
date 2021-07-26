import React, { useEffect, useState } from "react";
import FormClients from "../../components/FormClients";
import Footer from "../../components/Footer";
import * as Styled from './style';
export default function Clientes() {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    let listaClientes = JSON.parse(localStorage.getItem('clients'));
    if (listaClientes) {
      setClientes(listaClientes);
    }
  }, [clientes])

  return (
    <>
      <h1>Customers</h1>
      <FormClients />
      <Styled.Subtitle>Customer List</Styled.Subtitle>
      <Styled.Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Lastname</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((cliente, index) => {
            return (
              <tr key={index}>
                <td>{cliente.name}</td>
                <td>{cliente.lastname}</td>
                <td>{cliente.Address}</td>
              </tr>
            )
          })}
        </tbody>
      </Styled.Table>
      <Footer />
    </>
  )
}