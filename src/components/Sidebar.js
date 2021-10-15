import React from "react";

function Sidebar(props) {
  return (
    <div className="block-sidebar">
      <div className="block-sidebar__link d-flex">
        <img src={props.img} alt="icon" />
        <h4>{props.name}</h4>
      </div>
    </div>
  );
}

export default Sidebar;
