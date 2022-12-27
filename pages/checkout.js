import {
  faMoneyBill,
  faCircleInfo,
  faCalendarDays,
  faClock,
  faFutbol,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { dataBanks } from 'data/data';
import dynamic from 'next/dynamic';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from 'static/scss/pages/checkout.module.scss';
import { formatDate } from 'utils/helper';
import { formatNumber } from 'utils/utils';

const WebLayout = dynamic(() => import('layouts/WebLayout.js'), {
  ssr: true,
  loading: () => null,
});
const BreadCrumb = dynamic(() => import('component/BreadCrumb'), {
  ssr: false,
  loading: () => null,
});

const checkout = () => {
  const dispatch = useDispatch();
  const dataCart = useSelector((state) => state.cart.dataCart);

  useEffect(() => {
    dispatch({
      type: 'cart/createCart',
      listProducts: [],
      // cartName: `cart`,
    });
  }, []);
  const { data, date, duration, pitch } = dataCart;
  console.log('dataCart', dataCart);
  return (
    <WebLayout title="Thanh toán - Booking Football Pitch">
      <BreadCrumb name1="Thanh toán" />
      <div className={styles.checkout}>
        <div className="container">
          <div className="row">
            <div className="col-7">
              <div className={styles.title}>
                <FontAwesomeIcon icon={faMoneyBill} className={styles.icon} />
                <h3 className="text-uppercase">Hình thức thanh toán</h3>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios1"
                  defaultValue="option1"
                  defaultChecked=""
                />
                <label className="form-check-label" htmlFor="exampleRadios1">
                  Tiền mặt (Thanh toán tại sân cho nhân viên)
                </label>
              </div>
              {dataBanks?.map((item) => (
                <div key={item.id} className={styles.list_bank}>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios1"
                      defaultValue="option1"
                      defaultChecked=""
                    />
                    <label className="form-check-label" htmlFor="exampleRadios1">
                      Chuyển khoản qua
                    </label>
                    <img src={item?.image} alt="ảnh ngân hàng" />
                  </div>
                  <div className={styles.info_bank}>
                    <p>
                      <span>Số tài khoản:</span>&nbsp;
                      <b>{item?.accountNumber}</b>
                    </p>
                    <p>
                      <span>Tên tài khoản:</span>&nbsp;
                      <b>{item?.accountName}</b>
                    </p>
                    <p>
                      <span>Ngân hàng:</span>&nbsp;
                      <b>{item?.title}</b>
                    </p>
                    <p>
                      <span>Chi nhánh:</span>&nbsp;
                      <b>{item?.branch}</b>
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className={`col-5 pb-5 py-4 ${styles.right}`}>
              <div className={styles.title}>
                <FontAwesomeIcon icon={faCircleInfo} className={styles.icon} />
                <h3 className="text-uppercase">Thông tin đơn hàng</h3>
              </div>
              <div className={styles.info_cart}>
                <div className={styles.info__title}>
                  <div className={styles.info__image}>
                    <img src={data?.image} alt="anh" />
                  </div>
                  <p className="fw-bold mx-2">{data?.name}</p>
                  <p className="number">{formatNumber(pitch?.price)}VND</p>
                </div>
                <div className={styles.info__details}>
                  <div className={styles.item}>
                    <FontAwesomeIcon icon={faCalendarDays} />
                    <p>Thời gian: {formatDate(date)}</p>
                  </div>
                  <div className={styles.item}>
                    <FontAwesomeIcon icon={faClock} />
                    <p>Thời lượng đá: {duration?.time}phút</p>
                  </div>
                  <div className={styles.item}>
                    <FontAwesomeIcon icon={faFutbol} />
                    <p>san 1</p>
                  </div>
                </div>
                <div className={styles.total}>
                  <p>Tổng giá</p>
                  <p className="number">{formatNumber(pitch?.price)}VNĐ</p>
                </div>
              </div>
              {/* <div className={styles.barcode}>

              </div> */}
            </div>
          </div>
        </div>
      </div>
    </WebLayout>
  );
};

export default checkout;
