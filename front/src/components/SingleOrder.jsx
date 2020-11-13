import React from "react";
import { Table, Button, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import NotFound from "./error";
import ConfirmacionReview from "../components/ConfirmReview";

function SingleOrder({
  compras,
  user,
  handleSubmit,
  handleReview,
  handleRating,
  handleClickReviews,
}) {
  return (
    <div>
      {user.id ? (
        <div className="container" style={{ marginTop: "50px", width: "60%" }}>
          {compras && compras.length > 0 ? (
            compras.map((c) => {
              return (
                <div key={c.id}>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Imagen</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <img
                            src={c.imgUrl}
                            style={{ width: "70px", height: "50px" }}
                          ></img>{" "}
                        </td>
                        <td>{c.name}</td>
                        <td>$ {c.price}</td>
                      </tr>
                    </tbody>
                  </Table>
                  <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                      <Form.Label>Rating:</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Enter rating"
                        onChange={handleRating}
                        required
                        min="0"
                        max="5"
                      />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                      <Form.Label>Review:</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Enter a review"
                        required
                        onChange={handleReview}
                      />
                    </Form.Group>
                    <Button
                      id={c.id}
                      style={{ marginTop: "30px", marginBottom: "30px" }}
                      variant="dark"
                      type="submit"
                      onClick={() => {
                        handleClickReviews(c.id);
                      }}
                    >
                      Enviar
                    </Button>
                  </Form>
                </div>
              );
            })
          ) : (
            <ConfirmacionReview />
          )}
        </div>
      ) : (
        <NotFound
          style={{ marginTop: "50px", width: "60%", marginLeft: "70px" }}
        />
      )}
    </div>
  );
}

export default SingleOrder;
