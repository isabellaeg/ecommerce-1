import React from "react";
import { Table, Button, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function SingleOrder({compras, user, handleSubmit, handleReview, handleRating}) {
return(<div>



    {user.id ?
    
    ( <div className="container" style={{ marginTop: "50px", width: "60%" }}>

    {
        compras && compras.length>0 ?
        compras.map((c)=>{
            let bool = false
    return      <div key={c.id}>  
    <Table striped bordered hover>
        <thead>
          <tr>
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Estrellas</th>

          </tr>
        </thead>
        <tbody>
            <tr>
                <td><img src={c.imgUrl} style={{width: "70px", height: '50px'}}></img> </td>
                <td>{c.name}</td>
                <td>$ {c.price}</td>
                <td></td>
            </tr>
            </tbody>
       
        </Table>
        <Form onSubmit={handleSubmit}>

        <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Rating:</Form.Label>
                    <Form.Control 
                    type='number'
                    placeholder="Enter rating" 
                    onChange={handleRating}
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
        <Button style={{marginTop: "30px", marginBottom: "30px"}}variant="dark" type="submit" disabled={true} onClick={()=>{bool = true}}>
                    Enviar
                </Button>
        </Form>
        </div>  

        })

        :
        null

    }

   </div>)

:
<div className="container">ACCESO DENEGADO</div>
}
</div>)
}

export default SingleOrder;

    