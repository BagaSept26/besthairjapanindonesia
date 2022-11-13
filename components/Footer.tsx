import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full h-[40vh] bg-[#F9F9FC]">
      <div className="w-full h-full bg-white rounded-tl-[100px] rounded-br-[100px] pt-20 mx-auto px-6">
        <div className="grid grid-cols-4 gap-4 text-lg justify-center place-content-between">
          <div className="flex flex-col gap-4">
          <img src="assets/logo.jpeg" alt="besthair" className="w-[70px] h-[70px]"/>
            <p className="pt-4 hidden md:flex">
              BEST HAIR JAPAN IN INDONESIA jasa perjalanan medis untuk transplantasi rambut
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 ml-3 md:ml-20">
            <ul>
              
              <Link href="/">
                <li className="cursor-pointer">Profil Kami</li>
              </Link>
              
              
            </ul>
          </div>
          <div className="flex flex-col items-center gap-6">
            <ul>
              <Link href="/">
                <li className="cursor-pointer">Pelayanan Kami</li>
              </Link>
              <Link href="/">
                <li className="cursor-pointer">Galeri</li>
              </Link>
              
              <Link href="/">
                <li className="cursor-pointer">Kontak Kami</li>
              </Link>
            </ul>
          </div>
          <div className="flex flex-col items-center gap-6">
            <div>
              <FaFacebookF
                size={30}
                className="p-2 transition-all ease-out bg-white rounded-full shadow-xl cursor-pointer shadow-gray-400 hover:scale-110"
              />
            </div>
            <div>
              <AiOutlineTwitter
                size={30}
                className="p-2 transition-all ease-out bg-white rounded-full shadow-xl cursor-pointer shadow-gray-400 hover:scale-110"
              />
            </div>
            <div>
              <FaLinkedinIn
                size={30}
                className="p-2 transition-all ease-out bg-white rounded-full shadow-xl cursor-pointer shadow-gray-400 hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
