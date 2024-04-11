import React, { useState } from 'react'
import { SidePanelNav } from '../../SidePanelNav/SidePanelNav'
import { Container, Form, Card, Button, Row, Col, FormLabel } from 'react-bootstrap'
import useLogin from '../../../hooks/useLogin'
export const Perfil = () => {

  const {payload}  = useLogin();


  const getPayload = () =>{
    alert(JSON.stringify(payload))
  }

  return (

    <div>
      <SidePanelNav/>
      <Container>
      <Card>
        <Card.Header onClick={() =>{
          getPayload()
        }}>MI PERFIL</Card.Header>
        <Card.Body>
        <Button variant='warning'>
            EDITAR DATOS
          </Button>
          <hr />
          <Form>
            <Row>
              <Col md={5}>
                <Form.Group>
                  <FormLabel>USUARIO</FormLabel>
                  <Form.Control type='text'></Form.Control>
                </Form.Group>
                <Form.Group>
                  <FormLabel>NOMBRE</FormLabel>
                  <Form.Control type='text'></Form.Control>
                </Form.Group>
                <Form.Group>
                  <FormLabel>APELLIDOS</FormLabel>
                  <Form.Control type='text'></Form.Control>
                </Form.Group>
                <Form.Group>
                  <FormLabel>CORREO ELECTRONICO</FormLabel>
                  <Form.Control type='email'></Form.Control>
                </Form.Group>
                <Form.Group>
                  <FormLabel>CONTRASEÑA</FormLabel>
                  <Form.Control type='password'></Form.Control>
                </Form.Group>
              </Col>
              <Col md={5}>
                <Form.Group>
                  <FormLabel>DEPARTAMENTO</FormLabel>
                  <Form.Control type='text'></Form.Control>
                </Form.Group>
                <Form.Group>
                  <FormLabel>GERENTE</FormLabel>
                  <Form.Control type='text'></Form.Control>
                </Form.Group>
              </Col>
            </Row>
          </Form>

          <Button variant='success' className='mt-4'>
            GUARDAR
          </Button>
          
        </Card.Body>
      </Card>
    </Container>
    </div>
    

  );
}
