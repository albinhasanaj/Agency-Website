"use client";

import Image from 'next/image';
import { PROJECTS } from "@/constants/projects";
import { useEffect, useState, useRef, MouseEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CardCarousel = () => {
    const [index, setIndex] = useState(0);
    const [isHovering, setIsHovering] = useState(false);
    const magnifierRef = useRef<HTMLElement>(null);
    const imageContainerRef = useRef<HTMLDivElement>(null);
    const [direction, setDirection] = useState(1); // 1 for right, -1 for left

    const fadeInVariants = {
        initial: { opacity: 0, x: direction * 1000 },
        enter: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: direction * -1000 }
    };

    useEffect(() => {
        const container = imageContainerRef.current;

        const handleMouseMove = (e: MouseEvent) => {
            if (isHovering && container) {
                const { clientX, clientY } = e;
                const containerRect = container.getBoundingClientRect();
                const xOffset = ((clientX - containerRect.left) / containerRect.width) * 100;
                const yOffset = ((clientY - containerRect.top) / containerRect.height) * 100;

                const image = container.querySelector('img');
                if (image) {
                    image.style.transformOrigin = `${xOffset}% ${yOffset}%`;
                    image.style.transform = 'scale(2)';
                }
            }
        };

        const handleMouseLeave = () => {
            const image = container?.querySelector('img');
            if (image) {
                image.style.transform = 'scale(1)';
            }
            if (magnifierRef.current) {
                magnifierRef.current.style.display = 'none';
            }
        };

        if (container) {
            container.addEventListener('mousemove', handleMouseMove as any);
            container.addEventListener('mouseleave', handleMouseLeave as any);
        }

        return () => {
            if (container) {
                container.removeEventListener('mousemove', handleMouseMove as any);
                container.removeEventListener('mouseleave', handleMouseLeave);
            }
        };
    }, [isHovering, index]); // Re-apply event listeners when index changes

    const paginate = (newIndex: number, direction: string) => {
        setDirection(direction === 'right' ? 1 : -1);
        setIndex(newIndex);
    };

    return (
        <div className="w-full flex flex-col">
            <div className='w-full flex justify-between items-center'>
                <div className="flex-shrink-0">
                    <Image src="/images/arrow.png" width={64} height={64} alt="Arrow" className="fade rotate-[90deg] cursor-pointer"
                        onClick={() => paginate((index - 1 + PROJECTS.length) % PROJECTS.length, 'left')}
                    />
                </div>
                <AnimatePresence>
                    <motion.div
                        key={index}
                        custom={index}
                        variants={fadeInVariants}
                        initial='initial'
                        animate='enter'
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 }
                        }}
                        className='flex justify-center w-2/3 h-[500px] zoomed-image-container relative'
                        ref={imageContainerRef}
                        onMouseEnter={() => setIsHovering(true)}
                    >
                        <Image
                            src={`/${PROJECTS[index].image}`}
                            width={1000}
                            height={500}
                            alt={PROJECTS[index].title}
                            className="rounded-lg border-[1px] border-white zoomed-image"
                            layout="responsive"
                            quality={100}
                            priority={true}
                        />
                        <div ref={magnifierRef as any} />
                    </motion.div>
                </AnimatePresence>
                <div className="flex-shrink-0">
                    <Image src="/images/arrow.png" width={64} height={64} alt="Arrow" className="fade rotate-[-90deg] cursor-pointer"
                        onClick={() => paginate((index + 1) % PROJECTS.length, 'right')}
                    />
                </div>
            </div>
            <div className='flex w-full justify-center gap-2 mt-4 animati'>
                {PROJECTS.map((project, i) => (
                    <div key={i} className={`w-2 h-2 rounded-full ${i === index ? 'bg-white' : 'bg-[#3C2685]'} cursor-pointer`} onClick={() => setIndex(i)} />
                ))}
            </div>
            <h2 className='text-white text-[32px] lg:text-[48px] font-bold mt-10'>
                {PROJECTS[index].title}
            </h2>
            <p className='text-[24px] md:text-[36px] lg:text-[32px] tracking-[-0.64px] text-[#C5C6C7]'>
                {PROJECTS[index].description}
            </p>
        </div>
    );
}

export default CardCarousel;
