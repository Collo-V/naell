import React from 'react';
import Image from "next/image";

function Partners(props) {
    return (
        <div>
            <div className="w-90% mx-auto lg:w-full lg:flex gap-10 justify-center overflow-x-auto whitespace-nowrap px-2 lg:overflow-x-hidden py-4">
                <div className="inline-block w-200px h-100px shadow-md rounded-md border-t-1px mr-4 lg:mr-0" >
                    <Image src='/clients/agriFresh.png' height={150} width={300}/>
                </div>
                <div className="inline-block w-200px h-100px shadow-md rounded-md border-t-1px mr-4 lg:mr-0" >
                    <Image src='/clients/nigelle.png' height={150} width={300}/>
                </div>
                <div className="inline-block w-200px h-100px shadow-md rounded-md border-t-1px mr-4 lg:mr-0" >
                    <Image src='/clients/aragon.png' height={150} width={300}/>
                </div>
                <div className="inline-block w-200px h-100px shadow-md rounded-md border-t-1px mr-4 lg:mr-0" >
                    <Image src='/clients/agriFresh.png' height={150} width={300}/>
                </div>
                <div className="inline-block w-200px h-100px shadow-md rounded-md border-t-1px mr-4 lg:mr-0" >
                    <Image src='/clients/aragon.png' height={150} width={300}/>
                </div>
            </div>
        </div>
    );
}

export default Partners;
