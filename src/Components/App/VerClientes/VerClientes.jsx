import React, { useEffect, useState } from 'react'
import { SidePanelNav } from '../../SidePanelNav/SidePanelNav'
import { Container, Card, Form, FormLabel, Col, Row, Button, Table, Modal } from 'react-bootstrap'
import './index.css'
import useClients from '../../../hooks/useClients'
export const VerClientes = () => {
  const { clientsList, client, createClient, getAllClients, deleteClient, saveClientInfo, updateClient } = useClients();
  const [confirmationCreate, setConfirmationCreated] = useState(false);
  const [confirmtionError, setConfirmationError] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const handleCloseModalEdit = () => {
    setShowEditModal(false)
  }

  useEffect(() => {
    getAllClients()
  }, [])

  const handleSubmit = async () => {
    const formData = {
      _id: '',
      client_name: document.getElementById("InputClientName")?.value,
      client_email: document.getElementById("InputClientMail")?.value,
      client_phone: document.getElementById("InputClientPhone")?.value,
      client_website: document.getElementById("InputWebSite")?.value,
      client_state: document.getElementById("InputClientState")?.value,
    }

    const response = await createClient(formData);

    switch (response) {

      case "CLIENT CREATED":
        setConfirmationCreated(true);
        setTimeout(() => {
          setConfirmationCreated(false)
        }, 5000);

        break;

      case "ERROR AL CREAR CLIENTE":
        setConfirmationError(true);
        setTimeout(() => {
          setConfirmationError(false);
        }, 5000);
    }

  }
  const handleSubmitUpdate = async () => {

    // const formData = {
    //   _id: client._id,
    //   client_name: document.getElementById("InputClientNameupdate")?.value,
    //   client_email: document.getElementById("InputClientMailupdate")?.value,
    //   client_phone: document.getElementById("InputClientPhoneupdate")?.value,
    //   client_website: document.getElementById("InputWebSiteupdate")?.value,
    //   client_state: document.getElementById("InputClientStateupdate")?.value,
    // }
    console.log(JSON.stringify(client));
    const response = await updateClient(client);

  }

  const DeleteClientById = async (id) => {
    await deleteClient(id);
    await getAllClients();
  }

  const changeValues = () => {



  }

  return (
    <div>
      <SidePanelNav />
      <Container>
        <Card>
          <Card.Header>MI CARTELERA DE CLIENTES</Card.Header>
          <Card.Body>

            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md={5}>
                  <Form.Group >
                    <FormLabel>ID AUTOMATICO</FormLabel>
                    <Form.Control type='text' disabled placeholder='Auto'></Form.Control>
                  </Form.Group>
                  <Form.Group controlId='InputClientMail'>
                    <FormLabel>CORREO DEL CLIENTE</FormLabel>
                    <Form.Control type='email' required></Form.Control>
                  </Form.Group>
                  <Form.Group controlId='InputWebSite'>
                    <FormLabel>SITIO WEB(opcional)</FormLabel>
                    <Form.Control type='text' ></Form.Control>
                  </Form.Group>
                </Col>
                <Col md={5}>
                  <Form.Group controlId='InputClientName'>
                    <FormLabel>NOMBRE DEL CLIENTE</FormLabel>
                    <Form.Control type='text' required></Form.Control>
                  </Form.Group>
                  <Form.Group controlId='InputClientPhone'>
                    <FormLabel>TELEFONO</FormLabel>
                    <Form.Control type='tel' required></Form.Control>
                  </Form.Group>
                  <Form.Group controlId='InputClientState' >
                    <FormLabel>ESTADO ACTUAL</FormLabel>
                    <Form.Select required>
                      <option>Choose...</option>
                      <option value="Activo">Activo</option>
                      <option value="Inactivo">Inactivo</option>
                    </Form.Select>
                  </Form.Group>

                </Col>

              </Row>
              <div className='division'></div>
              <Button variant='success' className='mt-2' type='submit'>
                REGISTRAR CLIENTE
              </Button>
              {confirmationCreate ? <Alert variant="success">
                CLIENTE REGISTRADO
              </Alert> : ""}
            </Form>

          </Card.Body>

        </Card>

        <Button variant="success" size="sm" onClick={getAllClients} className='mt-3'>
          Actualizar Records
        </Button>
        <Table striped bordered hover className='mt-4'>

          <thead>
            <tr>
              <th>Nombre del Cliente</th>
              <th>Email del Cliente</th>
              <th>Teléfono del Cliente</th>
              <th>Sitio Web del Cliente</th>
              <th>Estado del Cliente</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {clientsList.map(clientItem => (
              <tr key={clientItem._id}>
                <td>{clientItem.client_name}</td>
                <td>{clientItem.client_email}</td>
                <td>{clientItem.client_phone}</td>
                <td>{clientItem.client_website}</td>
                <td>{clientItem.client_state}</td>
                <td>
                  <Row>
                    <Col>
                      <Button variant="danger" onClick={() => {
                        DeleteClientById(clientItem._id)
                      }}>
                        Eliminar Cliente
                      </Button>
                      <Button variant="warning" className='mt-3' onClick={() => {
                        setShowEditModal(true)
                        saveClientInfo(clientItem)
                      }}>
                        Editar Cliente
                      </Button>
                    </Col>


                  </Row>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>


        <Modal show={showEditModal} onHide={handleCloseModalEdit}>
          <Modal.Header closeButton>
            <Modal.Title>Cliente: {client.client_name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Button variant="dark" size="sm" onClick={() => {
              changeValues()
            }}>
              Cargar info de cliente
            </Button>
            <hr />
            <Form onSubmit={handleSubmitUpdate}>
              <Row>
                <Col md={5}>
                  <Form.Group controlId='InputClientIdupdate'>
                    <FormLabel>ID AUTOMATICO</FormLabel>
                    <Form.Control type='text' readOnly placeholder={client._id}></Form.Control>
                  </Form.Group>
                  <Form.Group controlId='InputClientMailupdate'>
                    <FormLabel>CORREO DEL CLIENTE</FormLabel>
                    <Form.Control type='email' required
                      onChange={(e) => {
                        client.client_name = e.target.value

                      }}
                    >

                    </Form.Control>
                  </Form.Group>
                  <Form.Group controlId='InputWebSiteupdate'>
                    <FormLabel>SITIO WEB(opcional)</FormLabel>
                    <Form.Control type='text' placeholder={client?.client_website} onChange={(e) => {
                      client.client_website = e.target.value

                    }}></Form.Control>
                  </Form.Group>
                </Col>
                <Col md={5}>
                  <Form.Group controlId='InputClientNameupdate'>
                    <FormLabel>NOMBRE DEL CLIENTE</FormLabel>
                    <Form.Control type='text' required placeholder={client?.client_name} onChange={(e) => {
                      client.client_name = e.target.value

                    }}></Form.Control>
                  </Form.Group>
                  <Form.Group controlId='InputClientPhoneupdate'>
                    <FormLabel>TELEFONO</FormLabel>
                    <Form.Control type='tel' required placeholder={client?.client_phone} onChange={(e) => {
                      client.client_phone = e.target.value

                    }}></Form.Control>
                  </Form.Group>
                  <Form.Group controlId='InputClientStateupdate' >
                    <FormLabel>ESTADO ACTUAL</FormLabel>
                    <Form.Select required>
                      <option>Choose...</option>
                      <option value="Activo">Activo</option>
                      <option value="Inactivo">Inactivo</option>
                      <option value="Pendiente de Confirmacion">Pendiente de Confirmacion</option>
                    </Form.Select>
                  </Form.Group>

                </Col>

              </Row>
              <hr />
              <Button variant='primary' className='mt-2' type='submit'>
                ACTUALIZAR CLIENTE
              </Button>

            </Form>
          </Modal.Body>
          <Modal.Footer>

          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  )
}
