"use client";
import React from 'react'

const Button = ({ text, onClick, isShort, customClasses }: { text: string, onClick?: () => void, isShort?: boolean, customClasses?: string }) => {

    const bgOpacity = isShort ? 'bg-none' : 'bg-white bg-opacity-10'

    return (
        <button
            onClick={onClick}
            className={`${customClasses} ${bgOpacity} text-white py-2 px-8 rounded-[10px] border border-white border-opacity-10 backdrop-blur-0`}>{text}</button>
    )
}

export default Button