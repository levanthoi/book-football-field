import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import styles from 'static/scss/pages/book.module.scss';
import modals from 'static/scss/sections/modal.module.scss';
import { TimePicker } from 'sassy-datepicker';
import { matchDuration, pitchSizes, dataPitch } from 'data/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faLocationDot,
  faAngleLeft,
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { formatNumber, totalTypePitch } from 'utils/utils';
import { Pagination } from 'antd';
import { useRouter } from 'next/router';

// import Head from 'next/head'
const PAGE_SIZE = 5;

const WebLayout = dynamic(() => import('layouts/WebLayout.js'), {
  ssr: true,
  loading: () => null,
});
const BreadCrumb = dynamic(() => import('component/BreadCrumb'), {
  ssr: true,
  loading: () => null,
});
const Banner = dynamic(() => import('component/sections/Banner'), {
  ssr: true,
  loading: () => null,
});
const DatePicker = dynamic(() => import('sassy-datepicker'), {
  ssr: true,
  loading: () => null,
});
// const displayFormat = '24hr';
const minutesInterval = 5;

const book = () => {
  const router = useRouter();
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState({ hours: 15, minutes: 30 });
  const [toggleDuration, setToggleDuration] = useState(-99);
  const [togglePitch, setTogglePitch] = useState(-99);

  const [totalPrice, setTotalPrice] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState([]);

  const [total, setTotal] = useState(dataPitch?.length || 6);
  const [current, setCurrent] = useState(1);

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const todayDate = new Date();
  const getDate = (day) => {
    return day.toLocaleDateString('vi-Vn', options);
  };
  const increaseDate = (day) => {
    // const dayNew = day.getDate() + 1;
    // console.log('date1', date);
    todayDate.setDate(day.getDate() + 1);
    setDate(todayDate);
    // console.log('date2', date);
    // return getDate(date);
  };
  const decreaseDate = (day) => {
    todayDate.setDate(day.getDate() - 1);
    setDate(todayDate);
    // return getDate(date);
  };

  const handleClick = (e, item) => {
    if (e.target.checked) setTotalPrice((prePrice) => Number(prePrice) + Number(item.price));
    else if (!e.target.checked && Number(totalPrice) > 0)
      setTotalPrice((prePrice) => Number(prePrice) - Number(item.price));
    // console.log('e', e.target.checked);
    // console.log('item', item);
  };

  const onChangeTime = (newTime) => {
    console.log(`New time selected - ${newTime.hours}:${newTime.minutes}`);
    setTime(newTime);
  };
  const onChangeDate = (newDate) => {
    console.log(`New date selected - ${newDate.toString()}`);
    setDate(newDate);
  };

  const nextPagination = (page) => {
    setCurrent(page);
    console.log('page', page);
  };
  return (
    <WebLayout title="?????t s??n - Booking Football Pitch">
      {/* <Head>
        <link rel="stylesheet" href="static/scss/css/datepicker.css" />
      </Head> */}
      <BreadCrumb name1="?????t s??n" />
      <Banner title="?????t s??n b??ng th???t d??? d??ng" site="?????ng ??a" hasFormSearch={false} />
      <div className={styles.book}>
        <div className="container">
          <div className="row">
            <div className={`col-4 ${styles.left}`}>
              <h4 className={styles.filter}>
                <span>T??m ki???m</span>
              </h4>
              {/* Chon ngay */}
              <div>
                <p className="fw-bold mt-4 mb-1">Ch???n ng??y</p>
                <div className={styles.datepicker}>
                  <DatePicker
                    onChange={onChangeDate}
                    value={date}
                    className=""
                    style={{ width: '100%' }}
                  />
                </div>
              </div>
              {/* Filter theo th???i gian */}
              <div>
                <p className="fw-bold mt-4 mb-1">Th???i gian</p>
                <div className={styles.time}>
                  <TimePicker
                    onChange={onChangeTime}
                    value={time}
                    minutesInterval={minutesInterval}
                    style={{ width: '100%' }}
                  />
                </div>
              </div>
              {/* Th???i l?????ng tr???n ?????u */}
              <div>
                <p className="fw-bold mt-4 mb-1">Th???i l?????ng tr???n ?????u</p>
                <div className="row">
                  {matchDuration?.map((item, ind) => (
                    <div key={item?.id} className="col-4">
                      <button
                        type="button"
                        className={toggleDuration === ind ? 'btn btn-primary' : 'btn btn-secondary'}
                        style={{ width: '100%' }}
                        onClick={() => setToggleDuration(ind)}
                      >
                        <span className="number">{item?.time}</span> {item?.time && 'Ph??t'}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              {/* Filter theo lo???i s??n */}
              <div>
                <p className="fw-bold mt-4 mb-1">Lo???i s??n</p>
                <div className="row">
                  {pitchSizes?.map((item) => (
                    <div key={item?.id} className="col-4">
                      <button
                        type="button"
                        className={
                          togglePitch === item?.id ? 'btn btn-primary' : 'btn btn-secondary'
                        }
                        style={{ width: '100%' }}
                        onClick={() => setTogglePitch(item?.id)}
                      >
                        <span className="number">{item?.title}</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              <div className="row mt-4 mb-1">
                <div className="col-6">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    style={{ width: '100%', fontSize: '1.25rem' }}
                  >
                    Xo??
                  </button>
                </div>
                <div className="col-6">
                  <button
                    type="button"
                    className="btn btn-primary"
                    style={{
                      width: '100%',
                      fontSize: '1.25rem',
                      backgroundColor: '#198754!important',
                    }}
                  >
                    L???c
                  </button>
                </div>
              </div>
            </div>

            <div className={`col-8 ${styles.right}`}>
              {dataPitch?.slice((current - 1) * PAGE_SIZE, current * PAGE_SIZE)?.map((item) => (
                <li key={item?.id} className={styles.item}>
                  <div className="row">
                    <div className="col-4">
                      <div className={styles.image}>
                        <a href={`/book/${item.id}`}>
                          <img src={item.image} alt={item?.name} />
                        </a>
                      </div>
                    </div>
                    <div className="col-8">
                      <div className={styles.info}>
                        <h5 className={styles.title}>
                          <a href={`/book/${item.id}`}>{item?.name}</a>
                          <span className={`number ${styles.stars}`}>
                            <FontAwesomeIcon icon={faStar} />
                            {item?.vote}/5
                          </span>
                        </h5>
                        <div className={styles.location}>
                          <FontAwesomeIcon icon={faLocationDot} />
                          &nbsp;
                          <span>{item?.address}</span>
                        </div>
                        <div className={styles.price}>
                          Gi??:&nbsp;
                          <span className="number">
                            {' '}
                            {`${formatNumber(`${item?.priceMin}`)} - ${formatNumber(
                              `${item?.priceMax}`
                            )}`}{' '}
                            VN??
                          </span>
                        </div>
                        <div className="d-flex gap-2">
                          {totalTypePitch(item?.typePitch)}&nbsp;s??n
                          {item?.typePitch?.map((child) => (
                            <span key={child?.id} className={styles.badge}>
                              <img src="/static/images/soccer.png" alt="???nh b??ng" width={18} />
                              &nbsp; {child?.type}
                            </span>
                          ))}
                        </div>
                        <div className="mt-2 mb-1 row">
                          <div className="col">
                            <button
                              type="button"
                              className="btn btn-primary"
                              style={{ width: 'inherit' }}
                              onClick={() => router.push(`/book/${item.id}`)}
                            >
                              Xem chi ti???t
                            </button>
                          </div>
                          <div className="col">
                            <button
                              type="button"
                              className="btn btn-primary"
                              style={{ width: 'inherit' }}
                              onClick={() => {
                                setShowModal(!showModal);
                                setData(item);
                              }}
                            >
                              ?????t s??n
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
              {dataPitch?.length > 0 && (
                <Pagination
                  defaultPageSize={PAGE_SIZE}
                  current={current}
                  size="default"
                  total={total}
                  className="paginationPage"
                  onChange={(page) => nextPagination(page)}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <div
          className={`modal fade ${showModal ? 'show' : ''}`}
          id="exampleModal"
          // tabIndex={-1}
          role="dialog"
          style={showModal ? { display: 'block' } : { display: 'none' }}
          // aria-labelledby="exampleModalLabel"
          aria-hidden={!showModal}
          aria-modal={showModal}
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header border-0">
                <h5 className="modal-title text-center w-100" id="exampleModalLabel">
                  {data?.name}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={() => setShowModal(false)}
                >
                  {/* <span aria-hidden="true">??</span> */}
                </button>
              </div>
              <div className="modal-body container">
                <div className="row">
                  <div className="col-lg-6">
                    <p className="fw-bold mb-1">Ch???n ng??y</p>
                    <div className={modals.dateSlot}>
                      <div className="row align-items-center">
                        <div className="col-lg-3">
                          <button type="button" onClick={() => decreaseDate(date)}>
                            <FontAwesomeIcon icon={faAngleLeft} />
                            Ng??y tr?????c
                          </button>
                        </div>
                        <div className="col-lg-6">
                          <p>{getDate(date)}</p>
                        </div>
                        <div className="col-lg-3">
                          <button type="button" onClick={() => increaseDate(date)}>
                            Ng??y sau
                            <FontAwesomeIcon icon={faAngleRight} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <p className="fw-bold mb-1">Th???i gian</p>
                    <div className="row">
                      {matchDuration?.map((item, index) => (
                        <div key={item?.id} className="col">
                          <button
                            type="button"
                            className={
                              toggleDuration === index ? 'btn btn-primary' : 'btn btn-secondary'
                            }
                            style={{ width: '100%' }}
                            onClick={() => setToggleDuration(index)}
                          >
                            <span className="number">{item?.time}</span>
                            {item?.time && 'ph'}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="fw-bold py-2">Ch???n v??? tr?? c??n s???n</p>
                <div className="row overflow-auto mb-3">
                  {data?.typePitch?.map((item, index) => (
                    <div key={item.id} className="col">
                      <button
                        type="button"
                        className={`p-2 w-100 ${modals.pitch} ${
                          togglePitch === index ? 'btn btn-primary' : 'btn btn-secondary'
                        }`}
                        onClick={() => {
                          setTogglePitch(index);
                          setTotalPrice(0);
                        }}
                      >
                        {/* <img src="/static/images/soccer.png" width={15} alt="img" /> */}
                        <span className="mx-2 number"> {item?.type}</span>
                        <span>S??n {index + 1}</span>
                      </button>
                    </div>
                  ))}
                </div>
                <div className="row">
                  {data?.typePitch[togglePitch]?.children?.map((item, ind) => (
                    <div className="col-4" key={item?.id}>
                      <label style={{ width: '100%' }}>
                        <input
                          type="checkbox"
                          name={item?.price}
                          // onChange={(e) => handleChange(e, item)}
                          onClick={(e) => handleClick(e, item)}
                          id=""
                          className="position-absolute"
                          style={{ left: '-100vw' }}
                        />
                        <div
                          // className={`p-3 mb-2 w-100 ${modals.pitch} ${
                          //   timePitch === ind ? 'btn btn-primary' : 'btn btn-secondary'
                          // }`}
                          className={`p-3 mb-2 w-100 ${modals.pitch} btn btn-secondary
                          }`}
                          // style={{height: "80%"}}
                          // onClick={() => setTimePitch(ind)}
                        >
                          <p className="fw-bold mb-1 number">
                            {item?.time} <br />
                            {formatNumber(item?.price)}&nbsp;VN??
                          </p>
                        </div>
                      </label>
                      {/* <input
                        type="checkbox"
                        name=""
                        id=""
                        className="w-100 h-100 position-absolute"
                      />
                      <input type="text" value="" id="a" className="w-100 h-100" />
                      <label htmlFor="a" className="fw-bold mb-1 number position-absolute">
                        {item?.time} <br />
                        {formatNumber(item?.price)}&nbsp;VN??
                      </label> */}
                    </div>
                  ))}
                </div>
              </div>
              {Number(totalPrice) > 0 && (
                <div className="modal-footer">
                  <div className="row w-100 justify-content-center">
                    <div className="col-lg-8">
                      <button
                        type="button"
                        className="btn btn-filter w-100 fw-bolder my-2 text-uppercase"
                      >
                        ?????t ngay (
                        <span className="float-right">
                          <span className="amount mx-1">{formatNumber(totalPrice)}</span>
                        </span>
                        VN??)
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </WebLayout>
  );
};

export default book;
