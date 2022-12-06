import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope, faGlobeAsia } from '@fortawesome/free-solid-svg-icons';

const Footer = ({ styles }) => {
  return (
    <div className={styles.footer}>
      <div className="container">
        <div className="row flex-nowrap">
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
                <FontAwesomeIcon icon={faPhone} />
                <span className={styles.subtitle}>0123456789</span>
              </li>
              <li className={styles.item_left}>
                <FontAwesomeIcon icon={faEnvelope} />
                <span className={styles.subtitle}>datsanonline@gmail.com</span>
              </li>
              <li className={styles.item_left}>
                <FontAwesomeIcon icon={faGlobeAsia} />
                <span className={styles.subtitle}>Đặt sân bóng online lớn nhất Hà Nội</span>
              </li>
            </ul>
          </div>
          <div className={`col-4 ${styles.center}`}>
            <h4 className={styles.text}>Hình ảnh đẹp</h4>
            <div className={styles.list_images}>
              <ul className="row">
                <li className="col-4">
                  <img src="../../static/images/bestscore.jfif" />
                </li>
                <li className="col-4">
                  <img src="../../static/images/pitchfb3.jfif" />
                </li>
                <li className="col-4">
                  <img src="../../static/images/fbwc.jfif" />
                </li>
              </ul>
              <ul className="row">
                <li className="col-4">
                  <img src="../../static/images/ffworldcup.jfif" />
                </li>
                <li className="col-4">
                  <img src="../../static/images/kingfb.jfif" />
                </li>
                <li className="col-4">
                  <img src="../../static/images/pitchfb2.jfif" />
                </li>
              </ul>
              <ul className="row">
                <li className="col-4">
                  <img src="../../static/images/fbwc.jfif" />
                </li>
                <li className="col-4">
                  <img src="../../static/images/pitchfb3.jfif" />
                </li>
                <li className="col-4">
                  <img src="../../static/images/kingfb.jfif" />
                </li>
              </ul>
            </div>
          </div>
          <div className={`col-4 ${styles.right}`}>
            <h4 className={styles.text}>Kết nối với chúng tôi</h4>
          </div>
        </div>
        <div className={styles.copyright}>@2022 Copyright By Nhóm 13 - Ca 2 - 63CNTT1</div>
      </div>
    </div>
  );
};

export default Footer;
