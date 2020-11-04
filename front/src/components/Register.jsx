import React from 'react';
import {Form, Button, Container} from 'react-bootstrap';

export default ({handleNickname,handleEmail,handlePassword,handleSubmit}) => {

    return(

        <Container>
            <Form  onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label >Nickname:</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Enter Nickname" 
                    onChange={handleNickname} 
                    autoFocus
                    />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label >Email address:</Form.Label>
                    <Form.Control 
                    type="email" 
                    placeholder="Enter email" 
                    onChange={handleEmail}
                    />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control 
                    type="password" 
                    placeholder="Enter Password" 
                    onChange={handlePassword}
                    />
                </Form.Group>

                <Form.Group controlId="formBasicCheckbox">
                </Form.Group>

                <Button variant="primary" type="submit">
                    Create User
                </Button>
            </Form>
        </Container>

    )
}