import React from "react";
import { Link, Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <header className="header">
        <div>
          <Link to={"/"}>Home</Link>
        </div>
        <div>
          <Link to={"/about"}>About</Link>
        </div>
        <div>
          <Link to={"/contact"}>Contacts</Link>
        </div>
        <div>
          <Link to={"*"}>Eror</Link>
        </div>
      </header>
      <main>
        <Outlet /> 
      </main>
      <footer>footer</footer>
    </>
  );
};

export default Layout;
