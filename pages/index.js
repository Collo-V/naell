import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";
import styles from '../styles/Home.module.css'
import Partners from "../components/Partners";

export default function Home() {
  return (
    <React.Fragment>
        <Head>
            <title>Naell - source products</title>
            <meta name="description" content="Source products from farmers" />
        </Head>
        <section className={styles.landing+' h-screen-h flex items-center justify-center'}>
            <form className='w-300px h-10 bg-white rounded-md p-3 flex justify-between items-center'>
                <input type="text"  placeholder='I&apos;m looking for... '/>
                <button>
                    <FontAwesomeIcon icon={solid('search')} className='h-4'/>
                </button>

            </form>

        </section>
        <section  className='w-90% md:w-80% 2xl:w-60% mx-auto mt-3'>
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
        <div className="h-400px"></div>
    </React.Fragment>
  )
}
