import React from 'react';
import Container from './Container';
import it from '../../../public/IT.png'

const BannerFooter = () => {
  return (
    <div className='bg-[#272727] '>
      <Container className='pt-5 lg:pt-[54px] pb-10 lg:pb-[69px] relative px-10 lg:px-0'>
        <h2 className='text-[25px] lg:text-[30px] text-[#FFFFFF] font-Mont text-center lg:text-left font-bold'>About Front-End-Developer</h2>
        <p  className=' max-w-[1148px] text-[#ffffff] text-base font-Open text-justify mt-5 z-50 '>A front-end developer is a specialist who creates and implements the visual and interactive elements of a website or web application. Using languages like HTML, CSS, and JavaScript, they ensure that users have a seamless, engaging experience. Their role involves designing responsive layouts, optimizing performance, and integrating APIs. They work closely with designers to translate visual concepts into functional code and with back-end developers to ensure smooth data interactions. Proficiency in frameworks like React, Angular, or Vue.js is often required. A successful front-end developer stays updated on the latest web technologies and design trends to deliver cutting-edge, user-friendly solutions.</p>
            
            
        <img className='absolute top-0 right-0 translate-x-[60%] w-[25rem] hidden lg:flex' src={it} alt="public/IT.png" />
      </Container>
    </div>
  );
}

export default BannerFooter;
