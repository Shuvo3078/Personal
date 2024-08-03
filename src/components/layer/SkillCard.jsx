import React from 'react';

const SkillCard = ({src, alt, text}) => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='w-[84px] h-[100px]'>
        <img className='w-full h-full' src={src} alt={alt} />
        </div>
        <p className='text-[#000000] text-[24px] font-Mont tracking-[13.54%] mt-4'>{text}</p>
    </div>
  );
}

export default SkillCard;
