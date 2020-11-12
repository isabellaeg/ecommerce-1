import React from "react";
import { Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const styeNavLink = {
  color: "white",
  fontSize: "1rem",
  border: "none",
  outline: "none",
  padding: "2px 16px",
};
const styleHeader = {
  fontSize: "1.1rem",
  color: "white",
};

function Sidebar(props) {
  return (
    <div className="col-xs-2" >
      <section className="sidebar" style={{backgroundColor: '#343a40', fontFamily: "inherit"}}>
        <br />
        <p style={styleHeader}>CATEGORÍAS</p>
        {props.categories && props.categories.length > 0
          ? props.categories.map((c) => {
              return (
                <div key={c.id} className="menu-item active">
                  <Nav.Item>
                    <Nav.Link
                      onClick={() => {
                        props.handleSubmit(c.name);
                      }}
                      style={styeNavLink}
                    >
                      {c.name}
                    </Nav.Link>
                  </Nav.Item>
                </div>
              );
            })
          : null}
        
        <br />
       
        <br />
        
        <br />
        
      </section>
    </div>
  );
}

export default Sidebar;
