import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { matchDuration } from 'data/data';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from 'static/scss/sections/modal.module.scss';
import { formatDate } from 'utils/helper';
import { formatNumber } from 'utils/utils';

const NEXT = 'next';
const PREV = 'prev';

const ModalPitch = (props) => {
  // console.log('props', props);
  const router = useRouter();
  const dispatch = useDispatch();

  const {
    data,
    date,
    toggleDuration,
    togglePitch,
    handleClose,
    handleSelectedDate,
    handleSelectedTime,
    handleSelectedPitch,
  } = props;

  const [totalPrice, setTotalPrice] = useState(0);
  const [toggleTime, setToggleTime] = useState(-99);
  const [pitch, setPitch] = useState({});

  const handleClick = (item) => {
    // if (e.target.checked) setTotalPrice((prePrice) => Number(prePrice) + Number(item.price));
    // else if (!e.target.checked && Number(totalPrice) > 0)
    //   setTotalPrice((prePrice) => Number(prePrice) - Number(item.price));
    setPitch(item);
    setToggleTime(item?.id);
    setTotalPrice(0);
    setTotalPrice((prePrice) => Number(prePrice) + Number(item.price));
  };
  // const [date, setDate] = useState(new Date());

  // const todayDate = new Date();

  // const increaseDate = (day) => {
  //   todayDate.setDate(day.getDate() + 1);
  //   setDate(todayDate);
  // };
  // const decreaseDate = (day) => {
  //   todayDate.setDate(day.getDate() - 1);
  //   setDate(todayDate);
  // };
  // const onChangeDate = (newDate) => {
  //   console.log(`New date selected - ${newDate.toString()}`);
  //   setDate(newDate);
  // };
  // const handleClick = (e, item) => {
  //   if (e.target.checked) setTotalPrice((prePrice) => Number(prePrice) + Number(item.price));
  //   else if (!e.target.checked && Number(totalPrice) > 0)
  //     setTotalPrice((prePrice) => Number(prePrice) - Number(item.price));
  // };

  // console.log('data', data);
  // console.log('date', date);

  const handleSubmit = () => {
    const duration = matchDuration[toggleDuration];
    const newData = {
      data,
      date,
      duration,
      pitch,
    };
    // const newData = [date, duration, pitch];
    // console.log('duration', duration);
    // console.log('pitch', pitch);
    // console.log('date', date);
    // console.log('newData', newData);
    dispatch({
      type: 'cart/increaseItem',
      product: newData,
    });
    router.push(`/checkout`);
  };
  return (
    <div
      className="modal fade show"
      id="exampleModal"
      role="dialog"
      style={{ display: 'block' }}
      aria-hidden="false"
      aria-modal="true"
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
              onClick={() => handleClose()}
            />
          </div>
          <div className="modal-body container">
            <div className="row">
              <div className="col-lg-6">
                <p className="fw-bold mb-1">Chọn ngày</p>
                <div className={styles.dateSlot}>
                  <div className="row align-items-center">
                    <div className="col-lg-3">
                      <button type="button" onClick={() => handleSelectedDate(date, PREV)}>
                        <FontAwesomeIcon icon={faAngleLeft} />
                        Ngày trước
                      </button>
                    </div>
                    <div className="col-lg-6">
                      <p>{formatDate(date)}</p>
                    </div>
                    <div className="col-lg-3">
                      <button type="button" onClick={() => handleSelectedDate(date, NEXT)}>
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
                    <div key={item?.id} className="col">
                      <button
                        type="button"
                        className={
                          toggleDuration === index ? 'btn btn-primary' : 'btn btn-secondary'
                        }
                        style={{ width: '100%' }}
                        onClick={() => handleSelectedTime(index)}
                      >
                        <span className="number">{item?.time}</span>
                        {item?.time && 'ph'}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <p className="fw-bold py-2">Chọn vị trí còn sẵn</p>
            <div className="row overflow-auto mb-3">
              {data?.typePitch?.map((item, index) => (
                <div key={item.id} className="col">
                  <button
                    type="button"
                    className={`p-2 w-100 ${styles.pitch} ${
                      togglePitch === index ? 'btn btn-primary' : 'btn btn-secondary'
                    }`}
                    onClick={() => {
                      handleSelectedPitch(index);
                      setTotalPrice(0);
                    }}
                  >
                    <span className="mx-2 number"> {item?.type}</span>
                    <span>Sân {index + 1}</span>
                  </button>
                </div>
              ))}
            </div>
            <div className="row">
              {data?.typePitch[togglePitch]?.children?.map((item, ind) => (
                <div className="col-4" key={item?.id} onClick={() => handleClick(item)}>
                  <div
                    className={`p-3 mb-2 w-100 ${styles.pitch} ${
                      toggleTime === item?.id ? 'btn btn-primary ' : 'btn btn-secondary'
                    } `}
                  >
                    <p className="fw-bold mb-1 number">
                      {item?.time} <br />
                      {formatNumber(item?.price)}&nbsp;VNĐ
                    </p>
                  </div>
                  {/* <label style={{ width: '100%' }}>
                    <input
                      type="radio"
                      name={item?.price}
                      onClick={(e) => handleClick(e, item)}
                      id=""
                      className="position-absolute"
                      style={{ left: '-100vw' }}
                    />
                    <div
                      className={`p-3 mb-2 w-100 ${styles.pitch} btn btn-secondary
                          }`}
                    >
                      <p className="fw-bold mb-1 number">
                        {item?.time} <br />
                        {formatNumber(item?.price)}&nbsp;VNĐ
                      </p>
                    </div>
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
                    onClick={() => handleSubmit()}
                  >
                    Đặt ngay (
                    <span className="float-right">
                      <span className="amount mx-1">{formatNumber(totalPrice)}</span>
                    </span>
                    VNĐ)
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModalPitch;
