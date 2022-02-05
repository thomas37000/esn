import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export default function ModalDelete({ deleteS2N }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        Delete
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>Etes vous sur de vouloir supprimer cette S2n ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={deleteS2N}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
