import React, {useState} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";
import styles from '../styles/Home.module.css'
import Partners from "../components/Partners";
import Slider from "../components/Slider";

export default function Home() {
    const [cat, setCat] = useState('Vegetables')

  return (
    <React.Fragment>
        <Head>
            <title>Naell - source products</title>
            <meta name="description" content="Source products from farmers" />

        </Head>
        <section className={styles.landing+' h-screen-h flex items-center justify-center flex-col'}>
            <h1 className='my-4 text-6 lg:text-8 text-white'>Source fruits and vegetables from all over Africa</h1>
            <div className="h-10 w-90% md:w-60% 2xl:w-50% flex">
                {
                    ['Vegetables','Fruits','Herbs'].map(myCat=>(
                        <div key={myCat} >
                            {
                                cat === myCat?
                                    <button className="h-full w-100px bg-white shadow-inner shadow-primary relative">
                                        {myCat}
                                        <span className="absolute top-full w-full h-3  v-center left-0 px-2px">
                                            <div className="block w-full h-full bg-white"></div>
                                        </span>
                                    </button>
                                    :
                                    <button className="h-full w-100px bg-white" onClick={()=>{setCat(myCat)}}>{myCat}</button>
                            }
                        </div>
                    ))
                }
            </div>
            <form className='w-90% md:w-60% 2xl:w-50% h-10'>
                <div className="bg-white roundebhd-md flex justify-between items-center h-10   shadow-inner shadow-primary p-3 border-b-1px border-primary">
                    <input type="text"  placeholder='I&apos;m looking for... ' className='w-full'/>
                    <button>
                        <FontAwesomeIcon icon={solid('search')} className='h-4'/>
                    </button>
                </div>

            </form>

        </section>
        <section className='w-90% md:w-80% 2xl:w-60% mx-auto mt-4 justify-center grid lg:grid-cols-3 gap-4 shadow-md border-t-1px p-6'>
            <div className="w-full flex gap-2 items-center">
                <div className='w-6 h-6 '>
                    <FontAwesomeIcon icon={solid('star')} className='text-primary'/>
                </div>
                <div>
                    <h1>High quality product</h1>
                    <p>Get products from best growers in Africa</p>
                </div>
            </div>
            <div className="w-full flex gap-2 items-center">
                <div className='w-6 h-6 '>
                    <FontAwesomeIcon icon={solid('truck')} className='text-primary'/>
                </div>
                <div>
                    <h1>Fast delivery</h1>
                    <p>Get your orders delivered in the fastest way possible</p>
                </div>
            </div>
            <div className="w-full flex gap-2 items-center">
                <div className='w-6 h-6 '>
                    <FontAwesomeIcon icon={solid('gear')} className='text-primary'/>
                </div>
                <div>
                    <h1>More efficiency</h1>
                    <p>Be sure to receive your orders quick and still fresh</p>
                </div>
            </div>
        </section>
        <div className="min-h-screen-h-70 flex flex-col justify-center">
            <section  className='w-90% md:w-80% 2xl:w-60% mx-auto mt-4 text-center'>
                <h2 className='text-8 font-semibold mb-4'>
                    Naell.Africa-From the Heart of Africa
                </h2>
                <p>
                    Source quality farm produce from the source of the Nile. We work with small scale farmers and farmer cooperatives across Kenya to deliver quality vegetables and fruits to where you are, across the globe
                </p>
                <p className="mt-2">
                    We help you source quality, fresh and organic produce, farmed under high international quality GAP Standards.
                </p>


            </section>
            <section className="partners mt-10 w-90% md:w-80% 2xl:w-60% mx-auto">
                <h1 className="text-center text-6">Trusted by</h1>
                <Partners/>

            </section>
        </div>
        <div className='bg-secondary/50 min-h-200px lg:min-h-400px'>
            <section className="w-90% md:w-80% 2xl:w-60% mx-auto mt-4 min-h-200px lg:min-h-400px">
                <Slider/>
            </section>
        </div>
        <div className="h-400px"></div>
    </React.Fragment>
  )
}
