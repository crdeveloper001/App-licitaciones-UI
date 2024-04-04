import React from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useLogin from "../../hooks/useLogin";
export const Login = () => {
  const { makeLogin, user } = useLogin();
  const app_nav = useNavigate();

  return (
    <Container>
      <h2 className="mb-4">APP LICITACIONES DEQUISA</h2>

      <Card>
        <Card.Body>
          <Form.Group controlId="form-group-id">
            <Form.Label>CORREO ELECTRONICO</Form.Label>
            <Form.Control
              onChange={(e) => {
                user.user_email = e.target.value;
              }}
              type="email"
              placeholder="username@domain"
            />
            <br />
            <Form.Label>CONTRASEÑA</Form.Label>
            <Form.Control
              type="password"
              onChange={(e) => {
                user.user_pass = e.target.value;
              }}
            />

            <hr />
            <Button
              variant="primary"
              onClick={makeLogin}
              // onClick={() => {
              //   //app_nav("/dashboard");
              //   makelogin(user)
              // }}
            >
              INICIAR SESION
            </Button>
          </Form.Group>
        </Card.Body>
      </Card>
    </Container>
  );
};
