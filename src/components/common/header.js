import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const activeClass = { color: "orange" };
  return (
    <nav>
      <NavLink to="/" exact activeStyle={activeClass}>
        Home
      </NavLink>{" "}
      |{" "}
      <NavLink activeStyle={activeClass} to="/clases">
        Clases
      </NavLink>{" "}
      |{" "}
      <NavLink activeStyle={activeClass} to="/about">
        About
      </NavLink>
    </nav>
  );
}

//HOME | CLASES | ABOUT
