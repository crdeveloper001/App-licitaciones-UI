import React, { useEffect, useState } from 'react'
import { SidePanelNav } from '../../SidePanelNav/SidePanelNav'
import { Button, Container, Table, Modal, Card, Row, Col } from 'react-bootstrap'
import useTenders from '../../../hooks/useTenders';

export const VerLicitaciones = () => {
  const { tenderList, tender, getAllTenders, saveTenderState } = useTenders();
  const [showModalInfo, setShowModalInfo] = useState(false);

  const refreshInfo = () =>{
    getAllTenders()
  }

  useEffect(() => {
    getAllTenders()
    console.log("from hook:", tenderList);

  }, [])

  return (

    <div>
      <SidePanelNav />
      <Container>
        <Button variant="success" className='mt-3 mb-2' onClick={refreshInfo}>
          Actualizar Informacion
        </Button>
        <hr />
        <b className='mb-2'>TOTAL DE REGISTROS: {tenderList.length}</b>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>_id</th>
              <th>Nombre</th>
              <th>Fecha de inicio</th>
              <th>fecha de terminacion</th>
              <th>Estado</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {tenderList.map(tender => (
              <tr key={tender._id}>
                <td>{tender._id}</td>
                <td>{tender.tender_name}</td>
                <td>{new Date(tender.tender_begin).toLocaleDateString()}</td>
                <td>{new Date(tender.tender_end).toLocaleDateString()}</td>
                <td>{tender.tender_state ? 'Activo' : 'Inactivo'}</td>
                <td>
                  <Button variant="info" onClick={() => {
                    setShowModalInfo(true)
                    saveTenderState(tender);
                    console.log(showModalInfo);
                  }}>
                    Ver Detalles
                  </Button>

                </td>

              </tr>

            ))}

          </tbody>
        </Table>
        {showModalInfo ? <Modal show={showModalInfo} onHide={() => { setShowModalInfo(false) }}>
          <Modal.Header closeButton>
            <Modal.Title>Detalles del Contrato</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Card>

              <Card.Body>
                <Row>
                  <Col>
                    <h6><b>Nombre</b></h6>
                    <p>{tender.tender_name}</p>
                  </Col>

                  <Col>
                    <h6><b>Descripcion de Contrato</b></h6>
                    <p>{tender.tender_description}</p>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col>
                    <h6><b>Cliente Actual</b></h6>
                    <p>{tender.tender_client}</p>
                  </Col>
                  <Col>
                    <h6><b>Correo del Cliente</b></h6>
                    <p>{tender.tender_client_email}</p>
                  </Col>

                </Row>
                <hr />
                <Row>
                  <Col>
                    <h6><b>Fecha de Inicio</b></h6>
                    <p>{new Date(tender.tender_begin).toLocaleDateString()}</p>
                  </Col>
                  <Col>
                    <h6><b>Fecha de Cierre</b></h6>
                    <p>{new Date(tender.tender_end).toLocaleDateString()}</p>
                  </Col>

                </Row>
                <hr />
                <Row>
                  <Col>
                    <h6><b>Presupuesto</b></h6>
                    <p>${tender.tender_budget}</p>
                  </Col>
                  <Col>
                    <h6><b>Estado Actual Del Contrato</b></h6>
                    <p>{tender.tender_state ? 'Activo' : 'Inactivo'}</p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Modal.Body>
          <Modal.Footer>

            <Button variant="success" onClick={() => {

              setShowModalInfo(false)

            }}>
              Cerrar reporte
            </Button>

          </Modal.Footer>
        </Modal> : ""}
        {/* <VerDetalles showWindow={showModalInfo} tender={tender} /> */}
      </Container>
    </div>

  );
}
