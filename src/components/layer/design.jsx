import React from 'react';
import Container from './Container';
import code01 from '../../../public/code01.png'
import code02 from '../../../public/code02.png'
import code03 from '../../../public/code03.png'
import code04 from '../../../public/code04.png'
import code05 from '../../../public/code05.png'
import code06 from '../../../public/code06.png'

const design = () => {
  return (
    <Container className=' flex items-center justify-center flex-wrap'>
        <div className='w-[300px] lg:w-[640px] h-[170px] lg:h-[400px]'>
        <img className='w-full h-full' src={code01} alt="public/code01.png" />
        </div>
        <div className='w-[300px] lg:w-[640px] h-[170px] lg:h-[400px]'>
        <img className='w-full h-full' src={code02} alt="public/code02.png" />
        </div>
        <div className='w-[300px] lg:w-[640px] h-[170px] lg:h-[400px]'>
        <img className='w-full h-full' src={code03} alt="public/code03.png" />
        </div>
        <div className='w-[300px] lg:w-[640px] h-[170px] lg:h-[400px]'>
        <img className='w-full h-full' src={code04} alt="public/code04.png" />
        </div>
        <div className='w-[300px] lg:w-[640px] h-[170px] lg:h-[400px]'>
        <img className='w-full h-full' src={code05} alt="public/code05.png" />
        </div>
        <div className='w-[300px] lg:w-[640px] h-[170px] lg:h-[400px]'>
        <img className='w-full h-full' src={code06} alt="public/code06.png" />
        </div>
    </Container>
  );
}

export default design;
