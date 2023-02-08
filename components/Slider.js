import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'
import React from 'react';
import Link from "next/link";
import {Pagination} from "swiper";

function Slider(props) {
    return (
        <Swiper
            // spaceBetween={50}
            slidesPerView={1}
            pagination={{
                dynamicBullets:true,
                clickable:true,
                bulletClass:'page-bullet',
                bulletActiveClass:"active-page-bullet"
            }}
            modules={[Pagination]}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            className='h-full'
        >
            <SwiperSlide className='w-full h-full text-white py-10'>
                <div className="h-full flex flex-col lg:flex-row-reverse items-center">
                    <div className='w-full'>
                        <img src="/veggies/fruits2.png" alt="" className='max-h-300px'/>
                    </div>
                    <div className='w-full'>
                        <h1 className='text-6'>Get fruits</h1>
                        <p className="mt-4">
                            Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Accusantium ad aliquam cum dolore ducimus,
                            eaque earum explicabo ipsam iste iure iusto neque perferendis
                            recusandae repellat repudiandae, similique, temporibus totam veritatis
                        </p>
                        <div className="mt-4">
                            <Link href='/fruits' >
                                <button className="w-200px h-8 border-1px rounded-md mx-auto border-primary inline-block hover:bg-primary">
                                    Start shopping
                                </button>
                            </Link>
                        </div>

                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='w-full h-full text-white py-10'>
                <div className="h-full flex flex-col lg:flex-row-reverse items-center">
                    <div className='w-full'>
                        <img src="/veggies/veges.png" alt="" className='max-h-300px'/>
                    </div>
                    <div className='w-full'>
                        <h1 className='text-6'>Get vegetables</h1>
                        <p className="mt-4">
                            Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Accusantium ad aliquam cum dolore ducimus,
                            eaque earum explicabo ipsam iste iure iusto neque perferendis
                            recusandae repellat repudiandae, similique, temporibus totam veritatis
                        </p>
                        <div className="mt-4">
                            <Link href='/vegetables' >
                                <button className="w-200px h-8 border-1px rounded-md mx-auto border-primary inline-block hover:bg-primary">
                                    Start shopping
                                </button>
                            </Link>
                        </div>

                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='w-full h-full text-white py-10'>
                <div className="h-full flex flex-col lg:flex-row-reverse items-center">
                    <div className='w-full'>
                        <img src="/veggies/fruits2.png" alt="" className='max-h-300px'/>
                    </div>
                    <div className='w-full'>
                        <h1 className='text-6'>Get herbs</h1>
                        <p className="mt-4">
                            Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Accusantium ad aliquam cum dolore ducimus,
                            eaque earum explicabo ipsam iste iure iusto neque perferendis
                            recusandae repellat repudiandae, similique, temporibus totam veritatis
                        </p>
                        <div className="mt-4">
                            <Link href='/herbs' >
                                <button className="w-200px h-8 border-1px rounded-md mx-auto border-primary inline-block hover:bg-primary">
                                    Start shopping
                                </button>
                            </Link>
                        </div>

                    </div>
                </div>
            </SwiperSlide>

        </Swiper>
    );
}

export default Slider;
