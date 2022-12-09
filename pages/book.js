import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import styles from 'static/scss/pages/book.module.scss';
import { TimePicker } from 'sassy-datepicker';
import { matchDuration, pitchSizes, dataPitch } from 'data/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faLocationDot } from '@fortawesome/free-solid-svg-icons';
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
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState({ hours: 15, minutes: 30 });
  const [toggleDuration, setToggleDuration] = useState(-99);
  const [togglePitch, setTogglePitch] = useState(-99);
  const [total, setTotal] = useState(dataPitch?.length || 6);
  const [current, setCurrent] = useState(1);
  const router = useRouter();

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
    <WebLayout title="Đặt sân - Booking Football Pitch">
      {/* <Head>
        <link rel="stylesheet" href="static/scss/css/datepicker.css" />
      </Head> */}
      <BreadCrumb name1="Đặt sân" />
      <Banner title="Đặt sân bóng thật dễ dàng" site="Đống Đa" hasFormSearch={false} />
      <div className={styles.book}>
        <div className="container">
          <div className="row">
            <div className={`col-4 ${styles.left}`}>
              <h4 className={styles.filter}>
                <span>Tìm kiếm</span>
              </h4>
              {/* Chon ngay */}
              <div>
                <p className="fw-bold mt-4 mb-1">Chọn ngày</p>
                <div className={styles.datepicker}>
                  <DatePicker
                    onChange={onChangeDate}
                    value={date}
                    className=""
                    style={{ width: '100%' }}
                  />
                </div>
              </div>
              {/* Filter theo thời gian */}
              <div>
                <p className="fw-bold mt-4 mb-1">Thời gian</p>
                <div className={styles.time}>
                  <TimePicker
                    onChange={onChangeTime}
                    value={time}
                    minutesInterval={minutesInterval}
                    style={{ width: '100%' }}
                  />
                </div>
              </div>
              {/* Thời lượng trận đấu */}
              <div>
                <p className="fw-bold mt-4 mb-1">Thời lượng trận đấu</p>
                <div className="row">
                  {matchDuration?.map((item) => (
                    <div key={item?.id} className="col-4">
                      <button
                        type="button"
                        className={
                          toggleDuration === item?.id ? 'btn btn-primary' : 'btn btn-secondary'
                        }
                        onClick={() => setToggleDuration(item?.id)}
                      >
                        <span className="number">{item?.time}</span> {item?.time && 'Phút'}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              {/* Filter theo loại sân */}
              <div>
                <p className="fw-bold mt-4 mb-1">Loại sân</p>
                <div className="row">
                  {pitchSizes?.map((item) => (
                    <div key={item?.id} className="col-4">
                      <button
                        type="button"
                        className={
                          togglePitch === item?.id ? 'btn btn-primary' : 'btn btn-secondary'
                        }
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
                    Xoá
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
                    Lọc
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
                          Giá:&nbsp;
                          <span className="number">
                            {' '}
                            {`${formatNumber(`${item?.priceMin}`)} - ${formatNumber(
                              `${item?.priceMax}`
                            )}`}{' '}
                            VNĐ
                          </span>
                        </div>
                        <div className="d-flex gap-2">
                          {totalTypePitch(item?.typePitch)}&nbsp;sân
                          {item?.typePitch?.map((child) => (
                            <span key={child?.id} className={styles.badge}>
                              <img src="/static/images/soccer.png" alt="ảnh bóng" width={18} />
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
                              Xem chi tiết
                            </button>
                          </div>
                          <div className="col">
                            <button
                              type="button"
                              className="btn btn-primary"
                              style={{ width: 'inherit' }}
                            >
                              Đặt sân
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
    </WebLayout>
  );
};

export default book;
