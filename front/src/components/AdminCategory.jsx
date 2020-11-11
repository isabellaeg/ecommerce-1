import React from "react";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function AdminCategory({user, allCategory, handleDelete}) {
    return (<div>

{user.id && user.isAdmin !== "Customer" ? 


(
    <div className="container" style={{ marginTop: "50px", width: "60%" }}>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id Categoria</th>
            <th>Nombre</th>
          </tr>
        </thead>
        {allCategory && allCategory.length > 0
          ? allCategory.map((e) => {
              return (
                <tbody key={e.id}>
                  <tr>
                    <td># {e.id}</td>
                    <td>{e.name}</td>
                    <td><Button onClick = {()=>{handleDelete(e)}}>Eliminar Category</Button></td>
                  </tr>
                </tbody>
              );
            })
          : null}
      </Table>
      <Button className="btn btn-dark">
        <Link to="/admin/newcategory">Agregar categoria</Link>
      </Button>
    </div>
  )
  :
  (<div className="container" style={{ marginTop: "50px", width: "60%" }}>ACA NO ENTRAS</div>)

}


    </div>)
   
}

export default AdminCategory;