import React from 'react'
import { SidePanelNav } from '../../SidePanelNav/SidePanelNav'
import { Container, Card, Button, Form, FormLabel, Row, Col } from 'react-bootstrap'
import './index.css'
export const NuevaLicitacion = () => {
  return (
    <div>
      <SidePanelNav />
      <Container>
        <Card>
          <Card.Header>CREAR NUEVA LICITACION</Card.Header>
          <Card.Body>

            <Form>
              <Row>
                <Col md={5}>
                  <Form.Group>
                    <FormLabel>ID AUTOMATICO</FormLabel>
                    <Form.Control type='text' readOnly></Form.Control>
                  </Form.Group>
                  <Form.Group>
                    <FormLabel>NOMBRE DE LICITACION</FormLabel>
                    <Form.Control type='text' required></Form.Control>
                  </Form.Group>
                  <Form.Group>
                    <FormLabel>DESCRIPCION DE CONTRATO</FormLabel>
                    <Form.Control as="textarea" required />
                  </Form.Group>
                  <Form.Group >
                    <FormLabel>CLIENTE</FormLabel>
                    <Form.Select required>
                      <option>Choose...</option>
                      <option>cliente 1</option>
                      <option>cliente 2</option>
                      <option>cliente 3</option>
                      <option>cliente 4</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group>
                    <FormLabel>CORREO ELECTRONICO DEL CLIENTE</FormLabel>
                    <Form.Control type='email' required></Form.Control>
                  </Form.Group>
                </Col>
                <Col md={5}>
                  <Form.Group>
                    <FormLabel>FECHA DE INICIO</FormLabel>
                    <Form.Control type='date' required></Form.Control>
                  </Form.Group>
                  <Form.Group>
                    <FormLabel>FECHA DE CIERRE</FormLabel>
                    <Form.Control type='date' required></Form.Control>
                  </Form.Group>
                  <Form.Group>
                    <FormLabel>PRESUPUESTO</FormLabel>
                    <Form.Control type='number' required></Form.Control>
                  </Form.Group>
                  <Form.Group>
                    <FormLabel>ESTADO ACTUAL</FormLabel>
                    <Form.Select required>
                      <option>Choose...</option>
                      <option>Activo</option>
                      <option>Pendiente de revision</option>
                      <option>Inactivo</option>

                    </Form.Select>
                  </Form.Group>
                  <Button variant='primary' className='button-save' type='submit'>
                    CREAR NUEVA LICITACION
                  </Button>
                </Col>
              </Row>
            </Form>


          </Card.Body>
        </Card>
      </Container>
    </div>

  )
}
