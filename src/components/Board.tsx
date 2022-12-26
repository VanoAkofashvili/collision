import React, {useRef, useState} from "react";
import Box from "./Box";
import {BoxProperties, getBox, getBoxDimensions, overlaps} from "../helpers";

const Board = () => {
    const boardRef = useRef<null | HTMLDivElement>(null);
    const [boxes, setBoxes] = useState<Array<BoxProperties>>([]);
    const createBox = ({width, height}: { width: number, height: number }) => {
        const {bottom, right, left, top} = getBox(width, height);
        const intersects = !boxes.every(box => !overlaps(box, {
            width,
            height,
            left,
            top,
            bottom,
            right
        }));

        if (intersects) {
            try {
                createBox({width, height});
            } catch (err) {
                createBox(getBoxDimensions());
            }
        } else {
            setBoxes([...boxes, {
                width,
                height,
                left,
                top,
                bottom,
                right
            }])
        }
    }
    return <div>
        <div className={"board"} ref={boardRef}>
            {boxes.map((boxProps, idx) => <Box key={idx} {...boxProps} />)}
        </div>
        <div className={'controls'}>
            <button onClick={() => createBox(getBoxDimensions())}>
                Add
            </button>
            <button onClick={() => setBoxes([])}>clear</button>
        </div>
    </div>
}

export default Board;
