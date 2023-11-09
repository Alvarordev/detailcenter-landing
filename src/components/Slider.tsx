"use client";

import Image from "next/image";
import { useState } from "react";

const Slider = () => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
  
    const handleMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (!isDragging) return;
  
      const rect = event.currentTarget.getBoundingClientRect();
      const x = Math.max(0, Math.min(event.clientX - rect.left, rect.width));
      const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
  
      setSliderPosition(percent);
    };
  
    const handleMouseDown = () => {
      setIsDragging(true);
    };
  
    const handleMouseUp = () => {
      setIsDragging(false);
    };
  
    return (
        <div className="w-full relative" onMouseUp={handleMouseUp}>
          <div
            className="relative w-full h-[534px] m-auto overflow-hidden select-none"
            onMouseMove={handleMove}
            onMouseDown={handleMouseDown}
          >
            <Image
              alt=""
              fill
              priority
              src='/compare-after.webp'
            />
  
            <div
              className="absolute top-0 left-0 right-0 w-full h-[534px] m-auto overflow-hidden select-none"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <Image
                fill
                priority
                alt=""
                src='/compare-before.webp'
              />
            </div>
            <div
              className="absolute top-0 bottom-0 w-1 bg-red-500 cursor-ew-resize"
              style={{
                left: `calc(${sliderPosition}% - 1px)`,
              }}
            >
              <div className="bg-red-500 absolute rounded-full h-6 w-6 -left-[10px] top-[calc(50%)]" />
            </div>
          </div>
        </div>
    );
};

export default Slider;
