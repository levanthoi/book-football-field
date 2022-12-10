import React from 'react'

const ModalPitch = ({data}) => {
  return (
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
                        <div key={item?.id} className="col">
                          <button
                            type="button"
                            className={
                              toggleDuration === index ? 'btn btn-filter' : 'btn btn-secondary'
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
                          togglePitch === index ? 'btn btn-filter' : 'btn btn-secondary'
                        }`}
                        onClick={() => setTogglePitch(index)}
                      >
                        {/* <img src="/static/images/soccer.png" width={15} alt="img" /> */}
                        <span className="mx-2"> {item?.type}</span>
                        <span>Sân {index + 1}</span>
                      </button>
                    </div>
                  ))}
                </div>
                <div className="row">
                  {data?.typePitch[togglePitch]?.children?.map((item, ind) => (
                    <div className="col-4" key={item?.id}>
                      <button
                        type="button"
                        className={`p-3 mb-2 w-100 ${styles.pitch} ${
                          timePitch === ind ? 'btn btn-primary' : 'btn btn-secondary'
                        }`}
                        onClick={() => setTimePitch(ind)}
                      >
                        <p className="fw-bold mb-1">
                          {item?.time} <br />
                          {formatNumber item?.price}
                        </p>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              <div className="modal-footer">
                <div className="row w-100 justify-content-center">
                  <div className="col-lg-8">
                    <button
                      type="button"
                      className="btn btn-filter w-100 fw-bolder my-2 text-uppercase"
                    >
                      Đặt ngay (
                      <span className="float-right">
                        <span className="amount mx-1">6</span>
                      </span>
                      BHD)
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default ModalPitch