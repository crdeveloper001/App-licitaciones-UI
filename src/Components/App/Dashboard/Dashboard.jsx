import React from 'react'
import { Container, Row, Col,Card } from 'react-bootstrap'
import './index.css'
import { SidePanelNav } from '../../SidePanelNav/SidePanelNav'
export const Dashboard = () => {
  return (

    <div className="App">
      
      <SidePanelNav/>

      <Container>
        <Row>
          <Col>
            <Card>
              <Card.Header>VER LICITACION ACTUALES</Card.Header>
              <Card.Body>
                <h2>REGISTROS: 22</h2>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header>GESTIONAR CARTELERA DE CLIENTES</Card.Header>
              <Card.Body>
                <Card.Text>
                 <h2>CLIENTES: 50</h2>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      
    </div>
  )
}
