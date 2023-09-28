import React from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Navigation() {
  const location = useLocation();
  return (
    <div class="nav-bar-container">
      <div
        className={location.pathname === "/" ? "activeLink" : "unActiveLink"}
      >
        <NavLink to="/">Home</NavLink>
      </div>
      <div
        className={location.pathname === "/bio" ? "activeLink" : "unActiveLink"}
      >
        <NavLink to="/bio">Biography</NavLink>
      </div>
      <div
        className={
          location.pathname === "/life" ? "activeLink" : "unActiveLink"
        }
      >
        <NavLink to="/life">Life</NavLink>
      </div>
      <div
        className={
          location.pathname === "/poem" ? "activeLink" : "unActiveLink"
        }
      >
        <NavLink to="/poem">Poem</NavLink>
      </div>
      <div
        className={
          location.pathname === "/memorial" ? "activeLink" : "unActiveLink"
        }
      >
        <NavLink to="/memorial">Memorial</NavLink>
      </div>
    </div>
  );
}
