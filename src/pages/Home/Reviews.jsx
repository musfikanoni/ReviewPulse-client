import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';  
import '../../review.css';
import r1 from '../../assets/Home/re-1.png';
import r2 from '../../assets/Home/re-2.png';
import r3 from '../../assets/Home/re-3.png';
import r4 from '../../assets/Home/re-4.png';
import { Rating } from '@smastrom/react-rating';
import { FaStar } from 'react-icons/fa';


const Reviews = () => {

    const [swiperRef, setSwiperRef] = useState(null);

    return (
        <div>
            <div>
                <h2 className='text-center pb-10 md:text-3xl text-xl font-bold'>Our Best Reviews</h2>

                <section className='px-4 py-7 lg:px-0 overflow-hidden max-w-7xl mx-auto'>

                    <Swiper
                        onSwiper={setSwiperRef}
                        slidesPerView={3}
                        autoplay={{
                            delay: 1500,
                            disableOnInteraction: false, 
                        }}
                        loop={true}
                        speed={1000}
                        modules={[Autoplay]}
                        spaceBetween={40}
                        className="mySwiper"
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
                        <SwiperSlide className='rounded-xl border'>
                            <div className="flex flex-col justify-center px-3 my-10 items-center">
                                <img className="border-2 h-4 rounded-full" src={r1} alt="" />
                                <p className="text-xl py-3 text-base font-bold">Suzan Caika</p>
                                <p className='md:text-base text-sm text center px-5'>Excellent service! The team was professional, efficient, and delivered exactly what I needed. Their attention to detail and customer support were outstanding. Highly recommend!</p>
                                <div className="flex justify-center gap-2 mt-4">
                                    <FaStar className='text-xl text-amber-500' />
                                    <FaStar className='text-xl text-amber-500' />
                                    <FaStar className='text-xl text-amber-500' />
                                    <FaStar className='text-xl text-amber-500' />
                                    <FaStar className='text-xl text-amber-500' />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className=' rounded-xl border'>
                            <div className="flex flex-col justify-center my-10 items-center">
                                <img className="border-2 h-4 rounded-full " src={r2} alt="" />
                                <p className="text-xl py-3 text-base font-bold">Jack Adams</p>
                                <p className='md:text-base text-sm text center px-5'>I had a great experience with this service. Everything was handled smoothly and on time. The quality exceeded my expectations, and the staff was very friendly. Will use again!</p>
                                <div className="flex justify-center gap-2 mt-4">
                                    <FaStar className='text-xl text-amber-500' />
                                    <FaStar className='text-xl text-amber-500' />
                                    <FaStar className='text-xl text-amber-500' />
                                    <FaStar className='text-xl text-amber-500' />
                                    <FaStar className='text-xl text-amber-500' />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='rounded-xl border'>
                            <div className="flex flex-col justify-center my-10 items-center">
                                <img className="border-2 h-4 rounded-full" src={r3} alt="" />
                                <p className="text-xl mt-2 mb-3 text-base font-bold">Sofia Gomez</p>
                                <p className='md:text-base text-sm text center px-5'>Amazing service from start to finish! They were quick to respond and provided expert solutions. The process was hassle-free, and I’m extremely satisfied with the results.</p>
                                <div className="flex justify-center gap-2 mt-4">
                                    <FaStar className='text-xl text-amber-500' />
                                    <FaStar className='text-xl text-amber-500' />
                                    <FaStar className='text-xl text-amber-500' />
                                    <FaStar className='text-xl text-amber-500' />
                                    <FaStar className='text-xl text-amber-500' />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className=' rounded-xl border'>
                            <div className="flex flex-col justify-center my-10 items-center">
                                <img className="border-2 h-4 rounded-full " src={r4} alt="" />
                                <p className="text-xl py-3 text-base font-bold">Lorissa</p>
                                <p className='md:text-base text-sm text center px-5'>Fantastic experience! The team was knowledgeable and provided excellent support throughout. The service was seamless and exceeded my expectations. Will definitely return!</p>
                                <div className="flex justify-center gap-2 mt-4">
                                    <FaStar className='text-xl text-amber-500' />
                                    <FaStar className='text-xl text-amber-500' />
                                    <FaStar className='text-xl text-amber-500' />
                                    <FaStar className='text-xl text-amber-500' />
                                    <FaStar className='text-xl text-amber-500' />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='rounded-xl border'>
                            <div className="flex flex-col justify-center my-10 items-center">
                                <img className="border-2 h-4 rounded-full" src={r1} alt="" />
                                <p className="text-xl py-3 text-base font-bold">Olivia</p>
                                <p className='md:text-base text-sm text center px-5'>Reliable and efficient service! They listened to my requirements and delivered perfectly. I appreciate their dedication to customer satisfaction. Would recommend to anyone!</p>
                                <div className="flex justify-center gap-2 mt-4">
                                    <FaStar className='text-xl text-amber-500' />
                                    <FaStar className='text-xl text-amber-500' />
                                    <FaStar className='text-xl text-amber-500' />
                                    <FaStar className='text-xl text-amber-500' />
                                    <FaStar className='text-xl text-amber-500' />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className=' rounded-xl border'>
                            <div className="flex flex-col justify-center my-10 items-center">
                                <img className="border-2 h-4 rounded-full " src={r2} alt="" />
                                <p className="text-xl py-3 text-base font-bold">Zayn Malik</p>
                                <p className='md:text-base text-sm text center px-5'>Fantastic experience! The team was knowledgeable and provided excellent support throughout. The service was seamless and exceeded my expectations. Will definitely return!</p>
                                <div className="flex justify-center gap-2 mt-4">
                                    <FaStar className='text-xl text-amber-500' />
                                    <FaStar className='text-xl text-amber-500' />
                                    <FaStar className='text-xl text-amber-500' />
                                    <FaStar className='text-xl text-amber-500' />
                                    <FaStar className='text-xl text-amber-500' />
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>

                </section>
            </div>
        </div>
    );
};

export default Reviews;