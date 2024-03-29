import React, {useEffect} from 'react';
import Link from "next/link";
import ItemsGrid from "../components/ItemsGrid";
import {writeShowSearch} from "../store/reducers/search";
import {useDispatch} from "react-redux";
import Search from "../components/Search";
import background from '../public/backgrounds/woodBackground.jpg'
import avocado from '../public/fruits/Avocado-tray-1-1024x1024.jpg'
import mangoes from '../public/fruits/Fruit_Kingdom_-_Mango_pack_2.jpg'
import pineapple from '../public/fruits/pineapple.jpg'
import grapes from '../public/fruits/grapes.jpg'
import bananas from '../public/fruits/bananas.jpg'

function Fruits(props) {
    const dispatch = useDispatch()
    const fruits = [
        {
            name:'Mangoes (4kg)',
            image:mangoes.src
        },
        {
            name:'Avocados (4kg)',
            image:avocado.src
        },
        {
            name:'Bananas (4kg)',
            image:bananas.src
        },
        {
            name:'Grapes (4kg)',
            image:grapes.src
        },
        {
            name:'Pineapples (6kg)',
            image:pineapple.src
        }
    ]
    useEffect(()=>{
        let nav = document.getElementById('main-nav')
        try {
            nav.classList.add('nav-white','text-white')
        }catch{}
        return ()=>{
            try {
                nav.classList.remove('nav-white','text-white')
            }catch{}
        }
    })
    return (
        <div>
            <Search/>
            <section className='h-screen-h-50 p-10 relative'>
                <div className="absolute top-0 left-0 w-full h-full" style={{
                    background:`url(${background.src}) no-repeat center/cover`
                }}></div>
                <img src="/veggies/fruits1.png" alt="" className='h-90% mx-auto relative z-1' />

            </section>
            <section className='mt-10 w-90% md:w-80% 2xl:w-60% mx-auto text-center'>
                <h1 className='text-5 lg:text-6 mb-4'>Get all types of fruits from Africa to where you are </h1>
                <p className="mb-4">
                    You can access the best variety of all types of fruits from the best growers in Africa
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
                    <ItemsGrid items={fruits}/>
                </div>
            </section>
        </div>
    );
}

export default Fruits;
