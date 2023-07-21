import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const RatingForm = () => {
  const [rating, setRating] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform rating submission logic or API call here
    // Show success message or close the modal
    setShowModal(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Open Rating Form</button>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Calificación de asesoría</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h1>Calificaciones</h1>
          <hr size="4px" color="black" />
          <div className="container-fluid py-1">
            <p className="comentario">Estas son las calificaciones</p>
            <p>Curso: Gestion Financiera</p>
            <p>Profesor: Salas</p>
            <div>
              {/* Stars rating code */}
              {/* Add necessary styling for stars */}
              <input
                type="radio"
                value={0}
                name="rating"
                checked={rating === 0}
                onChange={() => handleRatingChange(0)}
              />
              {/* Render stars dynamically */}
              {[...Array(5)].map((_, index) => (
                <label
                  key={index}
                  className="star"
                  htmlFor={`rating${index + 1}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 275">
                    <path
                      stroke="#605a00"
                      strokeWidth="15"
                      d="M150 25l29 86h90l-72 54 26 86-73-51-73 51 26-86-72-54h90z"
                    />
                  </svg>
                  <input
                    id={`rating${index + 1}`}
                    type="radio"
                    value={index + 1}
                    name="rating"
                    checked={rating === index + 1}
                    onChange={() => handleRatingChange(index + 1)}
                  />
                </label>
              ))}
              <label className="reset" htmlFor="rating0">
                reset
              </label>
              <div id="texto">{rating === 0 ? 'sin calificar' : rating}</div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default RatingForm;