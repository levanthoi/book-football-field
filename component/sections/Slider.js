import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import PitchCard from './PitchCard';
export default function Slider() {
  const options = {
    loop: false,
    items: 4,
    responsiveRefreshRate: 0,
    autoplay: true,
    autoplayTimeout: 7000,
    autoplayHoverPause: true,
    nav: true,
    navText: ["<i class='icon-arrow-prev'></i>", "<i class='icon-arrow-next'></i>"],
    dots: true,
    margin: 20,
  };
  return (
    <div className="slider">
      {/* <Carousel width="25%">
        <PitchCard />
        <PitchCard />
        <PitchCard />
        <PitchCard />
      </Carousel> */}
    </div>
  );
}
