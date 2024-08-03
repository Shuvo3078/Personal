import React from 'react';
import { MdKeyboardDoubleArrowUp, MdOutlineMail } from 'react-icons/md';
import Container from '../layer/Container';
import { LiaFacebookF } from 'react-icons/lia';
import { Link } from 'react-router-dom';
import { RiLinkedinFill } from 'react-icons/ri';
import { LuInstagram } from 'react-icons/lu';

const Footer = () => {
  return (
    <div className='py-[69px] bg-black'>
        <Container className=' px-10 lg:px-0'>
        <div className='flex flex-col gap-y-2 items-center justify-center'>
        <MdKeyboardDoubleArrowUp className='text-[#FFFFFF]' />
        <p className='text-base text-[#FFFFFF] font-bold font-Mont'>BACK TO TOP</p>
        </div>
        
        <div className="icon flex items-start justify-center gap-x-7 py-[44px]">
            <div className='w-[30px] h-[30px] border-[3px] border-[#d8d8d8] flex items-center justify-center'> 
                <Link to='https://www.facebook.com/profile.php?id=100039197022530&mibextid=ZbWKwL' target='blank'><LiaFacebookF className='text-[#d8d8d8]' /> </Link>
            </div>
            <div className='w-[30px] h-[30px] border-[3px] border-[#d8d8d8] flex items-center justify-center'> 
                <Link to='http://www.linkedin.com/in/md-shuvo-615182297' target='blank'><RiLinkedinFill className='text-[#d8d8d8]' /> </Link>
            </div>
            <div className='w-[30px] h-[30px] flex items-center justify-center border-[3px] border-[#d8d8d8]'> 
                <Link to='https://www.instagram.com/ahshuvo430/' target='blank'><LuInstagram className='text-[#d8d8d8]' /> </Link>
            </div>
            <div className='w-[30px] h-[30px] flex items-center justify-center border-[3px] border-[#d8d8d8]'> 
                <Link to='mailto:shuvo.nrcc@gmail.com' target='blank'><MdOutlineMail className='text-[#d8d8d8]' /> </Link>
            </div>
        </div>
        <div className='flex items-center justify-center'>
            <p className='text-[#FFFFFF] text-[18px] font-Mont font-bold'>@2024 A.H.Shuvo All Rights Reserved.</p>
        </div>
        </Container>
    </div>
  );
}

export default Footer;
