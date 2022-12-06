import React, { useRef } from 'react';
import Slider from 'react-slick';
import PitchCard from './PitchCard';
import styles from 'static/scss/sections/sliderCustom.module.scss';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function SliderCustom({ data }) {
  const sliderRef = useRef(null);
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    arrows: false,
    lazyLoad: true,
    appendDots: (dots) => {
      return (
        <div>
          <ul style={{ display: 'inline-flex', paddingTop: '20px' }}>
            {dots.map((dot, index) => {
              return (
                <li
                  key={index}
                  style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    backgroundColor: '#198754',
                    margin: '0 4px',
                  }}
                ></li>
              );
            })}
          </ul>
        </div>
      );
    },
  };

  const handleNextClick = () => {
    sliderRef.current.slickNext();
  };

  const handlePrevClick = () => {
    sliderRef.current.slickPrev();
  };
  return (
    <div className={styles.slider_custom}>
      <div className={styles.button_left}>
        <button className={`btn-primary`} onClick={handlePrevClick}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
      </div>
      <Slider {...settings} ref={sliderRef}>
        {data.map((item) => {
          return <PitchCard data={item} key={item.id} />;
        })}
      </Slider>
      <div className={styles.button_right}>
        <button className={`btn-primary`} onClick={handleNextClick}>
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>
    </div>
  );
}
