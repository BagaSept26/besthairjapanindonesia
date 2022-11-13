
import React, { useEffect, useRef, useState } from "react";
import { TbArrowWaveRightUp } from "react-icons/tb";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Nature from '../variables/Nature';
import Planets from '../variables/Planets';
import Space from '../variables/Space';
import Harga from "../components/Harga";
import Harga1 from "../components/Harga1";
import Harga2 from "../components/Harga2";

const Hero = () => {
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


    const [text,setText] = useState('first-con')
  
    const [isModalActive,setIsModalActive] = useState(false)
  
    const isActive = () => {
      setIsModalActive(!isModalActive)
    }
  

  return (
    <div ref={ref} className='container px-6 w-full h-full bg-white'>
      <div className="flex flex-col">
        <div className="flex items-center justify-center ">
          <div className="flex flex-col items-center justify-center md:flex-1 md:items-start">
            
            <motion.div>
            <div className='section'>

              
               <div className='change-box gap-10 pt-10'>
                <button className='state-change-btn' onClick={() => setText('first-con')}>BEST HAIR JAPAN IN INDONESIA</button>
                <button className='state-change-btn' onClick={() => setText('second-con')}>TRANSPLANTASI RAMBUT</button>
                <button className='state-change-btn' onClick={() => setText('third-con')}>FUE/HI (CHOI PENS)</button>
                </div>

               
  
              

            </div>
            </motion.div>
            
          </div>
          <div className="hidden lg:block">
            
            <div>
               <div className='change-box gap-10 pt-10'>
                <button className='state-change-btn' onClick={() => setText('first-con')}></button>
                <button className='state-change-btn' onClick={() => setText('second-con')}></button>
                <button className='state-change-btn' onClick={() => setText('third-con')}></button>
                </div>

               <div>
                {text === 'first-con' && <Harga/>}
                {text === 'second-con'&& <Harga1/> }
                {text === 'third-con' && <Harga2/>}

    

   

                </div>
  
              </div>
            
              
            <motion.div
              animate={animationY}
              className="absolute z-30 top-[250px] right-[180px]"
            >
             
             <div className="absolute z-[0] w-[40%] h-[40%] top-0 pink__gradient" />
             <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
              <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        
                
              
            </motion.div>
          </div>
          
        </div>
        <div className='mx-auto flex items-center w-full justify-center md:hidden'>
               <div className='change-box gap-5 pt-10 '>
                <button className='state-change-btn' onClick={() => setText('first-con')}></button>
                <button className='state-change-btn' onClick={() => setText('second-con')}></button>
                <button className='state-change-btn' onClick={() => setText('third-con')}></button>
                </div>

               <div>
                {text === 'first-con' && <Harga/>}
                {text === 'second-con'&& <Harga1/> }
                {text === 'third-con' && <Harga2/>}

    

   

                </div>
  
              </div>
        
        <div className="flex items-center justify-center gap-8 w-full my-3 md:hidden max-w-[80%] mx-auto mt-10">
          
          <div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
            <FaInstagram size={30} />
          </div>
          <div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
            <FaWhatsapp size={30} />
          </div>
          <div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
            <AiOutlineMail size={30} />
          </div>
          <div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
            <BsFillPersonLinesFill size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
