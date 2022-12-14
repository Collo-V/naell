import React, {useEffect, useState} from 'react';
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";
import {useRouter} from "next/router";
import {manageScrollbar} from "../commons/basics";
import Image from "next/image";
// import i18next from "i18next";

function Navbar(props) {
    const [showDrawer,setShowDrawer] = useState(false)
    const manageDrawer = ()=>{
        if(showDrawer){
            setTimeout(()=>{
                setShowDrawer(false)
            },10)
            document.body.style.removeProperty('overflow')

        }else {
            setShowDrawer(true)
            document.body.style.overflow = 'hidden'
        }

    }
    let authenticated
    const router = useRouter()
    const getActive = path=>router.pathname == path ? "link-active" : ""
    useEffect(()=>{
        manageScrollbar()
    },[])
    useEffect(()=>{
        // i18next.init({
        //     lng:'en',
        //     resources :{
        //         en:{
        //             translation:{
        //                 key:'Hello world'
        //             }
        //         }
        //     }
        // })
        // console.log(i18next.t('key'))
    },[])




    return (
        <React.Fragment>
            {/*<script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>*/}
            <nav className='fixed w-full top-0 left-0 h-16 shadow-md z-10 hidden lg:block' id='main-nav'>
                <div className="flex justify-between items-center h-full w-80% mx-auto">
                    <Link href='/'>
                        <a className="logo">
                            {/*<div className="text-8 font-bold ml-10 text-primary">N<span className="text-secondary">aell</span></div>*/}
                            <Image src='/logo.png' width={113} height={50}/>
                        </a>
                    </Link>
                    <div className="flex">
                        <Link href='/about'>
                            <a className={'uppercase text-5 mr-4 hover:text-primary '+getActive('/about')}> About</a>
                        </Link>
                        <Link href='/'>
                            <a className={'uppercase text-5 mr-4 hover:text-primary '+getActive('/veges')}> Vegetables</a>
                        </Link>
                        <Link href='/'>
                            <a className={'uppercase text-5 mr-4 hover:text-primary '+getActive('/fruits')}> Fruits</a>
                        </Link>
                    </div>
                    <div>
                        {
                            authenticated?
                                <div className='relative dropdown-cont'>
                            <span
                                className='h-10 w-10 bg-slate-200 rounded-full flex items-center justify-center cursor-pointer'>
                                <FontAwesomeIcon icon={solid('user')} className='h-4'/>
                            </span>
                                    <div className="absolute top-full right-0 w-150px h-150px bg-white dropdown
                                shadow-md rounded-md flex flex-col justify-between overflow-hidden">
                                        <div></div>
                                        <span className="border-t-1px py-2 px-3 cursor-pointer hover:bg-slate-200">
                                    Logout
                                </span>

                                    </div>
                                </div>
                                :
                                <div className='relative dropdown-cont'>
                            <span className='h-10 w-10 bg-slate-200 rounded-full flex items-center justify-center cursor-pointer'>
                                <FontAwesomeIcon icon={solid('user')} className='h-4'/>
                            </span>
                                    <div className="absolute top-full right-0 w-150px h-150px bg-white dropdown
                                    shadow-md rounded-md flex flex-col justify-between overflow-hidden">
                                        <div></div>
                                        <Link href='/auth/login'>
                                            <a className="border-t-1px py-2 px-3 cursor-pointer hover:bg-slate-200">
                                                Sign in
                                            </a>
                                        </Link>

                                    </div>

                                </div>
                        }

                        <div>
                            <div id="google_translate_element"></div>
                        </div>

                    </div>
                </div>
            </nav>
            <nav className='fixed w-full flex lg:hidden '>
                {
                    !showDrawer?
                    <div className="w-full flex justify-between p-4 h-full items-center" >
                        <Image src='/logo.png' width={91} height={40}/>
                        <button className='w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center' onClick={manageDrawer}>
                            <FontAwesomeIcon icon={solid('bars')} className='h-5'/>
                        </button>
                    </div>
                        :
                    <div className='fixed top-0 right-0 bg-slate-100/50 h-screen-h
                    w-full flex justify-end animate__animated animate__fadeInUp'>
                        <div className=" h-full w-10%"  onClick={manageDrawer}>

                        </div>
                        <div className="h-full w-90% bg-white z-1"  onClick={manageDrawer}>
                            <div className="flex justify-between p-2">
                                <Link href='/'>
                                    <Image src='/logo.png' width={91} height={40}/>
                                </Link>
                                <button className='w-10 h-10 rounded-full flex items-center justify-center' onClick={manageDrawer}>
                                    <FontAwesomeIcon icon={solid('xmark')} className='h-5'/>
                                </button>
                            </div>
                            <div className='p-2'>
                                <Link href='/about'>
                                    <a className='mb-4 block'>About</a>
                                </Link>
                                <Link href='/about'>
                                    <a className='mb-4 block'>Fruits</a>
                                </Link>
                                <Link href='/about'>
                                    <a className='mb-4 block'>Vegetables</a>
                                </Link>
                            </div>
                        </div>

                    </div>
                }
            </nav>
        </React.Fragment>
    );
}

export default Navbar;
