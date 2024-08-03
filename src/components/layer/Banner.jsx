import React from 'react';
import  '../layer/Banner.css';
import Container from './Container';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className='background  h-[600px] lg:h-[1022px] lg:pt-[351px] lg:pb-[240px] relative'>
      <div className='absolute left-10 bottom-10 lg:static'>
      <Container className='flex lg:flex-col items-end justify-between lg:items-start'>
      <div className='w-[243px] lg:w-full'>
      <h2 className='lg:text-[#000000] text-[#ffffff] text-xl lg:text-[40px] font-Rale font-bold'>Hi, I am</h2>
      <h3 className='lg:text-[#000000] text-[#ffffff] text-[35px] lg:text-[80px] font-Rale font-bold mt-0 lg:mt-[54px] mb-1 lg:mb-0'>Azmal Hossen Shuvo</h3>
      <p className='lg:text-[#909090] text-[#ffffff] text-xs lg:text-[25px] font-Rale font-extrabold'>Front-end Developer</p>
      </div>

      <div className='flex flex-col lg:flex-row items-center gap-x-[31px] gap-y-7 mt-[126px]'>
        <div className='h-[56px] w-[61px] lg:bg-[#D7D7D7] bg-transparent flex items-center justify-center text-[40px] shadow-slate-800'><Link to='mailto:shuvo.nrcc@gmail.com'><MdOutlineAlternateEmail className='text-[#ffffff] lg:text-[#000000]' /> </Link></div>
        <div className='h-[56px] w-[61px] lg:bg-[#D7D7D7] bg-transparent flex items-center justify-center text-[40px] shadow-slate-800'> <Link to='https://github.com/Shuvo3078'><FaGithub className='text-[#ffffff] lg:text-[#000000]' /> </Link></div>
        <div className='h-[56px] w-[61px] lg:bg-[#D7D7D7] bg-transparent flex items-center justify-center text-[40px] '><Link to='http://www.linkedin.com/in/md-shuvo-615182297'><BsLinkedin className='rounded-full text-[#ffffff]  lg:text-[#000000]' /> </Link></div>
      </div>

      </Container>
      </div>
    </div>
  );
}

export default Banner;
