import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import Harga from '../components/Harga';

import Nature from '../variables/Nature';
import Planets from '../variables/Planets';
import Space from '../variables/Space';
const Section = () => {

  const [text,setText] = useState('first-con')

  const [isModalActive,setIsModalActive] = useState(false)

  const isActive = () => {
    setIsModalActive(!isModalActive)
  }


  return (
  <div className='section container mx-auto px-11 text-center mt-28'>

    <div>
      <div className='change-box gap-4'>
            <button className='state-change-btn' onClick={() => setText('first-con')}>Planets</button>
            <button className='state-change-btn' onClick={() => setText('second-con')}>Nature</button>
            <button className='state-change-btn' onClick={() => setText('third-con')}>Space</button>
      </div>

      <div>
          {text === 'first-con' && <Planets/>}
          {text === 'second-con'&& <Nature/> }
          {text === 'third-con' && <Space/>}

        

       

      </div>
      <div className='lg:hidden'><Harga/></div>
      </div>

  </div>
  );
};

export default Section;
