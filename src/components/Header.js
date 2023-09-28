import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import Navigation from "./Navigation";

function Header() {
  const location = useLocation();
  const title =
    location.pathname === "/"
      ? "Snowball "
      : `Snowball -- ${
          location.pathname.slice(1).charAt(0).toUpperCase() +
          location.pathname.slice(2)
        }`;

  return (
    <div>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <header>
        <h1 class="title">Snowball I</h1>
        <div class="navbar-top">
          <Navigation />
        </div>
        <div class="navbar-bottom">
          <Navigation />
        </div>
        <h2 class="borderText">In Loving Memory of our Beloved Cat</h2>
      </header>
    </div>
  );
}
export default Header;
