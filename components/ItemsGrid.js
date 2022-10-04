import React from 'react';
import Link from "next/link";

function ItemsGrid(props) {
    return (
        <React.Fragment>
            {
                [1,2,3,4,5,6,7,8,9,10].map((value, index) => (
                    <div key={index} className='w-300px h-300px '>
                        <div className='bg-secondary/50 h-200px'>
                            <img src="/veggies/strawberries.png" alt="" className='h-200px mx-auto'/>
                        </div>
                        <div className='p-3 grid justify-center'>
                            <p>Kenyan strawberries</p>
                            <p>
                                <Link href='/'>
                                    <a className='block h-8 mt-1 w-150px border-1px border-primary rounded-md flex items-center justify-center hover:text-white hover:bg-primary'>Inquire</a>
                                </Link>
                            </p>
                        </div>

                    </div>
                ))
            }
        </React.Fragment>
    );
}

export default ItemsGrid;
