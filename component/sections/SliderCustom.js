import React, { useRef } from 'react';
import Slider from 'react-slick';
import styles from 'static/scss/sections/sliderCustom.module.scss';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SliderCustom({ children, settings }) {
  // const { settings } = props;
  // console.log('dots', settings);
  const sliderRef = useRef(null);
  // const settings = {

  // };

  const handleNextClick = () => {
    sliderRef.current.slickNext();
  };

  const handlePrevClick = () => {
    sliderRef.current.slickPrev();
  };
  return (
    <div className={styles.slider_custom}>
      <div className={styles.button_left}>
        <button type="button" className="btn-primary" onClick={handlePrevClick}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
      </div>
      <Slider {...settings} ref={sliderRef}>
        {children}
      </Slider>
      <div className={styles.button_right}>
        <button type="button" className="btn-primary" onClick={handleNextClick}>
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>
    </div>
  );
}
