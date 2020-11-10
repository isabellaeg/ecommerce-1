import React from "react";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

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
                    <td> {e.imgUrl} </td>
                    <td><Button onClick = {()=>{}}>Editar</Button></td>
                    <td><Button onClick = {()=>{handleDelete(e)}}>Eliminar Producto</Button></td>
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
  (<div className="container" style={{ marginTop: "50px", width: "60%" }}>ACA NO ENTRAS</div>)

}


    </div>)
   
}

export default AdminProduct;
