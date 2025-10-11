import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#010206] to-[#060a38] h-screen w-full text-white py-12">
      <div className="visual-content">
        {/* <Image
          src="/images/footer.png"
          className="w-full h-96 object-contain"
          alt="Footer"
          width={1000}
          height={1000}
        /> */}
      </div>
      <div className="text-content"></div>
    </footer>
  );
};

export default Footer;
