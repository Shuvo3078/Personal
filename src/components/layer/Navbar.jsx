import React, { useEffect, useState } from 'react';
import Container from './Container';
import { Link } from 'react-router-dom';
import logo from '../../../public/logo.png'
import { FaBars } from 'react-icons/fa';



const Navbar = () => {
    let [show, setShow] = useState(false)

useEffect (()=>{
 function size(){
    if (window.innerWidth< 1024){
        setShow(false)
    }else{
        setShow(true)
    }
 }
 size()

 window.addEventListener("resize", size)
},[])

let bar =()=>{
    setShow(!show)
}
  return (
    <Container className='relative'>
       <div className='flex items-center bg-black lg:bg-transparent justify-between pt-5 mb-1 lg:mb-0 lg:pt-[40px] absolute w-full z-50'>
       <div className='pl-10 lg:pl-0'>
       <div  className="logo h-14 w-14 ">
            <Link to='/'>
            <img src={logo} alt="public/logo.png" />
            </Link>
        </div>
       </div>
        <div className={`menu flex flex-col lg:flex-row items-center justify-center lg:gap-x-[33px]  lg:static bg-[#26211a9c] lg:bg-transparent absolute top-full w-full lg:w-auto ${show?'opacity-100 visible':'opacity-0 invisible'} transition-all duration-300`}>
            <ul className='flex flex-col lg:flex-row items-center justify-center gap-x-2'>
                <li className='w-[147px] h-12 flex items-center justify-center'>
                    <Link className='text-xs lg:text-base font-Mont font-semibold lg:font-bold text-[#ffffff] lg:text-[#000000]' to='/'>Home</Link>
                </li>
                <li className='w-[147px] h-12 flex items-center justify-center'>
                    <Link className='text-xs lg:text-base font-Mont font-semibold lg:font-bold text-[#ffffff] lg:text-[#000000]' to='/aboutMe'>About me</Link>
                </li>
                <li className='w-[147px] h-12 flex items-center justify-center'>
                    <Link className='text-xs lg:text-base font-Mont font-semibold lg:font-bold text-[#ffffff] lg:text-[#000000]' to='/skills'>Skills</Link>
                </li>
                <li className='w-[147px] h-12 flex items-center justify-center'>
                    <Link className='text-xs lg:text-base font-Mont font-semibold lg:font-bold text-[#ffffff] lg:text-[#000000]' to='/portfolio'>Portfolio</Link>
                </li>
            </ul>
            <button className='w-full lg:w-[147px] h-12 bg-[#ffffff] lg:rounded-full text-xs lg:text-base font-Mont font-semibold lg:font-bold hover:bg-black hover:text-[#ffffff]'>
            <Link to="/contact">CONTACT ME</Link>
            </button>

            
        </div>
        <FaBars onClick={bar} className='lg:hidden text-white text-[30px] mr-10'/>
       </div>
    </Container>
  );
}

export default Navbar;
