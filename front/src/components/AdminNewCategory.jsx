import React from 'react';
import {Link} from 'react-router-dom'
import {Form, Button, Container, InputGroup} from 'react-bootstrap';
import NotFound from './error'

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

export default ({handleSubmit, handleName, user}) => {

    return(
        <div>

{user.id && user.isAdmin !== "Customer" ? (

        <Container style={formbox}> 

            <Form  onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label >Categoria:</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Enter Category name" 
                    onChange={handleName} 
                    autoFocus
                    required
                    />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Button variant="dark" type="submit">
                    Create Category
                </Button>
            </Form>
        </Container>) : 
        (<NotFound style={{ marginTop: "50px", width: "60%", marginLeft: "70px"}}/>)}
    </div>
    )
}