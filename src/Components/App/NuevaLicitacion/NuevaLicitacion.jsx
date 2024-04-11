import React, { useEffect, useState } from 'react'
import { SidePanelNav } from '../../SidePanelNav/SidePanelNav'
import { Container, Card, Button, Form, FormLabel, Row, Col,Alert } from 'react-bootstrap'
import useTender from "../../../hooks/useTenders";
import './index.css'
import useClients from '../../../hooks/useClients'
export const NuevaLicitacion = () => {

  const { clientsList, client, getAllClients } = useClients();
  const { tender, createTender, saveTenderState } = useTender();
  const [confirmationCreated, setConfirmationCreated] = useState(false);
  const [confirmationError, setConfirmationError] = useState(false);



  useEffect(() => {
    getAllClients();
    console.log("components", clientsList);
  }, [])

  const handleSubmit = async () => {

    const formData = {
      get_id: "",
      tender_name: document.getElementById("InputName")?.value,
      tender_description: document.getElementById("InputDescription")?.value,
      tender_client: document.getElementById("InputClientSelected")?.value,
      tender_client_email: document.getElementById("InputEmailClient")?.value,
      tender_begin: document.getElementById("InputStartDate")?.value,
      tender_end: document.getElementById("InputEndDate")?.value,
      tender_budget: document.getElementById("InputBudget")?.value,
      tender_state: document.getElementById("InputCurrentState")?.value
    }

    //await saveTenderState(formData);
    const response = await createTender(formData)

    switch (response) {
      case "TENDER CREATED":
        setConfirmationCreated(true)
        setTimeout(() =>{
          setConfirmationCreated(false)
        },5000)
        break;
      case "ERROR ON CREATED TENDER":
        setConfirmationError(true);
        break;

      default:
        setConfirmationCreated(false)
    }


    console.log(response);

  }

  return (
    <div>
      <SidePanelNav />
      <Container>
        <Card>
          <Card.Header>CREAR NUEVA LICITACION</Card.Header>
          <Card.Body>

            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md={5}>
                  <Form.Group >
                    <FormLabel>ID AUTOMATICO</FormLabel>
                    <Form.Control type='text' disabled placeholder='auto'></Form.Control>
                  </Form.Group>
                  <Form.Group controlId='InputName'>
                    <FormLabel>NOMBRE DE LICITACION</FormLabel>
                    <Form.Control type='text' required></Form.Control>
                  </Form.Group>
                  <Form.Group controlId='InputDescription'>
                    <FormLabel>DESCRIPCION DE CONTRATO</FormLabel>
                    <Form.Control as="textarea" required />
                  </Form.Group>
                  <Form.Group controlId='InputClientSelected'>
                    <FormLabel>CLIENTE</FormLabel>
                    <Form.Select required >
                      {clientsList.map(item => {
                        return (
                          <option key={item._id} value={item.client_name}>
                            {item.client_name}
                          </option>
                        )
                      })}
                    </Form.Select>
                  </Form.Group>
                  <Form.Group controlId='InputEmailClient'>
                    <FormLabel>CORREO ELECTRONICO DEL CLIENTE</FormLabel>
                    <Form.Control type='email' required></Form.Control>
                  </Form.Group>
                </Col>
                <Col md={5}>
                  <Form.Group controlId='InputStartDate'>
                    <FormLabel>FECHA DE INICIO</FormLabel>
                    <Form.Control type='date' required></Form.Control>
                  </Form.Group>
                  <Form.Group controlId='InputEndDate'>
                    <FormLabel>FECHA DE CIERRE</FormLabel>
                    <Form.Control type='date' required></Form.Control>
                  </Form.Group>
                  <Form.Group controlId='InputBudget'>
                    <FormLabel>PRESUPUESTO</FormLabel>
                    <Form.Control type='number' required></Form.Control>
                  </Form.Group>
                  <Form.Group controlId='InputCurrentState'>
                    <FormLabel>ESTADO ACTUAL</FormLabel>
                    <Form.Select required>
                      <option>Choose...</option>
                      <option>Activo</option>
                      <option>Pendiente de revision</option>
                      <option>Inactivo</option>

                    </Form.Select>
                  </Form.Group>
                  <Button variant='primary' className='button-save' type='button' onClick={() => {
                    handleSubmit()
                  }}>
                    CREAR NUEVA LICITACION
                  </Button>

                 {confirmationCreated ? <Alert variant="success" className='mt-3'>
                    LICITACION REGISTRADA
                  </Alert> :""}
                </Col>
              </Row>
            </Form>


          </Card.Body>
        </Card>
      </Container>
    </div>

  )
}
