import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const SidebarElement = ({ url, text, hasSubmenu }) => {
  const [isSelected, setSelected] = useState(false);

  const handleClick = event => {
    event.preventDefault();
    setSelected(!isSelected);
  };

  return hasSubmenu ? (
    <a
      href="http://www.google.com"
      onClick={handleClick}
      className={isSelected ? "is-selected" : "not-selected"}
    >
      {text}
      {isSelected ? (
        <span className="arrow-down" />
      ) : (
        <span className="arrow-right" />
      )}
    </a>
  ) : (
    <NavLink to={url} activeClassName="selected">
      {text}
    </NavLink>
  );
};

export default SidebarElement;
