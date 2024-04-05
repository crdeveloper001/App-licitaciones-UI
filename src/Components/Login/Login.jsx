import React from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useLogin from "../../hooks/useLogin";
export const Login = () => {

  const {user,saveCredentials} = useLogin()

  const app_nav = useNavigate();

  const handleLogin = () => {
    const data = {
      email: document.getElementById("emailInput")?.value,
      password: document.getElementById("passInput")?.value,
    };
    saveCredentials(data);
    
    console.log("from hook",user);
    //console.log(data);
  };

  return (
    <Container>
      <h2 className="mb-4">APP LICITACIONES DEQUISA</h2>

      <Card>
        <Card.Body>
          <Form onSubmit={handleLogin}>
            <Form.Group >
              <Form.Label>CORREO ELECTRONICO</Form.Label>
              <Form.Control
                required
                id="emailInput"
                type="email"
                placeholder="username@domain"
                autoComplete="on"
              />
              <br />
              <Form.Label>CONTRASEÑA</Form.Label>
              <Form.Control required id="passInput" type="password" autoComplete="on" />

              <hr />
              <Button variant="primary" type="submit">
                INICIAR SESION
              </Button>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};
