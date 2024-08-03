import React from 'react';
import HeadingBorder from '../layer/HeadingBorder';
import Container from '../layer/Container';
import InputField from '../layer/InputField';

const Contact = () => {
  return (
    <div className='pt-[72px] lg:pt-[158px] px-10 lg:px-0 bg-[#d8d8d8]'>
     <Container>
     <HeadingBorder text='CONTACT'/>
     <div className='flex items-center justify-center'>
     <p className='text-[#000000] text-base font-Open font-light max-w-[650px] text-center mt-[51px] mb-[30px]'>My name is A. H. Shuvo. I am a Front-End-Developer. I learned Front-End-Development from Creative IT Institute, Bangaldesh </p>
     </div>
     <div className='flex items-center gap-x-2 justify-center mb-[65px] lg:mb-[129px]'>
            <div className='w-[44px] h-[4px] bg-black'></div>
        <div><p className='text-[40px]'>\\\///</p></div>
        <div className='w-[44px] h-[4px] bg-black'></div> 
        </div>

          <div className='flex flex-col items-center justify-center gap-y-[50px]'>
            <InputField type='text' text='ENTER YOUR NAME*'/>
            <InputField type='email' text='ENTER YOUR EMAIL*'/>
            <InputField type='number' text='PHONE NUMBER'/>
            <textarea className='bg-transparent w-[300px] md:w-[450px] lg:w-[609px] h-[184px] p-5 outline-none border-b-[5px] border-[#000000] border-l-[5px] placeholder:text-[#8B8B8B] placeholder:text-sm lg:placeholder:text-base placeholder:font-Mont placeholder:font-bold text-black' type='text' placeholder='YOUR MESSAGE*'/>

            <div className='flex items-center gap-x-8 justify-center my-[60px] cursor-pointer'>
        <div className='w-[2px] h-[32px] bg-black'></div>
        <p className='text-[#000000] text-[13px] lg:text-base font-Mont font-semibold'>SUBMIT</p>
        <div className='w-[2px] h-[32px] bg-black'></div>
        </div>
            
          </div>
     </Container>
    </div>
  );
}

export default Contact;
