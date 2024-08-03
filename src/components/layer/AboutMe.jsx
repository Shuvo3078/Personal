import React from 'react';
import Container from './Container';
import design from '../../../public/design.png'
import development from '../../../public/development.png'
import maintain from '../../../public/mainten.png'
import HeadingBorder from './HeadingBorder';

const AboutMe = () => {
  return (
    <div  className='lg:pt-[142px]  bg-[#d8d8d8] px-10 lg:px-0'>
        <Container>
        <div className='flex flex-col items-center justify-center'>
        <div className='mt-[75px] lg:mt-0'><HeadingBorder text='ABOUT ME'/></div>
        <p className='text-base text-[#050505] font-Open max-w-[763px] flex items-center justify-center text-justify lg:text-left mt-[38px] lg:mt-[71px]'>I am A. H. Shuvo. I am from Bangladesh. I am a Front-End-Developer. I learned Front-End-Development from Creative IT Institute. I am capable of creating stylish, modern, and fast websites. I have worked on many projects.</p>

        <p className='text-base text-[#050505] font-Open max-w-[763px] flex items-center justify-center text-justify lg:text-left mt-5 lg:mt-5'>Membership in the science club developed my design skills, which quickly turned into a new hobby. I am fluent in English (spoken and written). My passion is travelling.</p>
        </div>

        <div className='flex items-center gap-x-8 justify-center mt-[30px] lg:mt-[67px]'>
        <div className='w-[2px] h-[32px] bg-black'></div>
        <p className='text-[#000000] text-[13px] lg:text-base font-Mont font-semibold'>EXPLORE</p>
        <div className='w-[2px] h-[32px] bg-black'></div>
        </div>
       
        <div className='flex items-center gap-x-2 justify-center mt-[30px] lg:mt-[66px]'>
            <div className='w-[44px] h-[4px] bg-black'></div>
        <div><p className='text-[40px]'>\\\///</p></div>
        <div className='w-[44px] h-[4px] bg-black'></div> 
        </div>

        <div className='flex items-center justify-center'>
        <div className="main max-w-[1100px] mt-[61px] lg:mt-[108px] flex items-center justify-center flex-wrap gap-x-[67px] gap-y-[23px] lg:gap-y-[40px]">
            <div className="design">
            <div className="heading flex items-center">
            <img src={design} alt="public/design.png" />
            <h2 className='text-[#000000] text-base lg:text-[22px] font-Mont font-bold tracking-[18.54%] '>DESIGN</h2>
            </div>
            <p className='text-[#000000] text-xs lg:text-sm font-light font-Open lg:mt-2 text-justify max-w-[431px] pl-[60px]'>I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.</p>
            </div>

            <div className="development">
            <div className="heading flex items-center">
            <img src={development} alt="/public/development.png" />
            <h2 className='text-[#000000] text-base lg:text-[22px] font-Mont font-bold tracking-[18.54%] '>DEVELOPMENT</h2>
            </div>
            <p className='text-[#000000] text-xs lg:text-sm font-light font-Open lg:mt-2 text-justify max-w-[431px] pl-[73px]'>Based on a project created by me or another one, sent by you, I can program the website to be fully functional and responsive.
            </p>
            </div>

            <div className="maintenance">
            <div className="heading flex items-center">
            <img src={maintain} alt="/public/mainten.png" />
            <h2 className='text-[#000000] text-base lg:text-[22px] font-Mont font-bold tracking-[18.54%] '>MAINTENANCE</h2>
            </div>
            <p className='text-[#000000] text-xs lg:text-sm font-light font-Open lg:mt-2 text-justify max-w-[431px] pl-[80px]'>In case of any problems or the need for changes, I can introduce new functionalities and solutions.
            </p>
            </div>
        </div>
        </div>

        <div className='flex items-center gap-x-2 justify-center py-[30px] lg:py-[120px]'>
            <div className='w-[44px] h-[4px] bg-black'></div>
        <div><p className='text-[40px]'>\\\///</p></div>
        <div className='w-[44px] h-[4px] bg-black'></div> 
        </div>
    </Container>
    </div>
  );
}

export default AboutMe;
