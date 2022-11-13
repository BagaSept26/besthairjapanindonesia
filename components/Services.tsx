import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Services = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const animationLR = useAnimation();
  const animationBT = useAnimation();
  const animationRL = useAnimation();
  const animationTB = useAnimation();
  const pathAnimation = useAnimation();

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
    <div
      ref={ref}
      className='header w-full h-auto bg-white rounded-tl-[100px] rounded-br-[100px] pt-10 pb-10 mt-100'
    >
      <div className="relative">
        <div className="pt-12">
          <div className="flex flex-col items-center justify-center text-center">
            <div>
              <div
                data-scroll
                data-scroll-speed="-6"
                data-scroll-direction="horizontal"
                className="pb-2 text-3xl left-[5%]"
              >
                <h2>FITUR</h2>
              </div>
              <p className="py-2">
                Dengan melakukan PERJALANAN MEDIS bersama kami. fitur yang kami berikan.
              </p>
            </div>
            <div className="grid w-[80%] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-2 gap-4 pt-6 justify-center items-center">
              <motion.div
                animate={animationLR}
                className="sm:w-[300px] sm:h-[300px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[400px] bg-[#F9F9FC] border-2 border-gray-300 rounded-xl shadow-xl flex flex-col justify-center items-center text-center p-4"
              >
                <div className="pb-4">
                <img 
                src="assets/feature_01.png"
                 alt="besthair" 
                 className="md:h-[50px] w-[80px] h-[70px]"/>
                </div>
                <h1 className="pb-4 text-3xl">BEBAS LAYANAN KONSULTASI</h1>
                <p className="pb-6">
                  di BEST HAIR JAPAN in INDONESIA kami memberikan layanan bebas konsultasi
                </p>
                
              </motion.div>
              <motion.div
                animate={animationTB}
                className="sm:w-[300px] sm:h-[300px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[400px] bg-[#F9F9FC] border-2 border-gray-300 rounded-xl shadow-xl flex flex-col justify-center items-center text-center p-4"
              >
                <div className="pb-4">
                <img src="assets/feature_02.png" alt="besthair" className="w-[80px] h-[70px]"/>
                </div>
                <h1 className="pb-4 text-3xl">TEKNOLOGI MEDIS YANG CANGGIH</h1>
                <p className="pb-6">
                Kami menggunakan metode transplantasi rambut FUE mutakhir, yang tidak menggunakan pisau bedah.
                </p>
                
              </motion.div>
              <motion.div
                animate={animationRL}
                className="sm:w-[300px] sm:h-[300px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[400px] bg-[#F9F9FC] border-2 border-gray-300 rounded-xl shadow-xl flex flex-col justify-center items-center text-center p-4"
              >
                <div className="pb-4">
                <img 
                src="assets/feature_03.png" 
                alt="besthair" 
                className="md:h-[60px] md:w-[50] w-[80px] h-[70px]"/>
                </div>
                <h1 className="pb-4 text-3xl">HARGA TERENDAH</h1>
                <p className="pb-6">
                Kami membuat kontrak langsung dengan klinik lokal dan mewujudkan harga terendah di Indonesia. Tentu saja, tidak peduli negara mana yang Anda pilih, semua klinik bebas untuk menanam.
                </p>
                
              </motion.div>
              <motion.div
                animate={animationLR}
                className="sm:w-[300px] sm:h-[300px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[400px] bg-[#F9F9FC] border-2 border-gray-300 rounded-xl shadow-xl flex flex-col justify-center items-center text-center p-4"
              >
                <div className="pb-4">
                <img src="assets/feature_04.png" alt="besthair" className="w-[80px] h-[70px]"/>
                </div>
                <h1 className="pb-4 text-3xl">KEPUASAN PELANGGAN NO.1</h1>
                <p className="pb-6">
                Kami mempertahankan tingkat pengerjaan yang andal sebesar 99%, dan banyak orang sangat senang.
                </p>
                
              </motion.div>
              <motion.div
                animate={animationBT}
                className="sm:w-[300px] sm:h-[300px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[400px] bg-[#F9F9FC] border-2 border-gray-300 rounded-xl shadow-xl flex flex-col justify-center items-center text-center p-4"
              >
                <div className="pb-4">
                <img src="assets/feature_05.png" alt="besthair" className="w-[80px] h-[70px]"/>
                </div>
                <h1 className="pb-4 text-3xl">3 HARI Pengerjaan</h1>
                <p className="pb-6">
                Bahkan mereka yang tidak bisa berlibur panjang dapat menikmati wisata medis hanya dalam tiga hari.<br></br> 
                *Tanggal dan waktu mungkin berbeda tergantung pada tujuan.
                </p>
                
              </motion.div>
              <motion.div
                animate={animationRL}
                className="sm:w-[300px] sm:h-[300px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[400px] bg-[#F9F9FC] border-2 border-gray-300 rounded-xl shadow-xl flex flex-col justify-center items-center text-center p-4"
              >
                <div className="pb-4">
                <img 
                src="assets/feature_06.png" 
                alt="besthair" 
                className="md:h-[60px] md:w-[50] w-[80px] h-[70px]"/>
                </div>
                <h1 className="pb-4 text-3xl">JAMINAN PERAWATAN ULANG</h1>
                <p className="pb-6">
                Jika rambut tidak tumbuh setelah satu tahun dari perawatan, kami memiliki jaminan perawatan ulang.
                </p>
                
              </motion.div>
              <motion.div
                animate={animationRL}
                className="sm:w-[300px] sm:h-[300px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[400px] bg-[#F9F9FC] border-2 border-gray-300 rounded-xl shadow-xl flex flex-col justify-center items-center text-center p-4"
              >
                <div className="pb-4">
                <img src="assets/feature_07.png" alt="besthair" className="w-[80px] h-[70px]"/>
                </div>
                <h1 className="pb-4 text-3xl">DUKUNGAN PASCA OPERASI</h1>
                <p className="pb-6">
                Setelah kembali ke Jepang, kami juga memberikan konsultasi dan saran tentang perawatan dan kemajuan kulit kepala.
                </p>
                
              </motion.div>
              <motion.div
                animate={animationRL}
                className="sm:w-[300px] sm:h-[300px] md:w-[300px] md:h-[400px] lg:w-[350px] lg:h-[400px] bg-[#F9F9FC] border-2 border-gray-300 rounded-xl shadow-xl flex flex-col justify-center items-center text-center p-4"
              >
                <div className="pb-4">
                <img 
                src="assets/feature_08.png" 
                alt="besthair" 
                className="md:h-[60px] md:w-[50] w-[80px] h-[70px]"/>
                </div>
                <h1 className="pb-4 text-3xl">SISTEM PENDAMPING</h1>
                <p className="pb-6">
                Untuk pelanggan yang pertama kali bepergian ke luar negeri, kami akan menemani mereka dari keberangkatan hingga kembali ke Indonesia<br></br>
                 (tiket pesawat terpisah untuk pendamping).
                </p>
                
              </motion.div>
            </div>
          </div>
        </div>
        <motion.div
          animate={animationLR}
          className="top-20 absolute left-[170px] top-[-45px] sm:top-[-45px] sm:left-[700px] md:top-[-45px] md:left-[700px] lg:top-[-45px] lg:left-[700px] z-[99]"
        >
          
        </motion.div>
        <motion.div
          animate={animationBT}
          className="absolute left-[220px] top-[25px] md:top-[25px] md:left-[750px] lg:top-[25px] lg:left-[750px] z-[99]"
        >
          <svg
            
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
  );
};

export default Services;
