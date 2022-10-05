import React from 'react';

function Checkout(props) {
    return (
        <div>
            <div className="w-90% lg:w-80% mx-auto lg:flex md:pt-16 gap-10">
                <div className="md:w-70% h-300px">
                    <div className="address">
                        <div className="rounded-md border-1px h-16 flex items-center justify-between px-4">
                            <div className="h-full flex flex-col justify-center">
                                <div>Login</div>
                                <div className='font-semibold'>
                                    <span>John Doe</span>
                                    <span className="ml-2">+806-545-5458</span>
                                </div>
                            </div>


                        </div>
                        <div className="rounded-md border-1px h-16 flex items-center justify-between mt-4 px-4">
                            <div className="h-full flex flex-col justify-center">
                                <div>Shipping address</div>
                                <div  className='font-semibold'>
                                    Ohio, USA
                                </div>
                            </div>
                            <div>
                                <button className="w-100px h-8 bg-slate-100 rounded-md">
                                    Change
                                </button>
                            </div>


                        </div>
                    </div>

                </div>
                <div className="md:w-30% shadow-md md:min-h-screen-h-70 border-t-1px rounded-lg">
                    <div className="w-90% border-b-1px py-4 mx-auto">
                        <h1 className='text-5'>Your order</h1>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Checkout;
