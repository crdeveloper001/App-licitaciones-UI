import { useState } from 'react';
import React from 'react'
import { Button, Alert, Offcanvas, ListGroup } from 'react-bootstrap';

export const SidePanelNav = () => {
    const [show, setShow] = useState(false); // Set the initial state to true for a static Offcanvas
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow} className="me-2">
                --MENU--
            </Button>

            <Offcanvas show={show} onHide={handleClose} scroll={true}>
                {/* scroll prop is set to true to enable body scrolling */}
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>APP LICITACIONES BETA</Offcanvas.Title>

                </Offcanvas.Header>
                <hr />
                <Offcanvas.Body>
                    <ListGroup>
                        <ListGroup.Item action href="Perfil">PERFIL</ListGroup.Item>
                        <ListGroup.Item action href="Licitaciones-Actuales">LICITACIONES ACTUALES</ListGroup.Item>
                        <ListGroup.Item action href="Nueva-Licitacion">CREAR NUEVA LICITACION</ListGroup.Item>
                        <ListGroup.Item action href="Clientes">CARTELERA DE CLIENTES</ListGroup.Item>
                        <ListGroup.Item action href="Usuarios">CONTROL DE USUARIOS</ListGroup.Item>
                    </ListGroup>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}
