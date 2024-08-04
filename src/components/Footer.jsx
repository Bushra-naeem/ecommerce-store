import React from "react";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="w-full hidden sm:flex justify-between items-center bg-zinc-800 h-28 text-white text-lg lg:text-xl">
      <div style={{ paddingLeft: 60 }}>
        © 2020 Dress Shop. All rights reserved.
      </div>
      <div
        className="flex gap-10 text-xl md:text-2xl lg:text-3xl"
        style={{ paddingRight: 60 }}
      >
        <span>
          <FaFacebook />
        </span>
        <span>
          <FaGithub />
        </span>
        <span>
          <FaInstagram />
        </span>
      </div>
    </section>
  );
};

export default Footer;
