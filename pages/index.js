import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <React.Fragment>
        <Head>
            <title>Nael - source products</title>
            <meta name="description" content="Source products from farmers" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <section className='landing h-screen-h flex items-center justify-center'>
            <form className='w-300px h-10 bg-white rounded-md p-3 flex justify-between items-center'>
                <input type="text"  placeholder='I&apos;m looking for... '/>
                <button>
                    <FontAwesomeIcon icon={solid('search')} className='h-4'/>
                </button>

            </form>

        </section>
        <section  className='w-90% md:w-80% 2xl:w-60% mx-auto mt-3'>
            <h2 className='text-8 font-semibold mb-4'>
                Source agricultural produce from cooperatives
            </h2>
            <p>
                Buy food & agricultural produce with confidence; shipped by cooperatives, farmer groups, exporters and agro-processors that work directly with trusted family farmers.


            </p>


        </section>
        <section className="partners mt-10 w-90% md:w-80% 2xl:w-60% mx-auto">
            <h1 className="text-center text-6">Trusted by</h1>
            <div className='flex mt-4 gap-10 justify-between'>
                <div className={styles.ezgif+" h-100px w-200px"}></div>
                <div className={styles.myStore+" h-100px w-200px"}></div>
                <div className={styles.agriFresh+" h-100px w-200px"}></div>
                <div className={styles.apple+" h-100px w-200px"}></div>
                <div className={" h-100px w-200px bg-red-500"}></div>
            </div>

        </section>
        <div className="h-400px"></div>
    </React.Fragment>
  )
}
