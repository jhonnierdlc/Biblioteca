import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer bg-dark">
      <div className="copy text-center text-white p-3">
        <div>Footer</div>
        <p>
          © 2023 Copyright:{" "}
          <a className="text-white" href="https://unicesar.edu.co/">
            Unicesar.edu
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
