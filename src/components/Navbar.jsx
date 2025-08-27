import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "active" : undefined)}
      >
        Home
      </NavLink>
      <NavLink
        to="/profiles"
        className={({ isActive }) => (isActive ? "active" : undefined)}
      >
        Profiles
      </NavLink>
    </nav>
  );
}
