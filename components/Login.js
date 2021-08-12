import { Form, Button, Modal, Alert } from 'react-bootstrap'

const Login = () =>{

  return(<>
    <>
      <Modal >
        <Modal.Header closeButton>
          <Modal.Title>Login to Your Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
              type="email" 
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="Password"
            />
          </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">
            Cancel
          </Button>
          <Button 
            variant="primary" 
            onClick={true}
            disabled={false}>
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  </>)
}

export default Login;