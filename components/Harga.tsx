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
    <div style={{ perspective: 2000 }} className='container mx-auto px-11 text-center mt-28'>
      {/* card */}
      <motion.div
        style={{ x, y, rotateX, rotateY, z: 100 }}
        drag
        dragElastic={0.18}
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        whileTap={{ cursor: 'grabbing' }}
        className='container mx-auto text-center mt-28 bg-[#faebd7] rounded-[30px] border-[4px] border-white px-[40px] py-[24px] cursor-grab relative '
      >
        {/* card logo */}
        <div className='mb-6'>
          <img src="" alt='' />
        </div>
        {/* card title */}
        <h1 className='text-2xl mb-6 font-extrabold'>Di BEST HAIR JAPAN IN INDONESIA, kami memperkenalkan transplantasi rambut oleh dokter terkenal di luar negeri yang memiliki perawatan berlimpah kepada orang-orang yang menderita "rambut menipis" dan "rambut rontok" di berbagai negara di seluruh dunia,
dan mendukung "hari penuh percaya diri".</h1>
        {/* card subtitle */}
        
        {/* btn & price wrapper */}
        
        
        
        {/* card image */}
        <motion.div
          style={{ x, y, rotateX, rotateY, z: 100000 }}
          className='absolute top-75 w-[150px] -left-50 -right-40  z-15'
        >
          <img src="assets/logo1.png" alt='' draggable='false' />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Harga