import React from "react"
import { useForm } from "react-hook-form"
import * as Styled from './style';

export default function FormProdutos() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const onSubmit = data => {
    data = Object.assign(data);
    let produtos = JSON.parse(localStorage.getItem('products')) || [];
    produtos.push(data);
    localStorage.setItem('products', JSON.stringify(produtos));
    alert('Product registered!')
    reset()
  };
  return (
    <>
      <Styled.Title>Register Form</Styled.Title>
      <Styled.Form onSubmit={handleSubmit(onSubmit)}>
        <Styled.Input placeholder="Name"  {...register("name", { required: true, maxLength: 20 })} />
        {errors.name && <span>This field is required!</span>}
        <Styled.Input placeholder="Price" type="number" {...register("price", { required: true, maxLength: 10 })} />
        {errors.price && <span>This field is required!</span>}
        <Styled.Button type="submit">Register</Styled.Button>
      </Styled.Form>
    </>
  )
}