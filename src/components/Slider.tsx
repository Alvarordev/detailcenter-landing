/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useRef, TouchEvent } from "react";

const Slider = () => {
  const [imageRevealFraq, setImageRevealFraq] = useState(0.5);
  const imageContainer = useRef<HTMLDivElement | null>(null);

  const slide = (xPosition: number): void => {
    if (imageContainer.current) {
    const containerBoundingRect = imageContainer.current.getBoundingClientRect();
    setImageRevealFraq(() => {
      if (xPosition < containerBoundingRect.left) {
        return 0;
      } else if (xPosition > containerBoundingRect.right) {
        return 1;
      } else {
        return (
          (xPosition - containerBoundingRect.left) / containerBoundingRect.width
        );
      }
    })};
  };

  const handleTouchMove = (event: TouchEvent<HTMLDivElement>): void => {
    slide(event.touches.item(0).clientX);
  };

  const handleMouseDown = (): void => {
    window.onmousemove = handleMouseMove;
    window.onmouseup = handleMouseUp;
  };

  const handleMouseMove = (event: MouseEvent): void => {
    slide(event.clientX);
  };

  const handleMouseUp = (): void => {
    window.onmousemove = null;
    window.onmouseup = null;
  };

  return (
    <div className="w-full overflow-hidden">
      <div
        ref={imageContainer}
        className="w-full relative select-none group"
      >
        <img
          src="./compare-after.webp"
          alt=""
          className="pointer-events-none w-full h-[280px] md:h-auto"
        />
        <img
          style={{
            clipPath: `polygon(0 0, ${imageRevealFraq * 100}% 0, ${
              imageRevealFraq * 100
            }% 100%, 0 100%)`,
          }}  
          src="./compare-before.webp"
          alt=""
          className="absolute inset-0 pointer-events-none h-[280px] md:h-auto"
        />
        <div
          style={{ left: `${imageRevealFraq * 100}%` }}
          className="absolute inset-y-0 "
        >
          <div className="relative h-full">
            <div
              onMouseDown={handleMouseDown}
              onTouchMove={handleTouchMove}
              className="h-16 w-16 -ml-8 -mt-6 rounded-full bg-red-500 absolute top-1/2 shadow-xl flex items-center justify-center cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-10 text-white rotate-90 transform"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;

// const [sliderPosition, setSliderPosition] = useState(50);
// const [isDragging, setIsDragging] = useState(false);


// const handleMove = (event: any) => {
//   if (!isDragging) return;

//   const rect = event.currentTarget.getBoundingClientRect();
//   const x = Math.max(0, Math.min(event.clientX - rect.left, rect.width));
//   const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));

//   setSliderPosition(percent);
// };

// const handleTouchMove = (event: any) => {
//   const rect = event.currentTarget.getBoundingClientRect();
//   const x = Math.max(0, Math.min(event.clientX - rect.left, rect.width));
//   const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));

//   setSliderPosition(percent);
// };

// const handleMouseDown = () => {
//   setIsDragging(true);
// };

// const handleMouseUp = () => {
//   setIsDragging(false);
// };

// return (
//     <div className="w-full relative" onMouseUp={handleMouseUp} >
//       <div
//         className="relative w-full h-[300px] lg:h-[534px] m-auto overflow-hidden select-none"
//         onMouseMove={handleMove}
//         onMouseDown={handleMouseDown}
//         onTouchMove={handleTouchMove}
//       >
//         <Image
//           alt=""
//           fill
//           priority
//           src='/compare-after.webp'
//         />

//         <div
//           className="absolute top-0 left-0 right-0 w-full h-[300px] lg:h-[534px] m-auto overflow-hidden select-none"
//           style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
//         >
//           <Image
//             fill
//             priority
//             alt=""
//             src='/compare-before.webp'
//           />
//         </div>
//         <div
//           className="absolute top-0 bottom-0  bg-red-500 cursor-ew-resize"
//           style={{
//             left: `calc(${sliderPosition}% - 1px)`,
//           }}
//         >
//           <div className="bg-red-500 absolute rounded-full h-16 w-16 -left-[32px] top-[calc(50%-10px)] flex justify-center items-center" >
//             <MoveIcon size="36"/>
//           </div>
//         </div>
//       </div>
//     </div>
// );