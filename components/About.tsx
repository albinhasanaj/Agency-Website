"use client";
import { useState } from 'react';
import Typewriter from 'typewriter-effect';
import Button from './Button';
import { STATISTICS } from "@/constants/statistics";
import Statistic from './Statistic';
import { useInView } from 'react-intersection-observer';

const About = () => {
    const [isShort, setIsShort] = useState(true);
    const [key, setKey] = useState(0);
    const [typewriterInView, setTypewriterInView] = useState(false);

    const { ref: typewriterRef, inView: typewriterVisible } = useInView({
        triggerOnce: true,
        onChange: (inView) => {
            if (inView) {
                setTypewriterInView(true);
            }
        }
    });

    const handleButtonClick = () => {
        setKey(prev => prev + 1);
        setIsShort(prev => !prev);
    }

    return (
        <section className='min-h-screen text-white flex flex-col justify-around gap-8'>
            <div className="flex w-full flex-col gap-2">
                <h2 className='text-white text-[32px] lg:text-[48px] font-bold mt-20'>Who are we?</h2>
                <div className="flex gap-4">
                    <Button text="Short" onClick={handleButtonClick} isShort={!isShort} />
                    <Button text="Long" onClick={handleButtonClick} isShort={isShort} />
                </div>
                <div className='text-[24px] lg:text-[32px]' ref={typewriterRef}>
                    {typewriterInView && (
                        <Typewriter
                            key={key}
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString(isShort
                                        ? "We are a company that lorem ipsum dolor aset blah blah blah blah blah blah blah blah with more blah blah blah blah to be seen for blah blah blah blah that blah blah blah with more blah blah blah"
                                        : "We are a company that is lorem ipsum dolor aset blah blah blah blah blah blah blah blah with more blah blah blah blah to be seen for blah blah blah blah that blah blah blah with more blah blah blah blah blah blah blah blah with more blah blah blah blah to be seen for blah blah blah blah that blah blah blah with more blah blah blah"
                                    )
                                    .start();
                            }}
                            options={{
                                autoStart: true,
                                loop: false,
                                delay: 10,
                                cursor: ""
                            }}
                        />
                    )}
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between">
                {STATISTICS.map(({ title, value, emoji }) => (
                    <Statistic key={title} title={title} value={value} emoji={emoji} />
                ))}
            </div>
        </section>
    );
}

export default About;
