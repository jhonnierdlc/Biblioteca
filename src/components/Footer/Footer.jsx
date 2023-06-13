import React from "react";
import "./Footer.css";
import { useLocation } from "react-router";

const Footer = () => {
  const { pathname } = useLocation();
  if (pathname === "/login") return <div />;
  return (
    <footer className="footer bg-dark">
      <div className="copy text-center text-white p-3">
        <div>Footer</div>
        <p>
          © 2023 Copyright:{" "}
          <a className="text-white" href="https://unicesar.edu.co/">
            Unicesar.edu
          </a>{" "}
          Jhonnierdlc
        </p>
      </div>
    </footer>
  );
};

export default Footer;
