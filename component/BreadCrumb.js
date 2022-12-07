import React from 'react';
import styles from 'static/scss/breadcrumb.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import banner from 'static/images/football-grunge-banner.png';

const BreadCrumb = ({ name1, name2 }) => {
  return (
    <div className={styles.breadcrumb}>
      <div className="container">
        <div className={styles.box}>
          <div className={styles.banner}>
            <Image height={70} objectFit="cover" src={banner} alt="banner" />
          </div>
          <ul className={styles.list_item}>
            <li className={styles.breadcrumb_item}>
              <a href="/">Trang chủ</a>
            </li>
            {name1 && <FontAwesomeIcon icon={faAngleRight} />}
            <li className={name2 ? styles.breadcrumb_item : styles.breadcrumb_active}>{name1}</li>
            {name2 && <FontAwesomeIcon icon={faAngleRight} />}
            {name2 && <li className={styles.breadcrumb_item}>{name2}</li>}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
