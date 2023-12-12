import React from "react";
import Image from "next/image";
import LogoImage from "../../images/logoImage.png";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <Image src={LogoImage} width={50} height={50} alt="Logo" /> 
        <p className="text-slate-600">Thank you for visiting</p>
      </div>
    </footer>
  );
};

export default Footer;