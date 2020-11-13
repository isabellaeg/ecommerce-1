import React from 'react';
import {Form, Button, Container} from 'react-bootstrap';
import {Link} from "react-router-dom"

const formbox = {
    width: "380px",
    height: "480px",
    position: "relative",
    margin: "6% auto",
    background: "white",
    padding: "20px",
    textAlign: "center",
    borderRadius: "10px",
}

export default ({handleSubmit, handleAddress, handleCard, handleCvv, user, total}) => {

    return(
        <div>
        { user.id ? 
            (
                <Container style={formbox}> 
                <h3>Enter your payment information</h3>
            <Form  onSubmit={handleSubmit}>
            <Form.Group>
                    <Form.Label >Total:</Form.Label>
                    <Form.Control 
                    type="number" 
                    placeholder="Enter Address" 
                    onChange={handleAddress} 
                    autoFocus
                    value={total}
                    />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label >Address:</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Enter Address" 
                    onChange={handleAddress} 
                    autoFocus
                    />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
    
                <Form.Group>
                    <Form.Label >Card Number:</Form.Label>
                    <Form.Control 
                    type="number" 
                    placeholder="Enter your card number" 
                    onChange={handleCard}
                    />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
    
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Card cvv:</Form.Label>
                    <Form.Control 
                    type="password" 
                    placeholder="Enter CVV" 
                    onChange={handleCvv}
                    />
                </Form.Group>
    
                <Form.Group controlId="formBasicCheckbox">
                </Form.Group>
    
                <button className="btn btn-dark" type="submit" >
                   Confirmar
                </button>
            </Form>
        </Container>
        )

    :
    (<Container>
        <h3>Debes estar logueado antes de comprar </h3>
        <button className="btn btn-dark"><Link to='/login'>Ir al login</Link></button>
    </Container>)
    
        }
    </div>

    )
}