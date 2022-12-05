import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Footer = ({ styles }) => {
  return (
    <div className={styles.footer}>
      <div className="container">
        <div className="row">
          <div className={`col-4 ${styles.left}`}>
            <div className={styles.title}>
              <div className="logo d-flex align-items-center">
                <img src="static/images/logo.png" alt="logo" />
                <h4 className={styles.text}>Booking Football Pitch</h4>
              </div>
            </div>
            <ul>
              <li className={styles.item_left}>
                <FontAwesomeIcon icon={faLocationDot} />
                <span className={styles.subtitle}>Đại học Thủy Lợi</span>
              </li>
              <li className={styles.item_left}>
                <FontAwesomeIcon icon={faLocationDot} />
                <span className={styles.subtitle}>Đại học Thủy Lợi</span>
              </li>
              <li className={styles.item_left}>
                <FontAwesomeIcon icon={faLocationDot} />
                <span className={styles.subtitle}>Đại học Thủy Lợi</span>
              </li>
              <li className={styles.item_left}>
                <FontAwesomeIcon icon={faLocationDot} />
                <span className={styles.subtitle}>Đại học Thủy Lợi</span>
              </li>
            </ul>
          </div>
          <div className="col-4">
            <h4 className={styles.text}>Hình ảnh đẹp</h4>
          </div>
          <div className="col-4">
            <h4 className={styles.text}>Kết nối với chúng tôi</h4>
          </div>
        </div>
        <div className={styles.copyright}>@2022 Copyright By Nhóm 13 - Ca 2 - 63CNTT1</div>
      </div>
    </div>
  );
};

export default Footer;
