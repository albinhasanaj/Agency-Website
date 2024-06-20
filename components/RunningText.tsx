import React from 'react'

const RunningText = ({ text, direction }: { text: string, direction: "left" | "right" }) => {

    return (
        <h1 className={`text-[84px] lg:text-[128px] text-white text-nowrap ${direction === "left" ? "animate-left" : "animate-right"}`}>
            {text}
        </h1>
    )
}

export default RunningText