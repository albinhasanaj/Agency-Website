"use client";
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'

const Hero = () => {
    const movableElementsRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            movableElementsRef.current.forEach((element, index) => {
                const factor = (index + 1) * 10; // Adjust the factor for different elements
                const xOffset = (window.innerWidth / 2 - clientX) / factor;
                const yOffset = (window.innerHeight / 2 - clientY) / factor;
                element.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);
    return (
        <section className='h-[calc(100vh-132px)] flex flex-col justify-center items-center text-white'>
            <div className="flex flex-col items-start mb-[132px]">
                <h1 className='text-[36px] sm:text-[28px] md:text-[36px] lg:text-[48px] font-bold tracking-[-0.96px]'>Innovative Design</h1>
                <h1 className='text-[36px] sm:text-[28px] md:text-[36px] lg:text-[48px] font-bold tracking-[-0.96px]'>Launches brands <span className="blockmd:hidden">to new heights</span></h1>
                <p className='text-[24px] md:text-[36px] lg:text-[32px] tracking-[-0.64px] text-[#C5C6C7]'>Websites tailored to you</p>

            </div>
            <div className="flex flex-col">
                <Image
                    src="/images/arrow.png"
                    width={64}
                    height={64}
                    alt="Arrow"
                    className="fade1 relative bottom-0"
                />
                <Image
                    src="/images/arrow.png"
                    width={64}
                    height={64}
                    alt="Arrow"
                    className="fade2 relative bottom-10"
                />
                <Image
                    src="/images/arrow.png"
                    width={64}
                    height={64}
                    alt="Arrow"
                    className="fade3 relative bottom-20"
                />
            </div>
            <div
                className="hidden md:block md:absolute left-[15%] top-[15%] w-[200px] h-[200px] bg-[#3C2685] rounded-full blur-[125px]"
                ref={(element) => { if (element) movableElementsRef.current.push(element); }}
            />
            <div
                className="hidden md:block md:absolute right-[15%] bottom-[15%] w-[200px] h-[200px] bg-[#3C2685] rounded-full blur-[125px]"
                ref={(element) => { if (element) movableElementsRef.current.push(element); }}
            />

        </section>
    )
}

export default Hero