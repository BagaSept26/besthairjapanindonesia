import { Close } from '@material-ui/icons';
import React from 'react';

import Link from 'next/link';

const Menuitems =({showMenu,active}: any) => {
  return (
                <ul className={active ? 'flex-col flex items-center fixed inset-0 left-1/4 uppercase bg-black/40 backdrop-blur-lg gap-8 justify-center p-8 md:hidden' : 'hidden'}>
                    <Close onClick={showMenu} className='cursor-pointer'/>
                    <li><Link href='/'>Home</Link></li>
                    <li><Link href='/'>Testimonials</Link></li>
                    <li><Link href='/'>Information</Link></li>
                    <li><Link href='/'>Jobs</Link></li>
                    <li><Link href='/'>About</Link></li>
                    <li><Link href='/'>Contact</Link></li>
                </ul>
  );
};

export default Menuitems;
