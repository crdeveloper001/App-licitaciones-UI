import React, { useState } from 'react'
import { SidePanelNav } from '../../SidePanelNav/SidePanelNav'
import { Button, Container, Table } from 'react-bootstrap'
import { VerDetalles } from './VerDetalles/VerDetalles';

export const VerLicitaciones = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedTender, setSelectedTender] = useState(null);

  // Datos de muestra
  const mockTenders = [
    {
      _id: '1',
      tender_name: 'Tender 1',
      tender_description: 'Descripción del Tender 1',
      tender_client: 'Cliente 1',
      tender_client_email: 'cliente1@example.com',
      tender_begin: new Date('2024-04-01'),
      tender_end: new Date('2024-04-30'),
      tender_budget: 10000,
      tender_state: true
    },
    {
      _id: '2',
      tender_name: 'Tender 2',
      tender_description: 'Descripción del Tender 2',
      tender_client: 'Cliente 2',
      tender_client_email: 'cliente2@example.com',
      tender_begin: new Date('2024-05-01'),
      tender_end: new Date('2024-05-31'),
      tender_budget: 15000,
      tender_state: false
    }
  ];
  const handleShowModal = (tender) => {
    setSelectedTender(tender);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (

    <div>
      <SidePanelNav />
      <Container>
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
            {mockTenders.map(tender => (
              <tr key={tender._id}>
                <td>{tender._id}</td>
                <td>{tender.tender_name}</td>
                <td>{new Date(tender.tender_begin).toLocaleDateString()}</td>
                <td>{new Date(tender.tender_end).toLocaleDateString()}</td>
                <td>{tender.tender_state ? 'Activo' : 'Inactivo'}</td>
                <td>
                  <Button variant="info" onClick={() => handleShowModal(tender)}>
                    Ver Detalles
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        {/* <VerDetalles show={showModal} tender={selectedTender} handleClose={handleCloseModal} /> */}
      </Container>
    </div>

  );
}
