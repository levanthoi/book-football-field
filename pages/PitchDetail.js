import React, { useState } from 'react';
import { dataPitch, matchDuration } from 'data/data';
import { useRouter } from 'next/router';
import styles from 'static/scss/pages/pitchDetail.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faLocationDot,
  // faAngleLeft,
  // faAngleRight,
} from '@fortawesome/free-solid-svg-icons';
import dynamic from 'next/dynamic';
import { totalTypePitch } from 'utils/utils';

const WebLayout = dynamic(() => import('layouts/WebLayout.js'), {
  ssr: true,
  loading: () => null,
});

const BreadCrumb = dynamic(() => import('component/BreadCrumb'), {
  ssr: false,
  loading: () => null,
});
const ModalPitch = dynamic(() => import('component/ModalPitch'), {
  ssr: false,
  loading: () => null,
});

const DatePicker = dynamic(() => import('sassy-datepicker'), {
  ssr: true,
  loading: () => null,
});

const SliderCustom = dynamic(() => import('component/sections/SliderCustom'), {
  ssr: true,
  loading: () => null,
});

const PitchDetail = () => {
  //   const router = useRouter();
  const { query } = useRouter();
  const [date, setDate] = useState(new Date());
  const [toggleDuration, setToggleDuration] = useState(-99);
  const [togglePitch, setTogglePitch] = useState(-99);
  // const [timePitch, setTimePitch] = useState(-99);
  // const [totalPrice, setTotalPrice] = useState(0);
  const [showModal, setShowModal] = useState(false);
  // const options = {
  //   timeZone: 'UTC',
  //   year: 'numeric',
  //   month: 'short',
  //   day: 'numeric',
  // };
  const todayDate = new Date();
  // const getDate = (day) => {
  //   return day.toLocaleDateString('vi-Vn', options);
  // };
  // const increaseDate = (day) => {
  //   todayDate.setDate(day.getDate() + 1);
  //   setDate(todayDate);
  // };
  // const decreaseDate = (day) => {
  //   todayDate.setDate(day.getDate() - 1);
  //   setDate(todayDate);
  // };
  const onChangeDate = (newDate) => {
    console.log(`New date selected - ${newDate.toString()}`);
    setDate(newDate);
  };
  // const handleChange = (e, item) => {
  //   console.log('e', e);
  //   console.log('item', item);
  // };
  // const handleClick = (e, item) => {
  //   if (e.target.checked) setTotalPrice((prePrice) => Number(prePrice) + Number(item.price));
  //   else if (!e.target.checked && Number(totalPrice) > 0)
  //     setTotalPrice((prePrice) => Number(prePrice) - Number(item.price));
  // };
  //   console.log('router', router);
  //   console.log('useRouter()', query.id);
  //   console.log('dataPitch', dataPitch);
  const data = dataPitch?.find((item) => Number(item?.id) === Number(query.id));

  // h??m x??? l?? ch???n ng??y
  const handleSelectedDate = (day, type) => {
    console.log('handleSelectedDate da goi');
    if (type === 'next') {
      todayDate.setDate(day.getDate() + 1);
    } else if (type === 'prev') {
      todayDate.setDate(day.getDate() - 1);
    }
    setDate(todayDate);
  };

  const handleClose = () => {
    console.log('handleClose dc goi');
    setShowModal(false);
  };

  // h??m x??? l?? ch???n th???i gian
  const handleSelectedTime = (index) => {
    setToggleDuration(index);
  };
  // h??m x??? l?? ch???n s??n b??ng
  const handleSelectedPitch = (index) => {
    setTogglePitch(index);
  };
  const settings = {
    autoplay: true,
    dots: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    lazyLoad: true,
  };
  return (
    <WebLayout title={`?????t s??n ${data?.name}`}>
      <BreadCrumb name1="?????t s??n" name2={data?.name} />
      <div className={`container py-4 ${styles.detailPitch}`}>
        <h3 className="pb-2">{data?.name}</h3>
        <p className={styles.rate}>
          <span className={`number ${styles.star}`}>
            <FontAwesomeIcon icon={faStar} />
            {data?.vote}
          </span>
          <span className="mx-2 number">{data?.countOffer}&nbsp;</span>????nh gi??
          <span className={`ps-lg-5 mx-2 ${styles.address}`}>
            <FontAwesomeIcon icon={faLocationDot} />
          </span>
          {data?.address}
        </p>
        <div className="row pt-4">
          <div className="col-8">
            <div className={styles.introStad}>
              <div className="d-flex">
                <div>
                  <img src="/static/images/tag.png" alt="a" />
                </div>
                <div className="mx-3">
                  <h5 className="fw-bold">{data?.name}</h5>
                  <p>{data?.address}</p>
                </div>
              </div>
              <p className="d-flex align-items-center mt-2">
                <b>S??? s??n</b>&nbsp;
                {totalTypePitch(data?.typePitch)}
                {data?.typePitch?.map((child) => (
                  <span key={child?.id} className={styles.badge}>
                    <img src="/static/images/soccer.png" alt="???nh b??ng" width={18} />
                    &nbsp; {child?.type}
                  </span>
                ))}
              </p>
              <p>
                <b>Gi??? m??? c???a</b>&nbsp; 7:00 AM - 8:00 PM
              </p>
              <div className={styles.slide_image}>
                <SliderCustom settings={settings}>
                  {data?.imgSlider?.map((image, index) => (
                    <img key={image} src={image} alt="" />
                  ))}
                </SliderCustom>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="text-center">
              <p className="fw-bold">?????t {data?.name}</p>
              <p className="subtitle mb-4">
                Ch???n ng??y v?? th???i l?????ng ???? ????? hi???n th??? s??n b??ng ph?? h???p
              </p>
              <DatePicker
                onChange={onChangeDate}
                value={date}
                className=""
                style={{ width: '100%' }}
              />
            </div>
            <p className="fw-bold py-2">Ch???n s??n b??ng</p>
            <div className="row">
              {data?.typePitch?.map((pitch, index) => (
                <div key={pitch?.id} className="col">
                  <button
                    type="button"
                    className={`w-100 ${styles.pitch} ${
                      togglePitch === index ? 'btn-primary' : 'btn-secondary'
                    }`}
                    onClick={() => setTogglePitch(index)}
                  >
                    {/* <img src="/static/images/soccer.png" width={15} alt="img" /> */}
                    <span className="mx-2"> {pitch?.type}</span>
                    <span>S??n {index + 1}</span>
                  </button>
                </div>
              ))}
            </div>
            {/* <select className="form-select" aria-label="Default select example">
              <option selected>Vui l??ng ch???n ...</option>
              {data?.typePitch?.map((pitch, index) => (
                <option value={pitch?.id} key={pitch?.id}>
                  {pitch?.type}
                </option>
              ))}
            </select> */}
            <p className="fw-bold py-2">Th???i l?????ng ????</p>
            <div className="row">
              {matchDuration?.map((item, index) => (
                <div key={item?.id} className="col-4">
                  <button
                    type="button"
                    className={toggleDuration === index ? 'btn btn-primary' : 'btn btn-secondary'}
                    style={{ width: '100%' }}
                    onClick={() => setToggleDuration(index)}
                  >
                    <span className="number">{item?.time}</span> {item?.time && 'Ph??t'}
                  </button>
                </div>
              ))}
            </div>
            <button
              type="button"
              className="btn btn-filter mt-4 text-uppercase"
              style={{ width: '100%' }}
              onClick={() => setShowModal(!showModal)}
            >
              Hi???n th??? s??n tr???ng
            </button>
          </div>
        </div>
        <h5 className="pt-4">V??? tr?? S??n v???n ?????ng</h5>
        <div className={styles.line} />
        <div className={styles.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.6621700080723!2d105.82535616476295!3d21.00617498601064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac80fd0e1987%3A0x783638bc0f1fef37!2zU8OibiBiw7NuZyBUaOG7p3kgTOG7o2k!5e0!3m2!1svi!2s!4v1670511614780!5m2!1svi!2s"
            // width={600}
            // height={450}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="map"
          />
        </div>
        <h5 className="pt-4">Ti???n ??ch t???i s??n</h5>
        <div className={styles.line} />
        <div className="row pt-4">
          <div className="col my-1">
            <div className={styles.facilities}>
              <img src="/static/images/facilities/ball.png" width={40} alt="img" />
              <span className="ml-2"> B??ng</span>
            </div>
          </div>
          <div className="col my-1">
            <div className={styles.facilities}>
              <img src="/static/images/facilities/shirt.png" width={40} alt="img" />
              <span className="ml-2"> Qu???n ??o</span>
            </div>
          </div>
          <div className="col my-1">
            <div className={styles.facilities}>
              <img src="/static/images/facilities/shower.png" width={40} alt="img" />
              <span className="ml-2"> Khu t???m r???a</span>
            </div>
          </div>
          <div className="col my-1">
            <div className={styles.facilities}>
              <img src="/static/images/facilities/toilet.png" width={40} alt="img" />
              <span className="ml-2"> Khu v??? sinh</span>
            </div>
          </div>
          <div className="col my-1">
            <div className={styles.facilities}>
              <img src="/static/images/facilities/water.png" width={40} alt="img" />
              <span className="ml-2"> N?????c u???ng</span>
            </div>
          </div>
        </div>
        <h5 className="pt-4">????nh gi??</h5>
        <div className={styles.line} />
        {/* <div className={styles.reviews}>
          <div className="d-flex">
            <div>
              <span className={`number ${styles.star}`}>
                <FontAwesomeIcon icon={faStar} />
                {data?.vote}
              </span>
            </div>
            <div>
              <h6 className="fw-bold">C?? 9 ????nh gi?? v??? s??n v???n ?????ng n??y</h6>
            </div>
          </div>
        </div> */}
      </div>
      {/* Modal */}
      {showModal && (
        <ModalPitch
          data={data}
          date={date}
          togglePitch={togglePitch}
          toggleDuration={toggleDuration}
          handleClose={handleClose}
          handleSelectedDate={handleSelectedDate}
          handleSelectedPitch={handleSelectedPitch}
          handleSelectedTime={handleSelectedTime}
        />
      )}
    </WebLayout>
  );
};

export default PitchDetail;
