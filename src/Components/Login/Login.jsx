import React from 'react'
import { Container, Card, Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export const Login = () => {

  const app_nav = useNavigate()

  return (
    <Container >

      <h2 className='mb-4'>APP LICITACIONES DEQUISA</h2>

      <Card>

        <Card.Body>
          <Form.Group controlId="form-group-id">
            <Form.Label>CORREO ELECTRONICO</Form.Label>
            <Form.Control type="email" placeholder="username@domain" />
            <br />
            <Form.Label>CONTRASEÑA</Form.Label>
            <Form.Control type="password" />

            <hr />
            <Button variant="primary" onClick={() =>{
              app_nav('/dashboard')
            }}>
              INICIAR SESION
            </Button>
          </Form.Group>
        </Card.Body>
      </Card>

    </Container>
  )
}
