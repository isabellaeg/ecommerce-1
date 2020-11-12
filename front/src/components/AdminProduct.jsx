import React from "react";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import NotFound from './error'

let style = {textDecoration: "none"}

function AdminProduct({user, allProducts, handleDelete}) {
    return (<div>

{user.id && user.isAdmin !== "Customer" ? 


(
    <div className="container" style={{ marginTop: "50px", width: "60%" }}>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id Producto</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Imagen</th>
          </tr>
        </thead>
        {allProducts && allProducts.length > 0
          ? allProducts.map((e) => {
              return (
                <tbody key={e.id}>
                  <tr>
                    <td># {e.id}</td>
                    <td>{e.name}</td>
                    <td> {e.price}</td>
                    <td> {e.stock} </td>
                    <td> <img src={e.imgUrl} style={{width: "70px", height: '50px'}}></img></td>
                    <td><Button style={{color: "white"}} variant='dark' onClick = {()=>{}}><Link to={`/admin/product/${e.id}`}><i class="fas fa-edit"></i></Link></Button></td>
                    <td><Button variant="danger" onClick = {()=>{handleDelete(e)}}><i className="fas fa-trash"></i></Button></td>
                    
                  </tr>
                </tbody>
              );
            })
          : null}
      </Table>
      <Button className="btn btn-dark">
        <Link to="/admin/newproduct">Agregar producto</Link>
      </Button>
    </div>
  )
  :
  (<NotFound style={{ marginTop: "50px", width: "60%", marginLeft: "70px"}}/>)

}


    </div>)
   
}

export default AdminProduct;
