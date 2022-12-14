import React, { useState } from 'react';
import styles from 'static/scss/sections/modal.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { matchDuration } from 'data/data';
import { formatDate } from 'utils/helper';
import { formatNumber } from 'utils/utils';
import { useRouter } from 'next/router';

const NEXT = 'next';
const PREV = 'prev';

const ModalPitch = (props) => {
  // console.log('props', props);
  const router = useRouter();
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

  const handleClick = (e, item) => {
    if (e.target.checked) setTotalPrice((prePrice) => Number(prePrice) + Number(item.price));
    else if (!e.target.checked && Number(totalPrice) > 0)
      setTotalPrice((prePrice) => Number(prePrice) - Number(item.price));
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
                <p className="fw-bold mb-1">Ch???n ng??y</p>
                <div className={styles.dateSlot}>
                  <div className="row align-items-center">
                    <div className="col-lg-3">
                      <button type="button" onClick={() => handleSelectedDate(date, PREV)}>
                        <FontAwesomeIcon icon={faAngleLeft} />
                        Ng??y tr?????c
                      </button>
                    </div>
                    <div className="col-lg-6">
                      <p>{formatDate(date)}</p>
                    </div>
                    <div className="col-lg-3">
                      <button type="button" onClick={() => handleSelectedDate(date, NEXT)}>
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
            <p className="fw-bold py-2">Ch???n v??? tr?? c??n s???n</p>
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
                        {formatNumber(item?.price)}&nbsp;VN??
                      </p>
                    </div>
                  </label>
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
                    onClick={() => router.push('/checkout')}
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
  );
};

export default ModalPitch;
