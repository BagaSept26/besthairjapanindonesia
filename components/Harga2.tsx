import React from 'react';
// logo

import { FaWhatsapp, FaInstagram, FaMailBulk, FaMapMarked, FaFacebook } from "react-icons/fa";
// import framer hooks
import { useMotionValue, useTransform, motion } from 'framer-motion';


const Harga = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [30, -30]);
    const rotateY = useTransform(x, [-100, 100], [-30, 30]);
  
    const colors = [
      { value: '#b6a179' },
      { value: '#272425' },
      { value: '#6389cb' },
      { value: '#f2c758' },
      { value: '#ffffff' },
    ];

  return (
    <div style={{ perspective: 2000 }} className='container mx-auto px-11 text-center mt-10'>
      {/* card */}
      <motion.div
        style={{ x, y, rotateX, rotateY, z: 100 }}
        drag
        dragElastic={0.18}
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        whileTap={{ cursor: 'grabbing' }}
        className='mx-auto px-11 text-center mt-28 bg-[#faebd7] rounded-[30px] border-[4px] border-white px-[40px] py-[24px] cursor-grab relative '
      >
        {/* card logo */}
        <div className='mb-6'>
          <img src="assets/logo1.png" alt='' />
        </div>
        {/* card title */}
        <h1 className='text-4xl mb-6 font-extrabold'>TRANSPLANTASI JANGGUT</h1>
        {/* card subtitle */}
        <p className='max-w-[300px] text-[#00000] mb-6 subpixel-antialiased'>
          *3 days-treatment <br />
          *HI / CHOI PENS <br />
          *8 jam pengerjaan <br />
          *100% tidak sakit <br />
          *bebas akomodasi kendaraan <br />
          *Akomodasi Penginapan <br />
        </p>
        {/* btn & price wrapper */}
        <div className='flex items-center gap-x-[40px] mb-12'>
        <button className="flex items-center bg-[#006400] rounded-xl justify-center p-4 text-white gap-1 font-medium py-[5px] px-[15px] hover:scale-110 transition-all ease-out">
                                    <FaWhatsapp size={30} />Hubungi Kami</button>
          <div className='text-[24px] font-bold text-[#00000]'>Rp.50.000.000</div>
        </div>
        
        
        {/* card image */}
        <motion.div
          style={{ x, y, rotateX, rotateY, z: 100000 }}
          className='absolute top-75 w-[150px] -left-50 -right-40 relative z-15'
        >
          <img src="assets/sv2.png" alt='' draggable='false' />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Harga