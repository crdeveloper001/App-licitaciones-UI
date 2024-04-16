import React, { useEffect, useState } from 'react'
import { SidePanelNav } from '../../SidePanelNav/SidePanelNav'
import { Container, Card, Form, FormLabel, Col, Row, Button, Table, Alert } from 'react-bootstrap'
import useUsers from '../../../hooks/useUsers';

export const Usuarios = () => {
  const [autoUser, setAutoUser] = useState("");
  const [createdConfirmation, setCreatedConfirmation] = useState(false);

  const { user, usersList, createUsers, getAllUsers } = useUsers()

  useEffect(() => {
    getAllUsers();

  }, [])

  const handleSubmit = async () => {
    const formData = {
      _id: '',
      user_name: document.getElementById("InputName")?.value,
      user_lastname: document.getElementById("InputLastName")?.value,
      user_email: document.getElementById("InputEmailAccount")?.value,
      user_department: document.getElementById("InputDepartment")?.value,
      user_manager: document.getElementById("InputManager")?.value,
      user_account: autoUser,
      user_password: document.getElementById("InputPassword")?.value,
    }
    const response = await createUsers(formData)

    switch (response) {
      case "USER CREATED":
        setCreatedConfirmation(true);
        setTimeout(() => {
          setCreatedConfirmation(false);
        }, 5000);
        break;

      default:
        break;
    }
    getAllUsers();
  }
  return (
    <div>
      <SidePanelNav />
      <Container>
        <Card className='mb-4'>
          <Card.Header>GESTION DE USUARIOS</Card.Header>
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md={5}>
                  <Form.Group>
                    <FormLabel>ID AUTOMATICO</FormLabel>
                    <Form.Control type='text' disabled placeholder='auto'></Form.Control>
                  </Form.Group>
                  <Form.Group controlId='InputName'>
                    <FormLabel>NOMBRE</FormLabel>
                    <Form.Control type='text' required></Form.Control>
                  </Form.Group>
                  <Form.Group controlId='InputLastName'>
                    <FormLabel>APELLIDOS</FormLabel>
                    <Form.Control type='text' required></Form.Control>
                  </Form.Group>
                  <Form.Group controlId='InputEmailAccount'>
                    <FormLabel>CORREO ELECTRONICO</FormLabel>
                    <Form.Control type='email' required onChange={(e) => {

                      setAutoUser(e.target.value.split("@")[0])
                    }}></Form.Control>
                  </Form.Group>
                </Col>
                <Col md={5}>
                  <Form.Group controlId='InputDepartment'>
                    <FormLabel>DEPARTAMENTO</FormLabel>
                    <Form.Select required>
                      <option>Contabilidad</option>
                      <option>Tesoreria</option>
                      <option>Ventas</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group controlId='InputManager'>
                    <FormLabel>GERENTE ACTUAL</FormLabel>
                    <Form.Select required>
                      <option>Fulanito</option>
                      <option>Pepito</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group >
                    <FormLabel>USUARIO AUTOMATICO</FormLabel>
                    <Form.Control type='text' readOnly value={autoUser}>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group controlId='InputPassword'>
                    <FormLabel>CONTRASEÑA</FormLabel>
                    <Form.Control type='password' required></Form.Control>
                  </Form.Group>
                </Col>
              </Row>
              <Button variant='success' className='button-save' type='submit'>
                CREAR CUENTA
              </Button>
              {createdConfirmation ? <Alert variant="success" className='mt-3'>
                USUARIO CREADO!
              </Alert>
                : ""}
            </Form>
            <div className='division'></div>

          </Card.Body>

        </Card>

        <Table striped bordered hover>
          <thead>
            <tr>
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
            {usersList.map(user => (
              <tr key={user._id}>
                <td>{user.user_name}</td>
                <td>{user.user_lastname}</td>
                <td>{user.user_email}</td>
                <td>{user.user_department}</td>
                <td>{user.user_manager}</td>
                <td>{user.user_account}</td>
                <td>{user.user_password.replace(user.user_password, "**********")}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  )
}
