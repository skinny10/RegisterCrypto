import React from "react";
import "./HeaderRegister.css";
import logo from "../../../assets/img/file.png";

export default function HeaderRegister() {
  return (
    <div>
      <header className="content-header">
        <img className="h-16 rounded-lg" src={logo} alt="Your Company" />
        <h1 className="h1-text">Get Started Free</h1>
        <h6 className="h2-text">The Future in Crypto Currencies</h6>
      </header>
    </div>
  );
}
