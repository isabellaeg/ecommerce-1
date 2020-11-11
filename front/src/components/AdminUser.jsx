import React from "react";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function AdminUser({user, allUsers, handleDelete, handleRoles}) {
    return (<div>

{user.id && user.isAdmin !== "Customer" ? 


(
    <div className="container" style={{ marginTop: "50px", width: "60%" }}>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id Usuario</th>
            <th>NickName</th>
            <th>Email</th>
            <th>Rol</th>
          </tr>
        </thead>
        {allUsers && allUsers.length > 0
          ? allUsers.map((e) => {
              return (
                <tbody key={e.id}>
                  <tr>
                    <td># {e.id}</td>
                    <td>{e.nickname}</td>
                    <td> {e.email}</td>
                    <td> {e.isAdmin} </td>
                    <td><Button onClick = {()=>{handleRoles(e)}} >Promover a Admin</Button></td>
                    <td><Button onClick = {()=>{handleDelete(e)}}>Eliminar Usuario</Button></td>
                  </tr>
                </tbody>
              );
            })
          : null}
      </Table>
      {/* <Button className="btn btn-dark">
        <Link to="/allproducts">Ir a Home</Link>
      </Button> */}
    </div>
  )
  :
  (<div className="container" style={{ marginTop: "50px", width: "60%" }}>ACA NO ENTRAS</div>)

}


    </div>)
   
}

export default AdminUser;
