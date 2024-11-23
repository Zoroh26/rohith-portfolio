'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import backgroundImage from '../../../public/board-pattern.svg';


const classes = {
    MainContainer: 'bg-[#080808] w-full h-screen flex justify-center items-center p-4 sm:p-16 py-16 ',
    innerBox1: 'h-full w-full max-w-[1440px] bg-[#121212] border-[1px] rounded-lg border-[#2b2b2b] mt-8 p-6',
    innerBox2: 'h-full w-full max-w-[1440px] bg-[#080808] border-[1px] rounded-lg border-[#2b2b2b]',
    Info: 'h-full w-full flex justify-start  ',
    description:'w-full h-full flex justify-start p-8',
    about: 'text-white text-2xl sm:text-4xl font-semibold text-center',
};

export default function LandingPage() {
    const [backgroundSize, setBackgroundSize] = useState('');

  

    const innerBox2Style = {
        backgroundImage: `url(${backgroundImage.src})`,
        backgroundRepeat: 'repeat',
        backgroundSize: backgroundSize,
    };

    return (
        <div className={classes.MainContainer}>
            <div className={classes.innerBox1}>
                <div className={classes.innerBox2} style={innerBox2Style}>
                    <div className={classes.Info}>
                        <div className={classes.description}><div className={classes.about}>ABOUT ME.</div></div>
                    </div>
                </div>
            </div>
        </div>
    );
}