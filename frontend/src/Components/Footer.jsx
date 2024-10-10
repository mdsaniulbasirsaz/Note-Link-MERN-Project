import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-700 p-4 text-center text-white">
      <p>© 2024, All Rights Reserved.</p>
      <p className="space-x-4">
        <a href="/privacy" className="hover:underline">
          Privacy Policy
        </a>
        <a href="/terms" className="hover:underline">
          Terms of Service
        </a>
      </p>
      <p>
        <span className="text-white"> Md Saniul Basir Saz</span>
      </p>
    </footer>
  );
};

export default Footer;
