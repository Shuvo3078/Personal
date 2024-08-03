import React from 'react';

const HeadingBorder = ({text}) => {
  return (
    <div className='flex items-center justify-center'>
      <h2 className='text-[#000000] text-[30px] text-sm font-Mont font-bold tracking-[35.54%] border-8 border-[#000000] py-5 lg:py-[30px] px-10 lg:px-[80px] inline-block '>{text}</h2>
    </div>
  );
}

export default HeadingBorder;
