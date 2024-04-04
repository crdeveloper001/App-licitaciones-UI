import React from 'react'
import { SidePanelNav } from '../../SidePanelNav/SidePanelNav'
import { Container, Card, Form, FormLabel, Col, Row, Button,Table } from 'react-bootstrap'
import './index.css'
export const VerClientes = () => {

  const mockClients = [
    {
      _id: '1',
      client_name: 'Cliente 1',
      client_email: 'cliente1@example.com',
      client_phone: '123-456-7890',
      client_website: 'www.cliente1.com',
      client_state: true
    },
    {
      _id: '2',
      client_name: 'Cliente 2',
      client_email: 'cliente2@example.com',
      client_phone: '987-654-3210',
      client_website: 'www.cliente2.com',
      client_state: false
    }
  ];
  return (
   <div>
    <SidePanelNav/>
    <Container>
      <Card>
        <Card.Header>MI CARTELERA DE CLIENTES</Card.Header>
        <Card.Body>

          <Form>
            <Row>
              <Col md={5}>
                <Form.Group>
                  <FormLabel>ID AUTOMATICO</FormLabel>
                  <Form.Control type='text'></Form.Control>
                </Form.Group>
                <Form.Group>
                  <FormLabel>CORREO DEL CLIENTE</FormLabel>
                  <Form.Control type='text'></Form.Control>
                </Form.Group>
                <Form.Group>
                  <FormLabel>SITIO WEB(OPCIONAL)</FormLabel>
                  <Form.Control type='text'></Form.Control>
                </Form.Group>
              </Col>
              <Col md={5}>
                <Form.Group>
                  <FormLabel>NOMBRE DEL CLIENTE</FormLabel>
                  <Form.Control type='text'></Form.Control>
                </Form.Group>
                <Form.Group>
                  <FormLabel>TELEFONO</FormLabel>
                  <Form.Control type='text'></Form.Control>
                </Form.Group>
                <Form.Group>
                  <FormLabel>ESTADO ACTUAL</FormLabel>
                  <Form.Select>
                    <option>Choose...</option>
                    <option>Activo</option>
                    <option value="Inactivo">Inactivo</option>
                  </Form.Select>
                </Form.Group>

              </Col>

            </Row>

          </Form>
          <div className='division'></div>
          <Button variant='success' className='mt-2'>
            CREAR CLIENTE
          </Button>

        </Card.Body>

      </Card>

      <Table striped bordered hover className='mt-4'>
        <thead>
          <tr>
            <th>_id</th>
            <th>Nombre del Cliente</th>
            <th>Email del Cliente</th>
            <th>Teléfono del Cliente</th>
            <th>Sitio Web del Cliente</th>
            <th>Estado del Cliente</th>
          </tr>
        </thead>
        <tbody>
          {mockClients.map(client => (
            <tr key={client._id}>
              <td>{client._id}</td>
              <td>{client.client_name}</td>
              <td>{client.client_email}</td>
              <td>{client.client_phone}</td>
              <td>{client.client_website}</td>
              <td>{client.client_state ? 'Activo' : 'Inactivo'}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
   </div>
  )
}
