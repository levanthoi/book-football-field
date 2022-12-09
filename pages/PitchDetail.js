import React, { useState } from 'react';
import { dataPitch, matchDuration } from 'data/data';
import { useRouter } from 'next/router';
import styles from 'static/scss/pages/pitchDetail.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faLocationDot,
  faAngleLeft,
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons';
import dynamic from 'next/dynamic';
import { totalTypePitch } from 'utils/utils';

const WebLayout = dynamic(() => import('layouts/WebLayout.js'), {
  ssr: true,
  loading: () => null,
});

const BreadCrumb = dynamic(() => import('component/BreadCrumb'), {
  ssr: true,
  loading: () => null,
});

const DatePicker = dynamic(() => import('sassy-datepicker'), {
  ssr: true,
  loading: () => null,
});

const PitchDetail = () => {
  //   const router = useRouter();
  const { query } = useRouter();
  const [date, setDate] = useState(new Date());
  const [toggleDuration, setToggleDuration] = useState(0);
  const [showModal, setShowModal] = useState(false);
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
  const onChangeDate = (newDate) => {
    console.log(`New date selected - ${newDate.toString()}`);
    setDate(newDate);
  };
  //   console.log('router', router);
  //   console.log('useRouter()', query.id);
  //   console.log('dataPitch', dataPitch);
  const data = dataPitch?.find((item) => Number(item?.id) === Number(query.id));
  console.log('dataDetail', data);
  return (
    <WebLayout>
      <BreadCrumb name1="Đặt sân" name2={data?.name} />
      <div className={`container py-4 ${styles.detailPitch}`}>
        <h3 className="pb-2">{data?.name}</h3>
        <p className={styles.rate}>
          <span className={`number ${styles.star}`}>
            <FontAwesomeIcon icon={faStar} />
            {data?.vote}
          </span>
          <span className="mx-2 number">{data?.countOffer}&nbsp;</span>đánh giá
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
                <b>Số sân</b>&nbsp;
                {totalTypePitch(data?.typePitch)}
                {data?.typePitch?.map((child) => (
                  <span key={child?.id} className={styles.badge}>
                    <img src="/static/images/soccer.png" alt="ảnh bóng" width={18} />
                    &nbsp; {child?.type}
                  </span>
                ))}
              </p>
              <p>
                <b>Giờ mở cửa</b>&nbsp; 7:00 AM - 8:00 PM
              </p>
              <div className={styles.slide_image}>
                <img
                  src="https://cdn.malaebapp.com/images/stadium/543/777bc7eb/large"
                  alt="sân bóng đá"
                />
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="text-center">
              <p className="fw-bold">Đặt {data?.name}</p>
              <p className="subtitle mb-4">
                Chọn ngày và thời lượng đá để hiển thị sân bóng phù hợp
              </p>
              <DatePicker
                onChange={onChangeDate}
                value={date}
                className=""
                style={{ width: '100%' }}
              />
            </div>
            <p className="fw-bold py-4">Thời lượng đá</p>
            <div className="row">
              {matchDuration?.map((item, index) => (
                <div key={item?.id} className="col-4">
                  <button
                    type="button"
                    className={toggleDuration === index ? 'btn btn-filter' : 'btn btn-secondary'}
                    onClick={() => setToggleDuration(index)}
                  >
                    <span className="number">{item?.time}</span> {item?.time && 'Phút'}
                  </button>
                </div>
              ))}
            </div>
            <button
              type="button"
              className="btn btn-primary mt-4 text-uppercase"
              style={{ width: '100%' }}
              onClick={() => setShowModal(!showModal)}
            >
              Hiển thị sân trống
            </button>
          </div>
        </div>
        <h5 className="pt-4">Vị trí Sân vận động</h5>
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
        <h5 className="pt-4">Tiện ích tại sân</h5>
        <div className={styles.line} />
        <div className="row pt-4">
          <div className="col my-1">
            <div className={styles.facilities}>
              <img src="/static/images/facilities/ball.png" width={40} alt="img" />
              <span className="ml-2"> Bóng</span>
            </div>
          </div>
          <div className="col my-1">
            <div className={styles.facilities}>
              <img src="/static/images/facilities/shirt.png" width={40} alt="img" />
              <span className="ml-2"> Quần áo</span>
            </div>
          </div>
          <div className="col my-1">
            <div className={styles.facilities}>
              <img src="/static/images/facilities/shower.png" width={40} alt="img" />
              <span className="ml-2"> Khu tắm rửa</span>
            </div>
          </div>
          <div className="col my-1">
            <div className={styles.facilities}>
              <img src="/static/images/facilities/toilet.png" width={40} alt="img" />
              <span className="ml-2"> Khu vệ sinh</span>
            </div>
          </div>
          <div className="col my-1">
            <div className={styles.facilities}>
              <img src="/static/images/facilities/water.png" width={40} alt="img" />
              <span className="ml-2"> Nước uống</span>
            </div>
          </div>
        </div>
        <h5 className="pt-4">Đánh giá</h5>
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
              <h6 className="fw-bold">Có 9 đánh giá về sân vận động này</h6>
            </div>
          </div>
        </div> */}
      </div>
      {/* Modal */}
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
                  {/* <span aria-hidden="true">×</span> */}
                </button>
              </div>
              <div className="modal-body container">
                <div className="row">
                  <div className="col-lg-6">
                    <p className="fw-bold mb-1">Chọn ngày</p>
                    <div className={styles.dateSlot}>
                      <div className="row align-items-center">
                        <div className="col-lg-3">
                          <button type="button" onClick={() => decreaseDate(date)}>
                            <FontAwesomeIcon icon={faAngleLeft} />
                            Ngày trước
                          </button>
                        </div>
                        <div className="col-lg-6">
                          <p>{getDate(date)}</p>
                        </div>
                        <div className="col-lg-3">
                          <button type="button" onClick={() => increaseDate(date)}>
                            Ngày sau
                            <FontAwesomeIcon icon={faAngleRight} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <p className="fw-bold mb-1">Thời gian</p>
                    <div className="row">
                      {matchDuration?.map((item, index) => (
                        <div key={item?.id} className="col-4">
                          <button
                            type="button"
                            className={
                              toggleDuration === index ? 'btn btn-filter' : 'btn btn-secondary'
                            }
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
                <p className="fw-bold">Chọn vị trí còn sẵn</p>
                <div className="d-none overflow-auto overflowSlots d-md-flex mb-3">
                  {data?.typePitch?.map((item, index) => (
                    <div key={item.id} className="me-3 w-100">
                      <div className="availableSlots p-2">
                        <img src="/static/images/soccer.png" width={30} alt="img" />
                        <span className="textG mx-2"> {item?.type}</span>
                        <span>Sân {index + 1}</span>
                      </div>
                      {/* <div>
                        <div className="row px-3">
                          <div className="col-md p-1">
                            <p className="mb-2 textSmall">Buổi sáng</p>
                            <button
                              className="btn 
                                                  
                                                  
                                                  
                                                      btnTimeS w-100 p-3 mb-2 
                                                        
                                                  "
                            >
                              <p className="fw-bold mb-1">
                                06:30 PM <br />
                                20 BHD
                              </p>
                            </button>
                            <button
                              className="btn 
                                                  
                                                  
                                                  
                                                      btnTimeS w-100 p-3 mb-2 
                                                        
                                                  "
                            >
                              <p className="fw-bold mb-1">
                                07:00 PM <br />
                                20 BHD
                              </p>
                            </button>
                            <button
                              className="btn 
                                                  
                                                  
                                                  
                                                      btnTimeS w-100 p-3 mb-2 
                                                        
                                                  "
                            >
                              <p className="fw-bold mb-1">
                                07:30 PM <br />
                                20 BHD
                              </p>
                            </button>
                            <button
                              className="btn 
                                                  
                                                  
                                                  
                                                      btnTimeS w-100 p-3 mb-2 
                                                        
                                                  "
                            >
                              <p className="fw-bold mb-1">
                                08:00 PM <br />
                                20 BHD
                              </p>
                            </button>
                            <button
                              className="btn 
                                                  
                                                  
                                                  
                                                      btnTimeS w-100 p-3 mb-2 
                                                        
                                                  "
                            >
                              <p className="fw-bold mb-1">
                                08:30 PM <br />
                                20 BHD
                              </p>
                            </button>
                            <button
                              className="btn 
                                                  
                                                  
                                                  
                                                      btnTimeS w-100 p-3 mb-2 
                                                        
                                                  "
                            >
                              <p className="fw-bold mb-1">
                                09:00 PM <br />
                                20 BHD
                              </p>
                            </button>
                            <button
                              className="btn 
                                                  
                                                  
                                                  
                                                      btnTimeS w-100 p-3 mb-2 
                                                        
                                                  "
                            >
                              <p className="fw-bold mb-1">
                                09:30 PM <br />
                                20 BHD
                              </p>
                            </button>
                            <button
                              className="btn 
                                                  
                                                  
                                                  
                                                      btnTimeS w-100 p-3 mb-2 
                                                        
                                                  "
                            >
                              <p className="fw-bold mb-1">
                                10:00 PM <br />
                                20 BHD
                              </p>
                            </button>
                          </div>
                        </div>
                      </div> */}
                    </div>
                  ))}
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </WebLayout>
  );
};

export default PitchDetail;
