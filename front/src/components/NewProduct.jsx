import React from 'react';
import {Link} from 'react-router-dom'
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

export default ({handleSubmit,handleStock, handleName, handlePrice, handleImg, handleDescription}) => {

    return(

        <Container style={formbox}> 

            <Form  onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label >Nombre:</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Enter Name" 
                    onChange={handleName} 
                    autoFocus
                    />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group >
                    <Form.Label >Stock:</Form.Label>
                    <Form.Control 
                    type="number" 
                    placeholder="Enter stock" 
                    onChange={handleStock}
                    />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group >
                    <Form.Label>Price:</Form.Label>
                    <Form.Control 
                    type="number" 
                    placeholder="Enter price" 
                    onChange={handlePrice}
                    />
                </Form.Group>

                <Form.Group >
                    <Form.Label>Imagen:</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Enter a URL img" 
                    onChange={handleImg}
                    />
                </Form.Group>

                <Form.Group >
                    <Form.Label>Descripcion:</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Enter a description" 
                    onChange={handleDescription}
                    />
                </Form.Group>


                <Button variant="dark" type="submit">
                    Create Product
                </Button>
            </Form>
        </Container>

    )
}