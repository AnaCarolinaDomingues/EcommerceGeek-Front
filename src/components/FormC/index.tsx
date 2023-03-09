import React from 'react';
import { Form, Button } from 'react-bootstrap';
import {FormContainer} from "./styles";

export default function FormC() {
  return (
    <FormContainer> 
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Nome do produto</Form.Label>
        <Form.Control type="email" placeholder="Digite aqui" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Preço</Form.Label>
        <Form.Control type="email" placeholder="Digite aqui" />
      </Form.Group>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Foto</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Categoria</Form.Label>
        <Form.Control type="email" placeholder="Digite aqui" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Descrição</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Form.Group>
      <Button variant="outline-dark">Salvar</Button>
        </Form.Group>
    </Form>
    </FormContainer>

    
  )
}
