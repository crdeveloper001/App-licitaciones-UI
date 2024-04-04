import React from 'react'
import { SidePanelNav } from '../../SidePanelNav/SidePanelNav'
import { Container, Card, Form, FormLabel, Col, Row, Button,Table } from 'react-bootstrap'
export const Usuarios = () => {

  const mockUsers = [
    {
      _id: '1',
      user_name: 'John',
      user_lastname: 'Doe',
      user_email: 'john.doe@example.com',
      user_department: 'IT',
      user_manager: 'Jane Smith',
      user_account: 'johndoe',
      user_password: 'password123'
    },
    {
      _id: '2',
      user_name: 'Jane',
      user_lastname: 'Smith',
      user_email: 'jane.smith@example.com',
      user_department: 'HR',
      user_manager: 'David Johnson',
      user_account: 'janesmith',
      user_password: 'abc123'
    }
  ];
  return (
   <div>
    <SidePanelNav/>
    <Container>
      <Card>
        <Card.Header>GESTION DE USUARIOS</Card.Header>
        <Card.Body>

          <Form>
            <Row>
              <Col md={5}>
                <Form.Group>
                  <FormLabel>ID AUTOMATICO</FormLabel>
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
              </Col>
              <Col md={5}>
                
                <Form.Group>
                  <FormLabel>DEPARTAMENTO</FormLabel>
                  <Form.Select>
                    <option>Contabilidad</option>
                    <option>Tesoreria</option>
                    <option>Ventas</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group>
                  <FormLabel>GERENTE ACTUAL</FormLabel>
                  <Form.Select>
                    <option>Fulanito</option>
                    <option>Pepito</option>
                   
                  </Form.Select>
                </Form.Group>
                <Form.Group>
                  <FormLabel>USUARIO AUTOMATICO</FormLabel>
                  <Form.Control type='text' readOnly></Form.Control>
                </Form.Group>
                <Form.Group>
                  <FormLabel>CONTRASEÑA</FormLabel>
                  <Form.Control type='password'></Form.Control>
                </Form.Group>
              </Col>

            </Row>

          </Form>
          <div className='division'></div>
          <Button variant='success' className='mt-2'>
            CREAR CUENTA
          </Button>

        </Card.Body>

      </Card>

      <Table striped bordered hover>
      <thead>
        <tr>
          <th>_id</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Email</th>
          <th>Departamento</th>
          <th>Gerente</th>
          <th>Cuenta de usuario</th>
          <th>Contraseña</th>
        </tr>
      </thead>
      <tbody>
        {mockUsers.map(user => (
          <tr key={user._id}>
            <td>{user._id}</td>
            <td>{user.user_name}</td>
            <td>{user.user_lastname}</td>
            <td>{user.user_email}</td>
            <td>{user.user_department}</td>
            <td>{user.user_manager}</td>
            <td>{user.user_account}</td>
            <td>{user.user_password}</td>
          </tr>
        ))}
      </tbody>
    </Table>
    </Container>
   </div>
  )
}
