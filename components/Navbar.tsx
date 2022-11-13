import Link from "next/link";

import { useState } from 'react'
import React from "react";

import {
  AiOutlineMenu,
  AiOutlineClose,

  AiOutlineMail,
} from "react-icons/ai";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [sideMenu, setSideMenu] = useState(false);
  const handleSideMenu = () => {
    setSideMenu(!sideMenu);
  };
  return (
    <div className="fixed w-full h-20 z-[100] bg-white shadow-lg shadow-gray-300 top-0 left-0 right-0">
       
      <div className="flex items-center justify-between w-full h-full p-6">
      <img 
      src="assets/logo1.png" 
      alt="besthair" 
      className="w-[380px] h-[70px]"/>
        <div className="md:flex-1">
      
        </div>
        <div className="text-2xl md:flex-1 md:mr-10">
          <ul className="items-center justify-between hidden md:flex">
            <Link href="/">
              <li>Beranda</li>
            </Link>
            <Link href="/">
              <li>Melayani</li>
            </Link>
            <Link href="/">
              <li>Pelayanan</li>
            </Link>
            <Link href="/">
              <li>STAFF</li>
            </Link>
            
          </ul>
          <div className="cursor-pointer md:hidden" onClick={handleSideMenu}>
            <AiOutlineMenu size={30} />
          </div>
        </div>
      </div>
      <div
        className={
          sideMenu
            ? "md:hidden fixed top-0 left-0 w-full h-screen bg-black/70"
            : ""
        }
      >
        <div
          className={
            sideMenu
              ? "fixed top-0 left-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-4 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div className="flex items-center justify-between">
            <div>
            <img 
            src="assets/logo1.png" 
            alt="besthair" 
            className="w-[180px] h-[30px]"/>
            </div>
            <div
              onClick={handleSideMenu}
              className="p-3 rounded-full shadow-lg cursor-pointer shadow-gray-400"
            >
              <AiOutlineClose />
            </div>
          </div>
          <div className="my-4 border-b border-gray-300">
            <p className="w-[85%] md:w-[90%] py-4 mx-auto">
              PERJALANAN MEDIS MUDAH, MURAH, NYAMAN
            </p>
          </div>
          <div className="flex flex-col py-4">
            <ul className="uppercase">
              <Link href="/">
                <li className="py-4 text-2xl">Tentang Kami</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-2xl">Kami Melayani</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-2xl">Pelayanan Kami</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-2xl">Staff</li>
              </Link>
            </ul>
            <div className="pt-20">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Hubungi Kami
              </p>
              <div className="flex items-center justify-between my-3 w-full sm:w-[80%]">
                <div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
                  <FaInstagram />
                </div>
                <div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
                  <FaWhatsapp />
                </div>
                <div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
                  <AiOutlineMail />
                </div>
                <div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
                  <BsPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Navbar;
