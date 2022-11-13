import React, {useState, useRef, TouchEvent, useEffect} from 'react';

import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

const Comparison = () => {
  const [imageRevealFraq, setImageRevealFraq] = useState(0.5)
  const imageContainer = useRef<HTMLDivElement>(undefined);

  
    const { ref, inView } = useInView({ threshold: 0.1 });
    const animationLR = useAnimation();
    const animationBT = useAnimation();
    const animationRL = useAnimation();
    const animationTB = useAnimation();
    const pathAnimation = useAnimation();
  
    

  const slide = (xPosition: number): void =>{
    const containerBoundingRect = imageContainer.current.getBoundingClientRect()
    setImageRevealFraq(() => {
      if (xPosition < containerBoundingRect.left){
        return 0;
      }
      else if (xPosition > containerBoundingRect.right){
        return 1;
      }
      else {
        return (
          (xPosition - containerBoundingRect.left) / containerBoundingRect.width
          );
      }
      
    }); 
  };
  const handleTouchMove = (event: TouchEvent<HTMLDivElement>): void => {
    slide(event.touches.item(0).clientX);
  };

  const handleMouseDown = (): void => {
    window.onmousemove = handleMouseMove;
    window.onmouseup = handleMouseUp;
  };

  const handleMouseMove = (event: MouseEvent): void => {
    slide(event.clientX);
  };

  const handleMouseUp = (): void => {
    window.onmousemove = undefined;
    window.onmouseup = undefined;
  };

  useEffect(() => {
    if (inView) {
      animationLR.start({
        x: 0,
        opacity: 1,
        transition: {
          type: "fade",
          duration: 1,
        },
      });
      animationRL.start({
        x: 0,
        opacity: 1,
        transition: {
          type: "fade",
          duration: 1,
        },
      });
      animationBT.start({
        y: 0,
        opacity: 1,
        transition: {
          type: "ease-out",
          duration: 1,
        },
      });
      animationTB.start({
        y: 0,
        opacity: 1,
        transition: {
          type: "ease-out",
          duration: 1,
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
      animationLR.start({ opacity: 0, x: "-30px" });
      animationBT.start({ opacity: 0, y: "30px" });
      animationTB.start({ opacity: 0, y: "-30px" });
      animationRL.start({ opacity: 0, x: "30px" });
      pathAnimation.start({ opacity: 0, pathLength: 0 });
    }
  }, [inView]);


  return (
    <div ref={ref} className="w-full h-auto bg-white rounded-tl-[100px] rounded-br-[100px] pt-10 pb-10">
    
      <div className="relative mt-10">
        <div className="pt-12">
       <div className="flex flex-col items-center justify-center text-center">
        <div>
              <div
                data-scroll
                data-scroll-speed="-6"
                data-scroll-direction="horizontal"
                className="pb-2 text-3xl left-[5%]"
              >
                <h2>Sebelum & Sesudah</h2>
              </div>
              <p className="py-3">
                HASIL TRANSPLANTASI RAMBUT
              </p>
            </div>
            </div>

         <div 
           ref={imageContainer}
             className="max-w-lg w-full mx-auto mt-32 relative select-none group"
             >
           <img
             src="assets/case03.jpg"
             alt=""
             className="pointer-events-none w-[500px] h-[600px] "
             />
            <img
               style={{
               clipPath:  `polygon(0 0, ${imageRevealFraq * 100}% 0, ${imageRevealFraq * 100}% 100%, 0 100%)`
              }}
               src="assets/case02.jpg"
               alt=""
              className="absolute inset-0 pointer-events-none w-[500px] h-[600px]"
              />
          <div
              style={{left: `${imageRevealFraq*100}%`}}
              className="absolute inset-y-0 group-hover:opacity-100 sm:opacity-0"> 
           <div className="relative h-full opacity=50">
              <div className="absolute inset-y-0 bg-white w-0.5 -ml-px"></div>
              <div 
              style={{ touchAction: "none" }}
              onMouseDown={handleMouseDown}
              onTouchMove={handleTouchMove}
              className="h-12 w-12 -ml-6 -mt-6 rounded-full bg-white absolute top-1/2 shadow-xl flex items-center justify-center cursor-pointer">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor" 
                className="w-6 text-gray-400 rotate-90 transform">
              <path
                 strokeLinecap="round" 
                 strokeLinejoin="round" 
                 d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
            </svg>
            </div>
            </div>
            
            </div>
            
         </div>
         <div className="pt-10 flex flex-col items-center justify-center text-center ">
              <button className="flex items-center bg-[#0099ff] rounded-xl justify-center p-4 text-white gap-4 text-xl hover:scale-110 transition-all ease-out">
                LIHAT LAINNYA 
              </button>
         </div>
        </div>
        <motion.div
          animate={animationLR}
          className="absolute left-[170px] top-[-45px] md:top-[-45px] md:left-[700px] lg:top-[-45px] lg:left-[700px] z-[99]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="57.753"
            height="68.729"
            viewBox="0 0 57.753 68.729"
          >
            <motion.path
              animate={pathAnimation}
              id="Path_28"
              data-name="Path 28"
              d="M427.716,839.841s-7.06,37.653,34.123,40.006c17.05.974,15.906-8.584,11.461-11.49-8.277-4.022-25.408,2.535-11.461,22.757A34.61,34.61,0,0,0,480.426,903.8"
              transform="translate(-425.11 -837.507)"
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-width="4"
            />
          </svg>
        </motion.div>
        <motion.div
          animate={animationBT}
          className="absolute left-[220px] top-[25px] md:top-[25px] md:left-[750px] lg:top-[25px] lg:left-[750px] z-[99]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22.243"
            height="26.833"
            viewBox="0 0 22.243 26.833"
          >
            <path
              id="Path_29"
              data-name="Path 29"
              d="M554.2,163.5s14.357,1.683,14.357-10.24c-.477,11.923,8.476,10.24,8.476,10.24s-8.562-.581-7.608,8C567.99,164.351,554.2,163.5,554.2,163.5Z"
              transform="translate(173.505 -552.196) rotate(90)"
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="4"
            />
          </svg>
        </motion.div>
        <motion.div
          animate={animationRL}
          className="absolute left-[170px] top-[-55px] md:top-[-55px] md:left-[700px] lg:top-[-55px] lg:left-[700px] z-[99]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="6"
            height="6"
            viewBox="0 0 6 6"
          >
            <circle id="Ellipse_6" data-name="Ellipse 6" cx="3" cy="3" r="3" />
          </svg>
        </motion.div>
        
    
    </div>
    </div>
  )
}

export default Comparison