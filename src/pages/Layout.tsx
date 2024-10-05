import { Outlet, Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import "../css/App.css";
import { CSSProperties, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

const Layout = () => {
  const isMobile = useMediaQuery({ maxWidth: "980px" });
  const [showMenu, setShowMenu] = useState(false);

  const sideMenu: CSSProperties = {
    padding: "8px",
    display: "flex",
    flexDirection: "row", 
    alignItems: "center"
  }

  const toggleMenu = (showMenu: boolean) => {
    console.log('toggleee')
    setShowMenu(showMenu);
  }

  const renderLinks = () => {

    const mobileStyles: CSSProperties = {
      display: "flex",
      flexDirection: "column",
    }

    const styleOverride = isMobile ? mobileStyles : undefined;

    return (
      <ul style={styleOverride} >
      <li >
        <Link to="/" onClick={() => toggleMenu(false)}>Home</Link>
      </li>
      <li >
        <Link to="/about" onClick={() => toggleMenu(false)}>About</Link>
      </li>
    </ul>
    )
  }

  return (
    <>
      <header id="header">
        <img src={require("../images/logo.png")} style={{padding: "8px"}}/>
        <nav className="links">
          {renderLinks()}
        </nav>
        {isMobile && (
          <nav className="main">
            <ul>
              <li className="menu">
                <a className="fa-bars" onClick={() => toggleMenu(true)}>
                  Menu
                </a>
              </li>
            </ul>
          </nav>
        )}
        {showMenu && isMobile && (
          <div className="menu-overlay">
            <a onClick={() => toggleMenu(false)} style={sideMenu}>
              <FontAwesomeIcon icon={faX} style={{margin: "0 8px"}} />
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
