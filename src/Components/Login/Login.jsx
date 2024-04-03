import React from 'react'
import { Container, Card } from 'react-bootstrap'

export const Login = () => {
  return (
    <Container >

      <Card>
        <Card.Header>APP LICITACIONES</Card.Header>
        <Card.Body>
          <Form.Group controlId="form-group-id">
            <Form.Label>CORREO ELECTRONICO</Form.Label>
            <Form.Control type="email" placeholder="username@domain" />
            <br />
            <Form.Label>CORREO ELECTRONICO</Form.Label>
            <Form.Control type="email" placeholder="username@domain" />
          </Form.Group>
        </Card.Body>
      </Card>


    </Container>
  )
}
