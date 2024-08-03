import React, { useRef,  } from 'react';
import portfoliobg from '../../../public/portfoliobg.png'
import HeadingBorder from './HeadingBorder';
import { Link } from 'react-router-dom';



import Slider from 'react-slick';
import Container from './Container';

import portfolio01 from '../../../public/portfolio01.png'
import portfolio02 from '../../../public/portfolio02.png'
import portfolio03 from '../../../public/portfolio03.png'
import portfolio04 from '../../../public/portfolio04.png'
import portfolio05 from '../../../public/portfolio05.png'
import portfolio06 from '../../../public/portfolio06.png'
import code01 from '../../../public/code01.png'
import code02 from '../../../public/code02.png'
import code03 from '../../../public/code03.png'
import code04 from '../../../public/code04.png'
import code05 from '../../../public/code05.png'
import code06 from '../../../public/code06.png'

const Portfolio = () => {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className='bg-[#d8d8d8]'>
      <div className="image h-[194px] lg:h-[321px] w-full relative pb-8">
        <img className='h-full w-full' src={portfoliobg} alt="public/portfoliobg.png" />
        <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <HeadingBorder text='PORTFOLIO'/>
        </div>
      </div>
      



    <Container className='relative'>
    <Slider className='pt-8'
        ref={slider => {
          sliderRef = slider;
        }}
        {...settings}
      >
        <div key={1}>
        <div className='flex items-center justify-center flex-wrap gap-5'>
     <div className='w-[300px] lg:w-[640px] h-[170px] lg:h-[400px]'>
        <img className='w-full h-full' src={portfolio01} alt="public/portfolio01.png" />
        </div>
        <div className='w-[300px] lg:w-[640px] h-[170px] lg:h-[400px]'>
        <img className='w-full h-full' src={portfolio02} alt="public/portfolio02.png" />
        </div>
        <div className='w-[300px] lg:w-[640px] h-[170px] lg:h-[400px]'>
        <img className='w-full h-full' src={portfolio03} alt="public/portfolio03.png" />
        </div>
        <div className='w-[300px] lg:w-[640px] h-[170px] lg:h-[400px]'>
        <img className='w-full h-full' src={portfolio04} alt="public/portfolio04.png" />
        </div>
        <div className='w-[300px] lg:w-[640px] h-[170px] lg:h-[400px]'>
        <img className='w-full h-full' src={portfolio05} alt="public/portfolio05.png" />
        </div>
        <div className='w-[300px] lg:w-[640px] h-[170px] lg:h-[400px]'>
        <img className='w-full h-full' src={portfolio06} alt="public/portfolio06.png" />
        </div>
     </div>
        </div>
        <div key={2}>
        <div className=' text-center'>
      <div className='flex items-center justify-center flex-wrap gap-5'>
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
     </div>
      </div>
        </div>
        
      </Slider>
      <div className='absolute top-0 left-[50%] translate-x-[-50%] flex items-center justify-center max-w-[400px] border-b border-[#7C7C7C]'>
        <button className="button text-[#7C7C7C] text-sm font-Mont font-semibold px-10 lg:px-[60px]" onClick={previous}>
        DESIGNED
        </button>
        <button className="button text-[#7C7C7C] text-sm font-Mont font-semibold px-10 lg:px-[60px]" onClick={next}>
        CODED
        </button>
      </div>
      <div className='py-4 bg-black'>
          <p className='text-[#ffffff] text-xl font-semibold font-Mont text-center'>And many more to come!</p>
        </div>
    </Container>
        
    </div>
  );
}

export default Portfolio;
