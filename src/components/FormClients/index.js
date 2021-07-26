import React from "react"
import { useForm } from "react-hook-form"
import * as Styled from './style';

export default function FormClients() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const onSubmit = data => {
    let clientes = JSON.parse(localStorage.getItem('clients')) || [];
    clientes.push(data);
    localStorage.setItem('clients', JSON.stringify(clientes));
    alert('Customer registered')
    reset()
  };
  return (
    <>
      <Styled.Title>Register Form</Styled.Title>
      <Styled.Form onSubmit={handleSubmit(onSubmit)}>
        <Styled.Input placeholder="Name"  {...register("name", { required: true, maxLength: 20 })} />
        {errors.name && <span>This field is required</span>}
        <Styled.Input placeholder="Lastname"  {...register("lastname", { required: true, maxLength: 20 })} />
        {errors.name && <span>This field is required</span>}
        <Styled.Input placeholder="Address"  {...register("Address", { required: true, maxLength: 40 })} />
        {errors.name && <span>This field is required</span>}
        <Styled.Button type="submit">Register</Styled.Button>
      </Styled.Form>
    </>
  )
}