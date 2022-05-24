import { Container, Row, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import Pic from "../assets/image.png";

function Login(props) {
  let navigate = useNavigate();
  let openLogin = props.status;
  let open = props.open;
  let changeLogged = props.changeLogged;

  let submit = async (event) => {
    event.preventDefault();
    let username = event.target.username.value;
    let password = event.target.password.value;

    let statusCheck = true;
    if (username !== password) {
      statusCheck = false;
    }

    if (statusCheck) {
      let founded = false;
      let xhr = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await xhr.json();
      data.forEach((element) => {
        if (element.username === username) {
          founded = true;
          changeLogged(element);
          open(false);
          navigate("/dashboard");
        }
      });
      if (!founded) {
        alert("Username not found! Please register first");
      }
    }
  };

  return (
    <div className='h-100 w-100 position-absolute top-0 d-flex justify-content-center align-items-center'>
      <Container>
        <Row className='justify-content-center'>
          {openLogin ? (
            <div className='col-md-6 col-12 d-flex justify-content-center animation-op'>
              <div>
                <h2 className='mb-0 pb-3 text-center'>Login Form</h2>

                <Form onSubmit={submit}>
                  <Form.Group className='mb-3' controlId='formBasicEmail'>
                    <Form.Control
                      name='username'
                      type='text'
                      placeholder='Enter email'
                    />
                  </Form.Group>

                  <Form.Group className='mb-3' controlId='formBasicPassword'>
                    <Form.Control
                      name='password'
                      type='password'
                      placeholder='Password'
                    />
                  </Form.Group>
                  <div className='d-flex justify-content-center'>
                    <Button variant='primary' type='submit'>
                      Submit
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          ) : (
            <div className='w-100'>
              <img className='w-100' src={Pic} alt='' />
            </div>
          )}
        </Row>
      </Container>
    </div>
  );
}

export default Login;
