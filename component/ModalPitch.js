import React, { useState } from 'react';

const ModalPitch = ({ data }) => {
  const [date, setDate] = useState(new Date());
  const [toggleDuration, setToggleDuration] = useState(-99);
  const [togglePitch, setTogglePitch] = useState(-99);
  // const [timePitch, setTimePitch] = useState(-99);
  const [totalPrice, setTotalPrice] = useState(0);
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
  // const handleChange = (e, item) => {
  //   console.log('e', e);
  //   console.log('item', item);
  // };
  const handleClick = (e, item) => {
    if (e.target.checked) setTotalPrice((prePrice) => Number(prePrice) + Number(item.price));
    else if (!e.target.checked && Number(totalPrice) > 0)
      setTotalPrice((prePrice) => Number(prePrice) - Number(item.price));
    // console.log('e', e.target.checked);
    // console.log('item', item);
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
                      setTogglePitch(index);
                      setTotalPrice(0);
                    }}
                  >
                    {/* <img src="/static/images/soccer.png" width={15} alt="img" /> */}
                    <span className="mx-2 number"> {item?.type}</span>
                    <span>Sân {index + 1}</span>
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
                      // className={`p-3 mb-2 w-100 ${styles.pitch} ${
                      //   timePitch === ind ? 'btn btn-primary' : 'btn btn-secondary'
                      // }`}
                      className={`p-3 mb-2 w-100 ${styles.pitch} btn btn-secondary
                          }`}
                      // style={{height: "80%"}}
                      // onClick={() => setTimePitch(ind)}
                    >
                      <p className="fw-bold mb-1 number">
                        {item?.time} <br />
                        {formatNumber(item?.price)}&nbsp;VNĐ
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
                        {formatNumber(item?.price)}&nbsp;VNĐ
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
