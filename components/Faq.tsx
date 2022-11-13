import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { TbArrowWaveRightUp } from "react-icons/tb";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Faq = () => {
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
    <div>
      <div className="flex flex-col items-center justify-center">
            <div
              data-scroll
              data-scroll-speed="-6"
              data-scroll-direction="horizontal"
              className="pb-2 text-3xl left-[5%]"
            >
              <h2>FAQ</h2>
            </div>
            <p className="py-2 text-center">
            Kami telah memposting banyak konten dalam pertanyaan ke perusahaan kami. Jika Anda memiliki pertanyaan, jangan ragu untuk menghubungi kami.
            </p>
          </div>
          
          
      <div className="flex w-full min-h-screen justify-center items-center">
      <div className="absolute">
      
      


        <div className="text-xs bg-gradient-to-b from-soft-violet to-soft-blue min-h-screen flex justify-center items-center px-6 py-28 rounded">
            <div className="w-full md:relative w-full px-6 flex flex-col md:flex-row bg-white rounded-2xl md:max-w-4xl h-full md:h-160">

            <div className="absolute top-1/2 -left-24 transform -translate-y-6 z-10 animate-bounce ">
               <img src="/assets/illustration-box-desktop.svg" alt="illustration-box-desktop" className="hidden md:block"/>
            </div>

            <div className="w-full md:absolute transform -translate-y-26 md:-translate-y-1/2 md:-translate-x-0 md:top-1/2 md:-left-20 animate-pulse ">
                <img src="/assets/illustration-woman-online-mobile.svg" alt="illustration-woman-online" className="block md:hidden" />
                <img src="/assets/illustration-woman-online-desktop.svg" alt="illustration-woman-online" className="hidden md:block" />
            </div>

            <div className="transform -translate-y-26 md:translate-y-0 mt-15 md:mb-20 flex flex-col justify-center md:ml-118">

              <h1 className="text-2xl font-bold text-center md:text-left mb-2 antialiashed">Pertanyan yang sering ditanyakan</h1>

                <div className="mt-9.5 space-y-4">

                 <details className="pb-5 border-b md:w-80 hover:cursor-pointer">
                    <summary className="flex justify-between items-center text-summary md:text-sm font-bold text-very-dark-grayish-blue hover:text-soft-red mb-5">Saya ingin melakukan perjalanan, apakah itu mungkin??</summary>
                      <p className="text-dark-grayish-blue text-xs font-semibold">Tentu saja Anda bisa.</p>
                  </details>

                <details className="pb-5 border-b md:w-80 hover:cursor-pointer">
                  <summary className="flex justify-between items-center text-summary md:text-sm font-bold text-very-dark-grayish-blue hover:text-soft-red mb-5">Apakah Anda menggunakan rambut Anda sendiri untuk transplantasi rambut?</summary>
                    <p className="text-dark-grayish-blue text-xs font-semibold">Ya, saya melakukannya dengan rambut saya sendiri.</p>
                </details>

    <details className="pb-5 border-b md:w-80 hover:cursor-pointer">
      <summary className="flex justify-between items-center text-summary md:text-sm font-bold text-very-dark-grayish-blue hover:text-soft-red mb-5">Apakah Anda memiliki garansi dan dukungan pasca perawatan?</summary>
      <p className="text-dark-grayish-blue text-xs font-semibold">Anda disana. Setelah kembali ke Jepang, kami juga memberikan konsultasi dan saran tentang perawatan dan kemajuan kulit kepala.</p>
    </details>

    <details className="pb-5 border-b md:w-80 hover:cursor-pointer ">
      <summary className="flex justify-between items-center text-summary md:text-sm font-bold text-very-dark-grayish-blue hover:text-soft-red mb-5">Berapa banyak uang yang harus saya bawa ke negara ini?</summary>
      <p className="text-dark-grayish-blue text-xs font-semibold">Anda dapat makan dan minum selama menginap dengan harga sekitar Rp.1.000.000 hingga Rp.3.000.000.</p>
    </details>
    
    <details className="pb-5 border-b md:w-80 hover:cursor-pointer">
      <summary className="flex justify-between items-center text-summary md:text-sm font-bold text-very-dark-grayish-blue hover:text-soft-red mb-5">Apakah mungkin untuk bepergian selama krisis Corona?</summary>
      <p className="text-dark-grayish-blue text-xs font-semibold">Tidak ada efek jika Anda telah menyelesaikan dua vaksinasi. Jika Anda telah menyelesaikan 3 vaksinasi, tidak akan ada dampak pada tindakan karantina saat memasuki negara atau karantina hotel wajib setelah kembali ke rumah.</p>
    </details>

  </div>

</div>

           </div>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Faq