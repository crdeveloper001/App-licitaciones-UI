import React, { useEffect } from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useLogin from "../../hooks/useLogin";
import { AuthCredentials } from "../../Services/AuthorizationService";

export const Login = () => {
  const { user, payload, authorizeConfirmation, saveCredentials, sendAuthorization } = useLogin();
  const app_nav = useNavigate();

  useEffect(() => {
    console.log("use effect", authorizeConfirmation);
  })

  const handleSubmit = async () => {

    localStorage.removeItem("sessionPayload");
    localStorage.removeItem("IsCurrentSession");
    const data = {
      email: document.getElementById("emailInput")?.value,
      pass: document.getElementById("passInput")?.value,
    };
    sessionStorage.
    //console.log("component:",authorizeConfirmation);
    //app_nav("/Dashboard")
  };

  return (
    <Container>
      <h2 className="mb-4">APP LICITACIONES DEQUISA</h2>
      <Card>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="emailInput">
              <Form.Label>CORREO ELECTRONICO</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="username@domain"
                autoComplete="on"
              />
            </Form.Group>
            <Form.Group controlId="passInput">
              <Form.Label>CONTRASEÑA</Form.Label>
              <Form.Control
                required
                type="password"
                autoComplete="on"
              />

            </Form.Group>
            <Button className="mt-3" variant="primary" type="submit" >
              INICIAR SESION
            </Button>

          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};
