import { useState } from 'react';
import React from 'react'
import { Container, Row, Col, Nav } from 'react-bootstrap';
import './index.css'
export const SidePanelNav = () => {
   
    return (
        <>
            <div className="App">
               
                <Container >
                    <Row>
                        <Col md={1}className="sidebar">
                            <Nav className="flex-column">
                                <Nav.Link href="Dashboard">INICIO</Nav.Link>
                                <Nav.Link href="Perfil">PERFIL</Nav.Link>
                                <Nav.Link href="Licitaciones-Actuales">LICITACIONES ACTUALES</Nav.Link>
                                <Nav.Link href="Nueva-Licitacion">CREAR NUEVA LICITACION</Nav.Link>
                                <Nav.Link href="Clientes">CARTELERA DE CLIENTES</Nav.Link>
                                <Nav.Link href="Usuarios">CONTROL DE USUARIOS</Nav.Link>
                                <Nav.Link href="/">LOG OUT</Nav.Link>
                            </Nav>
                        </Col>

                    </Row>
                </Container>
            </div>
        </>
    );
}
