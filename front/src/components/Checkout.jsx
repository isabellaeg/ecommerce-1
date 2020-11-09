import React from 'react';
import {Form, Button, Container} from 'react-bootstrap';

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

export default ({handleSubmit, handleAddress, handleCard, handleCvv}) => {

    return(

        <Container style={formbox}> 
                <h3>Enter your payment information</h3>
            <Form  onSubmit={handleSubmit}>
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

                <button variant="dark" type="submit" >
                    Confirm
                </button>
            </Form>
        </Container>

    )
}