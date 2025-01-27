import React, { useRef, useState } from 'react';
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../../styles.css';

const MeetPartners = () => {


    const [swiperRef, setSwiperRef] = useState(null);
    const appendNumber = useRef(500);
    const prependNumber = useRef(1);
    // Create array with 500 slides
    const [slides, setSlides] = useState(
      Array.from({ length: 5 }).map((_, index) => `Slide ${index + 1}`)
    );
  
    const prepend = () => {
      setSlides([
        `Slide ${prependNumber.current - 2}`,
        `Slide ${prependNumber.current - 1}`,
        ...slides,
      ]);
      prependNumber.current = prependNumber.current - 2;
      swiperRef.slideTo(swiperRef.activeIndex + 2, 0);
    };
  
    const append = () => {
      setSlides([...slides, 'Slide ' + ++appendNumber.current]);
    };
  
    const slideTo = (index) => {
      swiperRef.slideTo(index - 1, 0);
    };

    return (
        <div>
            <h2 className='text-center font-extrabold text-4xl'>Meet Our Partners</h2>


                <>
                <Swiper
                    modules={[Virtual, Navigation, Pagination]}
                    onSwiper={setSwiperRef}
                    slidesPerView={3}
                    centeredSlides={true}
                    spaceBetween={30}
                    pagination={{
                    type: 'fraction',
                    }}
                    navigation={true}
                    virtual
                >
                    {slides.map((slideContent, index) => (
                    <SwiperSlide className='border-2 bg-gray-900' key={slideContent} virtualIndex={index}>
                        {/* {slideContent} */}
                        <>
                          text
                        </>
                    </SwiperSlide>
                    ))}
                </Swiper>
                </>


        </div>
    );
};

export default MeetPartners;