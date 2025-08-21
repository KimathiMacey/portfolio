import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          © {new Date().getFullYear()} MaceyKimathi. All rights reserved.
        </p>

        {/* Social Media Icons */}
        <div className="footer-icons">
          <a
            href="https://github.com/KimathiMacey"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon-link"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon-link"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon-link"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
}
