import React, { useRef, useState } from 'react';
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../../styles.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import cart1 from '../../assets/Home/cart-1.jpg';
import cart2 from '../../assets/Home/cart-2.jpg';
import cart3 from '../../assets/Home/cart-3.jpg';
import cart4 from '../../assets/Home/cart-4.png';
import cart5 from '../../assets/Home/cart-5.jpg';


const MeetPartners = () => {

    const [swiperRef, setSwiperRef] = useState(null);
    const appendNumber = useRef(500);
    const prependNumber = useRef(1);
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
        <section className='px-4 lg:px-0 py-20'>
          <h2 className='text-center pb-10 font-extrabold text-4xl'>Meet Our Partners</h2>
            <div className="overflow-hidden">
                <Swiper
                    onSwiper={setSwiperRef}
                    slidesPerView={3}
                    // centeredSlides={true}
                    spaceBetween={30}
                    pagination={{
                    type: 'fraction',
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper border-2 border-pcolor rounded-lg"
                    breakpoints={{
                        //mobile devices
                        390: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        //tablets
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        //small desktops
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 25,
                        },
                    }}
                >
                    <SwiperSlide>
                        <div>
                            <div className="h-24 max-w-28 mx-auto">
                            <img className='h-24 w-24 rounded-md' src={cart1} alt="" />
                            </div>
                            <div className='pt-4'>
                              <h3 className="text-black font-semibold text-md">Moonlight Airlines</h3>
                              <p className="text-base">Moonlight Airlines is a virtual airline operating within the online platform Second Life.
                                Connecting various airports across the mainland continents.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide> 
                        <div>
                        <div className="h-24 max-w-28 mx-auto">
                            <img className='h-24 w-24 rounded-md' src={cart2} alt="" />
                        </div>
                        
                        <div className='pt-4'>
                          <h3 className="text-black pt-3 font-semibold text-md">Dream Home</h3>
                          <p className="text-base">
                          The term "Dream Home" is associated with several companies specializing in various aspects of residential design, construction, and real estate.</p>
                        </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                        <div className="h-24 max-w-28 mx-auto">
                          <img className='h-24 w-24 rounded-md' src={cart3} alt="" />
                        </div>
                            
                            <div className='pt-4'>
                              <h3 className="text-black pt-3 font-semibold text-md">Home Maker</h3>
                              <p className="text-base">The term "Home Maker" is associated with several companies specializing in various aspects of home construction, interior design, and building materials.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                          <div>
                          <div className="h-24 max-w-28 mx-auto">
                            <img className='h-24 w-24 rounded-md' src={cart4} alt="" />
                          </div>
                          
                          </div>
                            
                            <div className='pt-4'>
                              <h3 className="text-black pt-3 font-semibold text-md">Foody</h3>
                              <p className="text-base">Each of these companies operates in the food sector, focusing on different aspects such 
                                as delivery services, to cater to diverse consumer preferences.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <div className="h-24 max-w-28 mx-auto">
                            <img className='h-24 w-24 rounded-md' src={cart5} alt="" />
                            </div>
                            
                            <div className='pt-4'>
                              <h3 className="text-black pt-3 font-semibold text-md">Elevate Vision</h3>
                              <p className="text-base">Based in Kitwe, Zambia, Elevate Vision Ltd is a full-service print and corporate branding company. They offer professional services in brand development.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default MeetPartners;