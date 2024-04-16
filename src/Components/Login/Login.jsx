import React from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useLogin from "../../hooks/useLogin";
import { AuthCredentials } from "../../Services/AuthorizationService";

export const Login = () => {
  const { user,payload, saveCredentials,sendAuthorization } = useLogin();
  const app_nav = useNavigate();

  const handleLogin = async () => {
    const data = {
        email: document.getElementById("emailInput")?.value,
        pass: document.getElementById("passInput")?.value,
    };
    const payload = await saveCredentials(data);
    // Use payload if needed
    console.log("Payload from handleLogin:");
    // Continue with the rest of your logic
    app_nav("/Dashboard")
};

  return (
    <Container>
      <h2 className="mb-4">APP LICITACIONES DEQUISA</h2>
      <Card>
        <Card.Body>
          <Form onSubmit={handleLogin}>
            <Form.Group>
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
              <Form.Control
                required
                id="passInput"
                type="password"
                autoComplete="on"
              />

              <hr />
              <Button variant="primary" type="button" onClick={() =>{
                handleLogin()
              }}>
                INICIAR SESION
              </Button>
              <Button variant="primary" onClick={() =>{
                alert(JSON.stringify(payload))
              }}>
                Primary
              </Button>

            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};
