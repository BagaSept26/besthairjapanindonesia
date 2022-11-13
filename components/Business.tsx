import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const Business = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const animationX = useAnimation();
  const animationY = useAnimation();
  const animationZ = useAnimation();
  const pathAnimation = useAnimation();

  useEffect(() => {
    if (inView) {
      animationX.start({
        x: 0,
        opacity: 1,
        transition: { type: "fade", duration: 1 },
      });
      animationY.start({
        x: 0,
        opacity: 1,
        transition: { type: "fade", duration: 1 },
      });
      animationZ.start({
        y: 0,
        opacity: 1,
        transition: { type: "ease-out", duration: 1 },
      });
      pathAnimation.start({
        opacity: 1,
        pathLength: 1,
        transition: { ease: "easeInOut", duration: 2 },
      });
    }
    if (!inView) {
      animationX.start({ opacity: 0, x: "-30px" });
      animationY.start({ opacity: 0, x: "30px" });
      animationZ.start({ opacity: 0, y: "30px" });
      pathAnimation.start({ opacity: 0, pathLength: 0 });
    }
  }, [inView]);

  return (
    <div ref={ref} className='header mx-auto w-full h-screen bg-white'>
      <div className="w-full h-full rounded-tl-[100px] relative bg-[#F9F9FC]">
        <div className="pt-10">
          <div className="flex flex-col items-center justify-center gap-4">
            <div
              data-scroll
              data-scroll-speed="-6"
              data-scroll-direction="horizontal"
              className="pb-2 text-3xl left-[5%]"
            >
              <h2>BEST HAIR JAPAN IN INDONESIA</h2>
            </div>
            <p className="py-0 md:text-center md:ml-20">
            kami memperkenalkan transplantasi rambut oleh dokter terkenal di luar negeri yang memiliki perawatan berlimpah kepada orang-orang yang menderita "rambut menipis" dan "rambut rontok"
            </p>
          </div>
          <div className=" sm:mx-auto flex justify-between items-center gap-2 md:gap-4 pt-6">
            <motion.div
              animate={animationX}
              className="bg-white w-[130px] md:w-[300px] h-[350px] rounded-xl shadow-xl shadow-gray-300 flex flex-col justify-center items-center p-4"
            >
              <div>
              <img src="assets/sv3.png" alt="besthair" 
              className="w-[80px] h-[80px] "/>
              </div>
              <div>
                <h1 className="pt-6 pb-2 text-sm text-center md:text-xl">
                  TRANPLANTASI RAMBUT
                </h1>
              </div>
              <div>
                <p className="pb-4 text-sm text-center">
                  
                </p>
              </div>
              <div>
                <button className="pb-2 text-blue-600 underline">
                  Selengkapnya
                </button>
              </div>
            </motion.div>
            <motion.div
              animate={animationZ}
              className="bg-white w-[130px] md:w-[300px] h-[350px] rounded-xl shadow-xl shadow-gray-300 flex flex-col justify-center items-center p-4"
            >
              <div>
              <img src="assets/sv4.png" alt="besthair" className="w-[80px] h-[90px]"/>
              </div>
              <div>
                <h1 className="pt-6 pb-2 text-sm text-center md:text-xl">
                  TRANSPLANTASI ALIS
                </h1>
              </div>
              <div>
                <p className="pb-4 text-sm text-center md:text-xl">
                  
                </p>
              </div>
              <div>
                <button className="pb-4 text-blue-600 underline">
                  Selengkapnya
                </button>
              </div>
            </motion.div>
            <motion.div
              animate={animationY}
              className="bg-white w-[130px] md:w-[300px] h-[350px] rounded-xl shadow-xl shadow-gray-300 flex flex-col justify-center items-center p-4"
            >
              <div>
              <img src="assets/sv2.png" alt="besthair" className="w-[80px] h-[90px]"/>
              </div>
              <div>
                <h1 className="pt-6 pb-2 text-sm text-center md:text-xl">
                  TRANPLANTASI JANGGUT
                </h1>
              </div>
              <div>
                <p className="pb-4 text-sm text-center">
                  
                </p>
              </div>
              <div>
                <button className="pb-2 text-blue-600 underline">
                  Selengkapnya
                </button>
              </div>
            </motion.div>
          </div>
        </div>
        <motion.div
          animate={animationX}
          className="absolute top-[-40px] left-[180px] md:top[-40px] md:left-[700px] lg:top-[-40px] lg:left-[700px]"
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
          animate={animationZ}
          className="absolute top-[20px] left-[235px] md:top-[20px] md:left-[755px] lg:top-[20px] lg:left-[755px]"
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
          animate={animationY}
          className="absolute top-[-50px] left-[180px] md:top-[-50px] md:left-[700px] lg:top-[-50px] lg:left-[700px]"
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
        <div className="w-[90%] mx-auto h-[200px] bg-[#0099ff] rounded-xl text-white mt-5 relative justify-center">
          <div className="absolute z-30 flex flex-col items-center justify-center px-5 text-center md:pl-[300px] pt-[20px] md:pt-[50px]">
            <div className="pb-2 text-2xl justify-center items-center">
              <h1>BEST HAIR JAPAN IN INDONESIA</h1>
            </div>
            <div className="pb-2">
              <p>
                
                telah mendirikan basis di Asia dan telah menyediakan transplantasi rambut diri yang mutakhir.
                
              </p>
              
            </div>
            <div className="pb-5 ">
              <button className="flex items-center bg-[#008000] rounded-xl justify-center p-4 text-white gap-4 text-xl hover:scale-110 transition-all ease-out">
              <FaWhatsapp size={30} />konsultasi</button>
            </div>
          </div>
          <div className="absolute top-10 right-[500px] z-30 opacity-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="208"
              height="208"
              viewBox="0 0 208 208"
            ></svg>
          </div>
          <div className="absolute top-20 right-[40px] z-30 opacity-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="208"
              height="208"
              viewBox="0 0 208 208"
            >
              <circle
                id="Ellipse_10"
                data-name="Ellipse 10"
                cx="104"
                cy="104"
                r="104"
                fill="#fff"
                opacity="0.1"
              />
            </svg>
          </div>
          <div className="absolute top-[10px] left-[10px] z-30 opacity-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="69"
              height="69"
              viewBox="0 0 69 69"
            >
              <circle
                id="Ellipse_11"
                data-name="Ellipse 11"
                cx="34.5"
                cy="34.5"
                r="34.5"
                fill="#fff"
                opacity="0.1"
              />
            </svg>
          </div>
          
          

         
        </div>
      </div>
    </div>
  );
};

export default Business;
