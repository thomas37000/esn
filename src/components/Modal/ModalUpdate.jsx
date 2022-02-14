import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export default function ModalUpdate({
  updateS2n,
  setNewNames,
  setNewImages,
  setNewInfos,
}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Modifier
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update your profil</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <label htmlFor="name">
              Esn name:
              <input
                type="text"
                name="s2n_name"
                placeholder="Beapp"
                onChange={(event) => setNewNames(event.target.value)}
              />
            </label>

            <label htmlFor="name">
              Change your Description:
              <textarea
                placeholder="change your infos"
                onChange={(event) => setNewInfos(event.target.value)}
                className="texte-infos"
              />
            </label>

            <label htmlFor="logo">logo / image avec URL</label>
            <input
              type="text"
              name="images"
              placeholder="url of the image"
              onChange={(event) => setNewImages(event.target.value)}
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={updateS2n}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
