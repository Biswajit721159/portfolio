import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [mode, setmode] = useState("light");
  const [btnText, setbtnText] = useState("Dark mode on");

  const toggelStyle = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#96908F";
      setbtnText("Light mode on");
    } else if (mode === "dark") {
      setmode("light");
      document.body.style.backgroundColor = "#F4F6F6";
      setbtnText("Dark mode on");
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent mx-5">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">About</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="Projects">Projects</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="Contact">Contact</Link>
                </li>
            </ul>
         </div>
         <div className="container ">
            <button
              onClick={toggelStyle}
              type="button"
              className="btn btn-info"
            >
              {btnText}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}