import { Outlet, Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import "../css/App.css";
import { useState } from "react";

const Layout = () => {
  const isMobile = useMediaQuery({ maxWidth: "980px" });
  const [showMenu, setShowMenu] = useState(false);



  const toggleMenu = () => {
    console.log('toggleee')
    setShowMenu(!showMenu);
  }

  const renderLinks = () => {

    const styleOverride = isMobile ? "menu-overlay" : "";

    return (
      <ul>
      <li className={styleOverride}>
        <Link to="/">Home</Link>
      </li>
      <li className={styleOverride}>
        <Link to="/about">About</Link>
      </li>
    </ul>
    )
  }

  return (
    <>
      <header id="header">
        <h1>The Fukuda</h1>
        <nav className="links">
          {renderLinks()}
        </nav>
        {isMobile && (
          <nav className="main">
            <ul>
              <li className="menu">
                <a className="fa-bars" href="#menu-overlay" onClick={toggleMenu}>
                  Menu
                </a>
              </li>
            </ul>
          </nav>
        )}
        {showMenu && isMobile && (
          <div className="menu-overlay">
            <a className="fa-times" href="#" onClick={toggleMenu}>
              Close
            </a>
            <nav>
              {renderLinks()}
            </nav>

          </div>
        )}
      </header>

      <Outlet />
    </>
  );
};

export default Layout;
