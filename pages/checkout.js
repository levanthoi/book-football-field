import React from 'react';
import styles from 'static/scss/pages/checkout.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBill, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import dynamic from 'next/dynamic';
import { dataBanks } from 'data/data';

const WebLayout = dynamic(() => import('layouts/WebLayout.js'), {
  ssr: true,
  loading: () => null,
});
const BreadCrumb = dynamic(() => import('component/BreadCrumb'), {
  ssr: false,
  loading: () => null,
});

const checkout = () => {
  return (
    <WebLayout title="Thanh toán - Booking Football Pitch">
      <BreadCrumb name1="Thanh toán" />
      <div className={styles.checkout}>
        <div className="container">
          <div className="row">
            <div className="col-6">
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
            <div className="col-6">
              <div className={styles.title}>
                <FontAwesomeIcon icon={faCircleInfo} className={styles.icon} />
                <h3 className="text-uppercase">Thông tin đơn hàng</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </WebLayout>
  );
};

export default checkout;
