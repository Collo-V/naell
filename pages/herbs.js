import React, {useEffect} from 'react';
import Link from "next/link";
import ItemsGrid from "../components/ItemsGrid";
import {writeShowSearch} from "../store/reducers/search";
import {useDispatch} from "react-redux";
import Search from "../components/Search";

import chives from '../public/herbs/chives.jpg'
import mint from '../public/herbs/Mint-leaves-farmers-market-kenya-2.jpg'
import basil from '../public/herbs/basils.jpeg'
import rosemary from '../public/herbs/rosemary.jpg'
import chillies from '../public/herbs/Red-Bullet-Chillies.jpeg'

function Herbs(props) {
    const dispatch = useDispatch()
    const herbs = [
        {
            name:'Chives',
            image:chives.src
        },
        {
            name:'Red Bullet Chillies',
            image:chillies.src
        },
        {
            name:'Rosemary Leaves',
            image:rosemary.src
        },
        {
            name:'Mint',
            image:mint.src
        },
        {
            name:'Basil',
            image:basil.src
        },
    ]
    useEffect(()=>{
        try {
            let nav = document.getElementById('main-nav')
            nav.classList.add('text-white')
        }catch{}
    })
    return (
        <div>
            <Search/>
            <section className='wood-background h-screen-h-50 p-10'>
                <img src="/veggies/fruits1.png" alt="" className='h-90% mx-auto'/>

            </section>
            <section className='mt-10 w-90% md:w-80% 2xl:w-60% mx-auto text-center'>
                <h1 className='text-5 lg:text-6 mb-4'>Get access to all types of herbs grown in East Africa</h1>
                <p className="mb-4">
                    You can access the best variety of all types of herbs from the best growers in Africa
                </p>
                {/*<p className="mb-4">*/}
                {/*    Lorem ipsum dolor sit amet, consectetur adipisicing elit.*/}
                {/*    Ab aliquam aspernatur beatae commodi cumque deleniti eius eligendi*/}
                {/*    eos ex, harum magni nulla numquam optio quaerat, quas, sint sit tempore? Aliquam!*/}
                {/*</p>*/}

            </section>
            <section className="mt-10">
                <div className="w-90% md:w-80% 2xl:w-60% mx-auto mb-10 flex justify-between items-center">
                    <div>
                        <span className="mr-2 font-semibold">
                        Select category:
                    </span>
                        <select className='w-200px h-8 border-1px rounded-md px-2 focus:outline-none'>
                            <option value="--Select category--">--Select category--</option>
                            {
                                [1,2,3,4,5,7].map((value, index) => (
                                    <option value={value} key={index}>
                                        option{index}
                                    </option>
                                ))
                            }
                        </select>
                    </div>
                    <button className="min-w-150px h-8 bg-primary text-white whitespace-nowrap rounded-md" onClick={()=>{dispatch(writeShowSearch())}}>Advanced search</button>
                </div>
                <div className="w-90% md:w-80% 2xl:w-60% mx-auto flex flex-wrap gap-10 justify-center">
                    <ItemsGrid items={herbs}/>
                </div>
            </section>
        </div>
    );
}

export default Herbs;
