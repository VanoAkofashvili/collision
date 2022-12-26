import React from "react";

interface BoxProps {
    width: number;
    height: number;
    left: number;
    top: number;
}

const Box: React.FC<BoxProps> = ({width, height, left, top}) => {
    return <div className={"box"}
                style={{width: `${width}px`, height: `${height}px`, left: `${left}px`, top: `${top}px`}}></div>
}

export default Box;
