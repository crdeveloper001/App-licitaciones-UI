import React from 'react'
import { Button, Card, Form, Modal } from 'react-bootstrap';

export const VerDetalles = ({ show, tender, handleClose }) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Detalles del Tender</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Card>
                    <Card.Body>
                        <Form>
                            <Form.Group controlId="formTenderName">
                                <Form.Label>Nombre del Tender</Form.Label>
                                <Form.Control type="text" value={"tender 1"} readOnly />
                            </Form.Group>
                            <Form.Group controlId="formTenderDescription">
                                <Form.Label>Descripción del Tender</Form.Label>
                                <Form.Control as="textarea" rows={3} value={"tender 1"} readOnly />
                            </Form.Group>
                            <Form.Group controlId="formTenderClient">
                                <Form.Label>Cliente</Form.Label>
                                <Form.Control type="text" value={"tender 1"} readOnly />
                            </Form.Group>
                            <Form.Group controlId="formTenderClientEmail">
                                <Form.Label>Email del Cliente</Form.Label>
                                <Form.Control type="email" value={"tender 1"} readOnly />
                            </Form.Group>
                            <Form.Group controlId="formTenderBegin">
                                <Form.Label>Inicio del Tender</Form.Label>
                                <Form.Control type="text" value={new Date(tender.tender_begin).toLocaleDateString()} readOnly />
                            </Form.Group>
                            <Form.Group controlId="formTenderEnd">
                                <Form.Label>Fin del Tender</Form.Label>
                                <Form.Control type="text" value={new Date(tender.tender_end).toLocaleDateString()} readOnly />
                            </Form.Group>
                            <Form.Group controlId="formTenderBudget">
                                <Form.Label>Presupuesto</Form.Label>
                                <Form.Control type="text" value={tender.tender_budget} readOnly />
                            </Form.Group>
                            <Form.Group controlId="formTenderState">
                                <Form.Label>Estado</Form.Label>
                                <Form.Control type="text" value={tender.tender_state ? 'Activo' : 'Inactivo'} readOnly />
                            </Form.Group>
                        </Form>
                    </Card.Body>
                </Card>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cerrar
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
