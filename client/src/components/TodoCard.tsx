import { useState } from "react"
import type { CardProps } from "../types/CardTypes"
import { SketchPicker } from 'react-color';

const TodoCard = ({title, description} : CardProps) => {
    const [color, setColor] = useState('#ffffff');
    const [showPicker, setShowPicker] = useState(false);

    return (
        <div className="flex w-48 h-32 shadow-md p-2 items-center m-16 rounded-l-lg rounded-r-2xl" 
            style={{ backgroundColor: color }}
        >
            <div className="flex flex-col w-36 items-center">
                <div className="border-gray-600 h-16 flex items-center">
                    {title}
                </div>
                <div className="border-gray-600 h-16 flex items-center overflow-y-auto">
                    {description}
                </div>
            </div>
            <div className="bg w-12 border-gray-600 ">
                <button onClick={() => {setShowPicker(!showPicker)}}>
                    {showPicker ? 'Close' : 'Pick Color'}
                </button>
                {showPicker && (
                    <SketchPicker className="absolute z-2" 
                        color={color}
                        onChangeComplete={(color) => {setColor(color.hex)}}
                    />
                )}
            </div>
        </div>
    )
}

export default TodoCard
