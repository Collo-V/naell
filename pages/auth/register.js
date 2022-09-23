import React, {useEffect, useState} from 'react';
import {manageScrollbar} from "../../commons/basics";
import AuthBanner from "../../components/AuthBanner";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";
import Link from "next/link";

function Register(props) {
    const [showPass, setShowPass] = useState(false)
    const [firstName, setFirstName] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    useEffect(()=>{
        manageScrollbar(true)
        return()=>manageScrollbar()

    },[])
    useEffect(()=>{
        let pass = document.getElementById('password')
        if(showPass){
            pass.type = 'password'
        }else {
            pass.type = 'text'
        }

    },[showPass])
    return (
        <div className='flex items-center w-90% lg:w-full mx-auto'>
            <AuthBanner></AuthBanner>
            <div className="w-full">
                <div className="w-400px mx-auto max-w-full ">
                    <form className=''>
                        <h1 className='text-6'>Sign up to Naell</h1>
                        <div className="grid gap-4 lg:grid-cols-2">
                            <fieldset className='mt-4'>
                                <label htmlFor="firstName" className='font-semibold'>First name</label>
                                <input type="text" id="firstName" className='border-1px w-full h-10 rounded-md pl-4'
                                       value={firstName} onChange={(event)=>{setFirstName(event.target.value)}}
                                />
                            </fieldset>
                            <fieldset className='mt-4'>
                                <label htmlFor="lastName" className='font-semibold'>Last name</label>
                                <input type="text" id="lastName" className='border-1px w-full h-10 rounded-md pl-4'
                                       value={lastname} onChange={(event)=>{setLastname(event.target.value)}}
                                />
                            </fieldset>
                        </div>
                        <fieldset className='mt-4'>
                            <label htmlFor="email" className='font-semibold'>Email</label>
                            <input type="text" id="email" className='border-1px w-full h-10 rounded-md pl-4'
                                   value={email} onChange={(event)=>{setEmail(event.target.value)}}
                            />
                        </fieldset>
                        <fieldset className='mt-4'>
                            <label htmlFor="password" className='font-semibold'>Password</label>
                            <div className="relative">
                                <input type="password" id="password"  className='border-1px h-10 w-full rounded-md pl-4'
                                       value={password} onChange={(event)=>{setPassword(event.target.value)}}
                                />
                                <span className="cursor-pointer h-5 w-5 absolute top-50% v-center right-2 text-gray-500">
                                    {
                                        !showPass?
                                            <span id="show" onClick={()=>{setShowPass(true)}}>
                                                <FontAwesomeIcon icon={solid('eye')}/>
                                            </span>
                                            :
                                            <span id="hide"  onClick={()=>{setShowPass(false)}}>
                                                <FontAwesomeIcon icon={solid('eye-slash')} />
                                            </span>
                                    }

                                </span>
                            </div>
                        </fieldset>
                        <button className="w-full h-10 rounded-md bg-primary text-white mt-4">
                            Create account
                        </button>
                    </form>
                    <div className='mt-10 '>
                        <div className="relative border-t-1px h-0">
                            <span className="absolute top-50% left-50% bg-white w-fit vh-center px-4">or</span>
                        </div>
                        <div className="mt-4">
                            <button className="w-full h-10 rounded-md bg-secondary text-white">
                                Sign in with google
                            </button>
                        </div>
                    </div>
                    <div className='flex mt-4'>
                        <span>Already a  member?</span>
                        <Link href='/auth/login'>
                            <a className='text-gray-500 underline ml-4'>
                                Login
                            </a>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Register;
