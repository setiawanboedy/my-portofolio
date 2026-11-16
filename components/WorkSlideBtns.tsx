"use client";

import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { useSwiper } from "swiper/react";

interface WorkSlideBtnsProps {
  containerStyles?: string;
  btnStyles?: string;
  iconStyles?: string;
}

const WorkSlideBtns = ({
  containerStyles,
  btnStyles,
  iconStyles,
}: WorkSlideBtnsProps) => {
  const swiper = useSwiper();
  return (
    <div className={containerStyles}>
      <button
        type="button"
        className={btnStyles}
        onClick={() => swiper.slidePrev()}
        aria-label="Previous slide"
      >
        <PiCaretLeftBold className={iconStyles} />
      </button>
      <button
        type="button"
        className={btnStyles}
        onClick={() => swiper.slideNext()}
        aria-label="Next slide"
      >
        <PiCaretRightBold className={iconStyles} />
      </button>
    </div>
  );
};

export default WorkSlideBtns;
