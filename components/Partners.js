import React from 'react';
import Image from "next/image";

function Partners(props) {
    return (
        <div>
            <div className="flex gap-10 justify-center">
                <div className="w-200px h-100px shadow-md rounded-md border-t-1px" >
                    <Image src='/clients/agriFresh.png' height={150} width={300}/>
                </div>
                <div className="w-200px h-100px shadow-md rounded-md border-t-1px" >
                    <Image src='/clients/nigelle.png' height={150} width={300}/>
                </div>
                <div className="w-200px h-100px shadow-md rounded-md border-t-1px" >
                    <Image src='/clients/aragon.png' height={150} width={300}/>
                </div>
                <div className="w-200px h-100px shadow-md rounded-md border-t-1px" >
                    <Image src='/clients/agriFresh.png' height={150} width={300}/>
                </div>
                <div className="w-200px h-100px shadow-md rounded-md border-t-1px" >
                    <Image src='/clients/aragon.png' height={150} width={300}/>
                </div>
            </div>
        </div>
    );
}

export default Partners;
