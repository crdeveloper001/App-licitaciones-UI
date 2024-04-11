import React, { useEffect } from 'react'
import { Container, Row, Col,Card } from 'react-bootstrap'
import './index.css'
import { SidePanelNav } from '../../SidePanelNav/SidePanelNav'
import useTenders from '../../../hooks/useTenders'
import useClients from '../../../hooks/useClients'

export const Dashboard = () => {

  const {tenderList,getAllTenders} = useTenders();
  const {clientsList,getAllClients} = useClients();

  useEffect(() =>{
    getAllTenders();
    getAllClients();
  },[])

  return (

    <div className="App">
      
      <SidePanelNav/>
      <br />
      <br />
      <Container>
        <Row>
          <Col>
            <Card>
              <Card.Header>VER LICITACION ACTUALES</Card.Header>
              <Card.Body>
                <h2>REGISTROS: {tenderList.length}</h2>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header>GESTIONAR CARTELERA DE CLIENTES</Card.Header>
              <Card.Body>
                <Card.Text>
                 <h2>CLIENTES: {clientsList.length}</h2>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      
    </div>
  )
}
