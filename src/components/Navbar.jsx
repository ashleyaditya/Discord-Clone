import React from "react";
import Logo from "./Logo";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="flex align-center justify-around">
      {/* Navbar left */}
      <div>
        <div>
          <Logo />
        </div>
      </div>
      {/* Navbar middle */}
      <ul className="flex">
        <li className="ml-12 mr-12">Download</li>
        <li className="ml-12 mr-12">Nitro</li>
        <li className="ml-12 mr-12">Safety</li>
        <li className="ml-12 mr-12">Support</li>
        <li className="ml-12 mr-12">Blog</li>
        <li className="ml-12 mr-12">Careers</li>
      </ul>
      {/* Navbar right */}
      <div>
        <button>Open Discord</button>
      </div>
    </nav>
  );
};

export default Navbar;
