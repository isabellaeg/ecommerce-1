import React from "react";
import { Card } from "react-bootstrap";
import { MDBContainer, MDBRating } from "mdbreact";

function Reviews(props) {
  // const [basic] = useState([
  //   {
  //     tooltip: 'Very Bad'
  //   },
  //   {
  //     tooltip: 'Poor'
  //   },
  //   {
  //     tooltip: 'Ok',
  //     choosed: true
  //   },
  //   {
  //     tooltip: 'Good'
  //   },
  //   {
  //     tooltip: 'Excellent'
  //   }
  // ]);

  return (
    <div>
      {/* style={{ marginTop: "50px", width: "60%" }}> */}
      <div className="bg-light" style={{ marginBottom: "50px", marginLeft: "170px", width:"70%" }}>
          <Card>
            <Card.Header>
              <MDBContainer>
                <MDBRating iconSize="1.5x" iconRegular />
              </MDBContainer>
            </Card.Header>
            <Card.Body>
              <Card.Title>Fecha + UserID</Card.Title>
              <Card.Text>
                <p>
                  Excelente relación precio/calidad. Me falta probar durabilidad
                  porque lo compre hace poco. Se escucha muy bien y es facil de
                  utilizar. La única contra es que no incluye enchufe a la
                  pared, por lo que para cargarlo hay que utilizar alguno que
                  sea a usb (como el que se usa para cargar el celu).
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        
      </div>
    </div>
  );
}

export default Reviews;
