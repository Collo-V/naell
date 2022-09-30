import React from 'react';
import Head from "next/head";
import Image from "next/image";
import Partners from "../components/Partners";

function About(props) {
    return (
        <React.Fragment>
            <Head>
                <title>Naell | about</title>
                <meta name="description" content="Source products from farmers" />
            </Head>
            <div className='header pt-18 bg-slate-100 min-h-500px '>
                <div className=" w-90% md:w-80% 2xl:w-60% mx-auto max-h-300px ">
                    <div className="text-center text-8 font-semibold">
                        We are changing the whole game
                    </div>
                    <div className='flex justify-center'>
                        <img src="/veges.png" alt="" className='h-450px w-auto'/>
                    </div>
                </div>
            </div>
            <div className="story mt-12 w-90% md:w-80% 2xl:w-60% mx-auto pt-5">
                <p className='text-primary font-bold text-5'>Our story</p>
                <div className="lg:flex mt-4  gap-10">
                    <div className="w-full flex flex-col justify-between pb-10">
                        <h2 className=''>
                            Naell Is a people first agricultural trading company, focusing on fruits
                            and vegetables. We work to enable small scale and farmer
                            cooperative in Kenya and East Africa to supply quality food to the world.
                        </h2>
                        <div className="flex gap-4 mt-4">
                            <div>
                                <div className="flex gap-2 w-60px justify-center mb-1">
                                    <div className="w-20px h-20px rounded-full bg-secondary"></div>
                                    <div className="w-20px h-20px rounded-full bg-slate-200"></div>

                                </div>
                                <div className="half-circle"></div>
                            </div>
                            <div className='pr-4'>
                                Order fruits such , any time and let our team do the fieldwork for you, from sourcing,
                                quality control to exporting to your destination of choice.
                                Working with us Is enabling the vulnerable in society, by creating job for them

                            </div>

                        </div>


                    </div>
                    <div className="w-full">
                        <div className="flex gap-2">
                            <div className="w-10">01.</div>
                            <div className="w-full">
                                <h3>6 years of intense research.</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dolorum eveniet
                                    fuga iste officia officiis pariatur perspiciatis? Ea, labore, voluptate!
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-2 mt-4">
                            <div className="w-10">02.</div>
                            <div className="w-full">
                                <h3> Faster link up in supply chain </h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dolorum eveniet
                                    fuga iste officia officiis pariatur perspiciatis? Ea, labore, voluptate!
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-2 mt-4">
                            <div className="w-10">03.</div>
                            <div className="w-full">
                                <h3>Wider market</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dolorum eveniet
                                    fuga iste officia officiis pariatur perspiciatis? Ea, labore, voluptate!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-10">
                <h1 className="text-center my-4 text-6">
                    Proud partners with
                </h1>
                <Partners/>
            </div>
            <div className="mt-24 w-90% md:w-80% 2xl:w-60% mx-auto grid lg:grid-cols-2 gap-10 items-center">
                <div className="w-full">
                    <h1 className="text-6">Our mission</h1>
                    <div className="mt-4 ">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci assumenda
                            distinctio dolorem ea excepturi facere nam neque perferendis quisquam rem!
                        </p>
                        <p className="mt-2">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, vel.
                        </p>

                    </div>
                    <div className='mt-4 flex gap-4 justify-between'>
                        <div>
                            <div className="relative -mb-2">
                                <div className="absolute left-0 top-50% v-center h-5 w-5 bg-primary rounded-full z-n1"></div>
                                <span className="font-bold text-6"> 100+ </span>
                            </div>
                            <span>Happy clients</span>
                        </div>
                        <div>
                            <div className="relative -mb-2">
                                <div className="absolute left-0 top-50% v-center h-5 w-5 bg-slate-400 rounded-full z-n1"></div>
                                <span className="font-bold text-6"> 50% </span>
                            </div>
                            <span>Faster delivery</span>
                        </div>
                        <div>
                            <div className="relative -mb-2">
                                <div className="absolute left-0 top-50% v-center h-5 w-5 bg-secondary-light rounded-full z-n1"></div>
                                <span className="font-bold text-6"> 94% </span>
                            </div>
                            <span>Happy clients</span>
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    <img src="/supplier.jpeg" alt="" className='h-300px w-auto'/>
                </div>


            </div>
            <div className="mt-24 w-90% md:w-80% 2xl:w-60% mx-auto flex flex-col-reverse lg:flex-row gap-10 items-center">
                <div className="w-full">
                    <img src="/supplier.jpeg" alt="" className='h-300px w-auto'/>
                </div>
                <div className="w-full">
                    <h1 className="text-6">Our vision</h1>
                    <div className="mt-4 ">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci assumenda
                            distinctio dolorem ea excepturi facere nam neque perferendis quisquam rem!
                        </p>
                        <p className="mt-2">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, vel.
                        </p>

                    </div>

                </div>


            </div>
            <div className="h-400px"></div>
        </React.Fragment>
    );
}

export default About;
