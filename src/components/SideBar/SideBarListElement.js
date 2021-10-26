import React from "react";

function SideBarListElement(props) {
  const { onClick } = props;
  const handleClick = () => {
    if (onClick) onClick();
  };
  return (
    <div onClick={handleClick} className="block-sidebar">
      <div className="block-sidebar__link d-flex">
        <img src={props.img} alt="icon" />
        <p>{props.name}</p>
      </div>
    </div>
  );
}

export default SideBarListElement;
