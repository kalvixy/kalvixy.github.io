import { CSSProperties } from "react";
import "../css/App.css";

const styleOverride: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center"
}

const Construction = () => {
    return (
      <header style={styleOverride}>
        <h2>
            Whoops! This website is still under construction. Come by another time!
        </h2>
      </header>
    );
  }
  
  export default Construction;
  