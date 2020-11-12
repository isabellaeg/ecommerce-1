import React from "react";
import { Card } from "react-bootstrap";
import { MDBContainer, MDBRating, MDBIcon } from "mdbreact";
import { arrayStar, arrayNoStar } from "../utils/functions";

function Reviews(props) {
  const styleCardReviews = {
    marginBottom: "50px",
    marginLeft: "170px",
    width: "70%",
  };

  return (
    <div>
      <div className="bg-light" style={styleCardReviews}>
        {props.reviews && props.reviews.length > 0
          ? props.reviews.map((ele) => {
              return (
                <Card key={ele.id}>
                  <Card.Header>
                    {/* <StarRating
                      defaultValue={ele.rate}
                      min={0}
                      max={5}
                      step={1}
                    /> */}
                    <div className="rating">
                      {arrayStar(ele.rate).map((elem) => {
                        return (
                          <MDBIcon
                            style={{ color: "#FF8C00" }}
                            key={Math.random()}
                            icon="star"
                          />
                        );
                      })}
                      {arrayNoStar(ele.rate).map((elem) => {
                        return (
                          <MDBIcon
                            style={{ color: "#FF8C00" }}
                            key={Math.random()}
                            far
                            icon="star"
                          />
                        );
                      })}
                    </div>
                  </Card.Header>
                  <Card.Body>
                    <Card.Title>
                      {ele.User.nickname} | {ele.createdAt.substring(0, 10)}
                    </Card.Title>
                    <Card.Text>{ele.comment}</Card.Text>
                  </Card.Body>
                </Card>
              );
            })
          : null}
      </div>
    </div>
  );
}

export default Reviews;
