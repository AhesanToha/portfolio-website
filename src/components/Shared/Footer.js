import React from "react";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer footer-center p-8 bg-black text-white">
      <div>
        <p>
          <p>Copyright &copy;{year} M. Ahesanul Hoque Toha</p>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
