"use client";
import React, { useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Statistic = ({ title, value, emoji }: { title: string, value: number, emoji: string }) => {
    const [hasBeenInView, setHasBeenInView] = useState(false);
    const { ref } = useInView({
        triggerOnce: true, // Trigger only once
        onChange: (inView) => {
            if (inView) {
                setHasBeenInView(true);
            }
        }
    });

    return (
        <div ref={ref} className="flex flex-col items-center">
            <data className='data' value={value}>
                {hasBeenInView && <CountUp end={value} duration={2} />}
            </data>
            <div className="w-full bg-black flex justify-start relative bottom-[25%] py-4">
                <h3 className='text-[24px] lg:text-[32px] font-bold'>{emoji}{title}</h3>
            </div>

        </div>
    );
}

export default Statistic;
