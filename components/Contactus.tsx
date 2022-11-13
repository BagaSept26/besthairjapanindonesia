import Image from "next/image";
import React, { useEffect, useRef } from 'react';
import { TbArrowWaveRightUp } from "react-icons/tb";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaWhatsapp, FaInstagram, FaMailBulk, FaMapMarked, FaFacebook } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


const Contactus = () => {

    const { ref, inView } = useInView();
  const animationX = useAnimation();
  const animationY = useAnimation();
  const animationZ = useAnimation();
  const animationBT = useAnimation();
  const pathAnimation = useAnimation();

  const pathRef = useRef(null);

  if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  }

  useEffect(() => {
    const el = pathRef.current;
    gsap.fromTo(
      el,
      { rotation: 0, opacity: 0 },
      {
        rotation: 360,
        opacity: 1,
        duration: 1,
        ease: "none",
        scrollTrigger: { trigger: el },
      }
    );
  }, [inView]);

  useEffect(() => {
    if (inView) {
      animationX.start({
        x: 0,
        opacity: 1,
        transition: {
          duration: 1,
          type: "fade",
        },
      });
      animationY.start({
        x: 0,
        opacity: 1,
        transition: {
          duration: 1,
          type: "fade",
        },
      });
      animationZ.start({
        x: 0,
        opacity: 1,
        transition: {
          duration: 1,
          type: "ease-out",
        },
      });
      animationBT.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 1,
          type: "ease-out",
        },
      });
      pathAnimation.start({
        opacity: 1,
        pathLength: 1,
        transition: {
          duration: 2,
          ease: "easeInOut",
        },
      });
    }
    if (!inView) {
      animationX.start({ opacity: 0, x: "-30px" });
      animationY.start({ opacity: 0, x: "30px" });
      animationZ.start({ opacity: 0, x: "-30px" });
      animationBT.start({ opacity: 0, y: "30px" });
      pathAnimation.start({ opacity: 0, pathLength: 0 });
    }
  }, [inView]);

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { delay: 1, ease: "easeInOut" } },
  };
  return (
    
      <div className="antialiased bg-gray-100">  
        <div className="flex w-full min-h-screen justify-center items-center">
            <div className="flex flex-col md:flex-row md:space-x-10 space-y-6 md:space-y-0 bg-[#0099ff] w-full max-w-4xl p-8 sm:p-12 rounded-xl shadow-lg text-white overflow-hidden">
                <div className="flex flex-col space-y-8 justify-between">
                    <div>
                        <h1 className="font-bold text-4xl tracking-wide">Kontak Kami</h1>
                        <p className="pt-2 text-cyan-100 text-sm">Berikut Kontak Kami yang bisa anda hubungi.</p>
                    </div>
                    <div className="inline-flex space-x-5 items-center">
                    <FaWhatsapp size={20} className="text-green-300 text-xl" /><span>+62 000 000 000</span> 
                    
                    </div>
                    <div className="inline-flex space-x-2 items-center">
                    <FaMailBulk size={20} className="text-green-300 text-xl" /><span className="text-white">admin@besthair.com</span>
                    
                    </div>
                    <div className="inline-flex space-x-2 items-center">
                    <FaMapMarked size={20} className="text-green-300 text-xl" /><span>jl. Raya Puspiptek</span>
                    
                    </div>
                    <div className="flex space-x-4 text-lg">
                    <a href="#"><FaFacebook size={20}/></a>
                    <a href="#"><FaInstagram size={20}/></a>
                    <a href="#"><FaFacebook size={20}/></a>
                </div>
                </div>
                    <div className="relative">
                        <div className="absolute z-0 w-40 h-40 bg-teal-400 rounded-full -right-40 -top-10">

                        </div>
                        <div className="absolute z-0 w-40 h-40 bg-teal-400 rounded-full -left-30 -bottom-10">

                        </div>
                        <div className="relative z-10 bg-white rounded-xl shadow-lg p-8 text-gray-600  md:w-80 ">
                            <form action="" className="flex flex-col space-y-4">
                                <div>
                                    <label htmlFor="" className="text-sm">Nama</label>
                                </div>
                                <div>
                                    <input type="text" 
                                    placeholder="Nama Anda"
                                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300" />
                                </div>
                                <div>
                                    <label htmlFor="" className="text-sm">Alamat Email</label>
                                </div>
                                <div>
                                    <input type="email" 
                                    placeholder="Email Anda"
                                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300" />
                                </div>
                                <div>
                                    <label htmlFor="" className="text-sm">Pesan</label>
                                </div>
                                <div>
                                    <textarea 
                                    placeholder="Pesan Anda"
                                    
                                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300" />
                                </div>
                                <div className="pt-10">
                                    <button className="flex items-center bg-[#008000] rounded-xl justify-center p-4 text-white gap-4 text-xl hover:scale-110 transition-all ease-out">
                                    <FaMailBulk size={30} />KIRIM            </button>
                                    </div>
                             </form>
                        </div>
                    </div>
                
            </div>
        </div>
    </div>
        
    
  )
}

export default Contactus