import React from 'react';
import {Link} from 'react-router-dom'
import {Form, Button, Container} from 'react-bootstrap';
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

const style = {
    textDecoration: "none",
    marginTop: "10px",
    position: "relative",
  };

  let style2 = {hover: {backgroundColor: "yellow"}}
export default ({user, allCategory, handleSubmit,handleStock, handleName, handlePrice, handleImg, handleDescription, handleCategory, category}) => {

    return(
        <div>
            {user.id && user.isAdmin !== "Customer" ? 
        
        <Container style={formbox}> 

            <Form  onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label >Nombre:</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Enter name"
                    onChange={handleName} 
                    autoFocus
                    required
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
                    required
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
                    required
                    />
                </Form.Group>

                <Form.Group >
                    <Form.Label>Imagen:</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Enter a URL img" 
                    onChange={handleImg}
                    required
                    />
                </Form.Group>

                <Form.Group >
                    <Form.Label>Descripcion:</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Enter a description" 
                    onChange={handleDescription}
                    required
                    />
                </Form.Group>
                { allCategory && allCategory.length > 0 ?
                    allCategory.map((c)=>{
                        return (
                <Form.Group className="custom-control-inline" key={c.id}>
                    <span >
                        <Button variant="danger" style={style, style2} onClick={()=>{handleCategory(c)}}>{c.name}</Button>
                    </span>
                </Form.Group>
                        )
                    }) : null
                }
    <br/>
    <br/>
    <hr/>

                <Button style={{marginTop: "30px", marginBottom: "30px"}}variant="dark" type="submit">
                    Create Product
                </Button>


            </Form>
            </Container> : (<NotFound style={{ marginTop: "50px", width: "60%", marginLeft: "70px"}}/>)}
        </div>
    )
}