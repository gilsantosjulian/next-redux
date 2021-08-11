import { useState } from 'react'
import { Alert, Button, Form, Modal } from 'react-bootstrap'

const NewTodo = ({ setTitle, createTodo, isLoading, error }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    <>
      <Button variant='primary' onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal
        show={show}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add a Todo</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          Modal Body
        </Modal.Body>

        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>

      </Modal>
    </>
  )
}

export default NewTodo