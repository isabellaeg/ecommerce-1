import React from "react";
import {Button} from "react-bootstrap"


function Sidebar(props) {
  console.log("PROPS", props.categories);
  return (
    <div className="col-xs-2">
      <section className="sidebar">
      {props.categories && props.categories.length > 0
        ? props.categories.map((c) => {
          return (
            
              
                <h4 className="menu-item active">
                  <Button variant = "link"
                    onClick={() => {
                      props.handleSubmit(c.name);
                    }}
                  >
                    {c.name}
                  </Button>
                </h4>
              
            );
          })
          : null}
        </section>
    </div>
  );
}

export default Sidebar;
