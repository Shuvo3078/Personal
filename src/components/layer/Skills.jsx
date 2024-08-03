import React from 'react';
import Container from './Container';
import HeadingBorder from './HeadingBorder';
import SkillCard from './SkillCard';
import html from '../../../public/html.svg'
import css from '../../../public/css.svg'
import js from '../../../public/js.svg'
import react from '../../../public/react.svg'
import bootstrap from '../../../public/bootstrap.svg'
import git from '../../../public/git.svg'
import figma from '../../../public/figma.svg'
import tailwind from '../../../public/tailwind.avif'
import nodejs from '../../../public/nodeJS.png'
import nextjs from '../../../public/nextJS.png'
import mongodb from '../../../public/mongoDB.png'
import typescript from '../../../public/typescript.png'

const Skills = () => {
  return (
    <div className='bg-[#d8d8d8] px-10 lg:px-0 pt-[100px]'>
    <Container className=''>
        <div className='flex items-center justify-center '>
        <HeadingBorder text='SKILLS'/>
        </div>

        <div className='flex items-center justify-center'>
        <div className="main max-w-[1100px] ">
            <div className='flex items-center justify-center lg:justify-start'>
            <h2 className='text-[30px] text-[#000000] font-bold font-Mont tracking-[18.54%] mt-[47px] lg:mt-[79px]'>
            USING NOW:
            </h2>
            </div>
            <div className='flex flex-wrap items-center justify-center lg:justify-start  gap-x-[150px] gap-y-[50px] lg:gap-y-[65px] mt-[47px] lg:mt-[75px]'>
                <SkillCard src={html} alt='public/html.svg' text='HTML5'/>
                <SkillCard src={css} alt='public/css.svg' text='CSS3'/>
                <SkillCard src={js} alt='public/js.svg' text='JAVASCRIPT'/>
                <SkillCard src={react} alt='public/react.svg' text='REACT'/>
                <SkillCard src={bootstrap} alt='public/bootstrap.svg' text='BOOTSTRAP'/>
                <SkillCard src={git} alt='public/git.svg' text='GIT'/>
                <SkillCard src={figma} alt='public/figma.svg' text='FIGMA'/>
                <SkillCard src={tailwind} alt='public/tailwind.avif' text='TAILWIND'/>
            </div>

            <div className='flex items-center justify-center lg:justify-start'>
        <h2 className='text-[30px] text-[#000000] font-bold font-Mont tracking-[18.54%] pt-[47px] lg:pt-[79px]'>LEARNING:</h2>
        </div>
        <div className='flex flex-wrap items-center justify-center lg:justify-start  gap-x-[150px] gap-y-[50px] lg:gap-y-[65px] mt-[47px] lg:mt-[75px] pb-[74px]'>
                <SkillCard src={nodejs} alt='public/nodeJS.png' text='NODEJS'/>
                <SkillCard src={nextjs} alt='public/nextJS.png' text='NEXTJS'/>
                <SkillCard src={mongodb} alt='public/mongoDB.png' text='MONGODB'/>
                <SkillCard src={typescript} alt='public/typescript.png' text='TYPESCRIPT'/>
            </div>
        </div>
        </div>
    </Container>
    </div>
  );
}

export default Skills;
