import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export default function ModalUpdate({
  updateS2n,
  setNewNames,
  setNewImages,
  setNewInfos,
  setNewTechnos,
  setNewCities,
  setNewYears,
  setNewRates,
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
                name="newName"
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
                name="newInfo"
              />
            </label>

            <label htmlFor="name">
              Change your Techno:
              <input
                type="text"
                name="newTechno"
                placeholder="Python"
                onChange={(event) => setNewTechnos(event.target.value)}
              />
            </label>

            <label htmlFor="name">
              Change your Citie:
              <input
                type="text"
                name="newCitie"
                placeholder="Lyon"
                onChange={(event) => setNewCities(event.target.value)}
              />
            </label>

            <label htmlFor="name">
              Change the Date :
              <input
                type="text"
                name="newYear"
                placeholder="2020"
                onChange={(event) => setNewYears(event.target.value)}
              />
            </label>

            <label htmlFor="name">
              Change your Rate:
              <input
                type="text"
                name="newRate"
                placeholder="4/5"
                onChange={(event) => setNewRates(event.target.value)}
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
