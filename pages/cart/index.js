import React, {useState} from 'react';

function Index(props) {
    const [showPass, setShowPass] = useState(false)
    const [firstName, setFirstName] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    return (
        <div>
            <div className="w-90% lg:w-80% mx-auto lg:flex pt-16 gap-10">
                <div className="md:w-70% h-300px">
                    {/*<div className="address">*/}
                    {/*    <div className="rounded-md border-1px h-16 flex items-center justify-between px-4">*/}
                    {/*        <div className="h-full flex flex-col justify-center">*/}
                    {/*            <div>Login</div>*/}
                    {/*            <div className='font-semibold'>*/}
                    {/*                <span>John Doe</span>*/}
                    {/*                <span className="ml-2">+806-545-5458</span>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}


                    {/*    </div>*/}
                    {/*    <div className="rounded-md border-1px h-16 flex items-center justify-between mt-4 px-4">*/}
                    {/*        <div className="h-full flex flex-col justify-center">*/}
                    {/*            <div>Shipping address</div>*/}
                    {/*            <div  className='font-semibold'>*/}
                    {/*                Ohio, USA*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <div>*/}
                    {/*            <button className="w-100px h-8 bg-slate-100 rounded-md">*/}
                    {/*                Change*/}
                    {/*            </button>*/}
                    {/*        </div>*/}


                    {/*    </div>*/}
                    {/*</div>*/}
                    <form action="" className='max-w-600px mx-auto'>
                        <div className="flex gap-4">
                            <fieldset className='mt-4 w-full'>
                                <label htmlFor="firstName" className='font-semibold'>First name</label>
                                <input type="text" id="firstName" className='border-1px w-full h-10 rounded-md pl-4'
                                       value={firstName} onChange={(event)=>{setFirstName(event.target.value)}}
                                />
                            </fieldset>
                            <fieldset className='mt-4 w-full'>
                                <label htmlFor="lastName" className='font-semibold'>Last name</label>
                                <input type="text" id="lastName" className='border-1px w-full h-10 rounded-md pl-4'
                                       value={lastname} onChange={(event)=>{setLastname(event.target.value)}}
                                />
                            </fieldset>
                        </div>
                        <div className="flex gap-4 mt-4">
                            <fieldset className='mt-4 w-full'>
                                <label htmlFor="firstName" className='font-semibold'>Email</label>
                                <input type="text" id="firstName" className='border-1px w-full h-10 rounded-md pl-4'
                                       value={firstName} onChange={(event)=>{setFirstName(event.target.value)}}
                                />
                            </fieldset>
                            <fieldset className='mt-4 w-full'>
                                <label htmlFor="lastName" className='font-semibold'>Phone number</label>
                                <input type="text" id="lastName" className='border-1px w-full h-10 rounded-md pl-4'
                                       value={lastname} onChange={(event)=>{setLastname(event.target.value)}}
                                />
                            </fieldset>
                        </div>
                        <div className='mt-4'>
                            <fieldset className='mt-4 w-full'>
                                <label htmlFor="lastName" className='font-semibold'>Phone number</label>
                                <input type="text" id="lastName" className='border-1px w-full h-10 rounded-md pl-4'
                                       value={lastname} onChange={(event)=>{setLastname(event.target.value)}}
                                />
                            </fieldset>
                        </div>
                        <div className="mt-4">
                            <button className="float-right h-8 bg-primary w-150px rounded-md text-white">Place order</button>
                        </div>
                    </form>

                </div>
                <div className="md:w-30% shadow-md md:min-h-screen-h-70 border-t-1px rounded-lg">
                    <div className="w-90% border-b-1px py-4 mx-auto">
                        <h1 className='text-5'>Your order</h1>
                    </div>
                    <div className="w-90% mx-auto mt-4">
                        {
                            [1,2,3,4].map((value, index) => (
                                <div className="border-1px rounded-md h-18 mb-4 flex gap-5  pl-2" key={index}>
                                    <div className="h-full w-18 flex items-center">
                                        {
                                            index%2 === 0?
                                                <img src="/veggies/brocoli.png" alt="" className='max-h-full w-auto'/>
                                                :
                                                <img src="/veggies/peppers.png" alt="" className='max-h-full w-auto'/>
                                        }
                                    </div>
                                    <div className='h-full flex flex-col justify-center gap-1'>
                                        <h1>Tanzanian brocoli</h1>
                                        <p>
                                            <span>Quantity</span>
                                            <span className='ml-1 font-semibold'>10kg</span>
                                        </p>

                                    </div>
                                </div>
                            ))
                        }
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Index;
