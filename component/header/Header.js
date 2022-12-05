import React from 'react';
import { dataMenu } from 'data/data';

const Header = ({ styles }) => {
  return (
    <div className={styles.header}>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <div className={styles.left}>
              <div className={styles.logo}>
                <img src="static/images/logo.png" alt="logo" />
              </div>
              <h3 className={styles.text_logo}>BFP</h3>
            </div>
          </div>
          <div className="col-6 m-auto">
            <div className={styles.list_menu}>
              {dataMenu?.map((menu) => (
                <li key={menu.id} className={styles.item_menu}>
                  <a href={`/${menu?.urlSlug}`}>{menu?.title}</a>
                </li>
              ))}
            </div>
          </div>
          <div className={`col-3 ${styles.right}`}>
            <button type="button" className="btn btn-secondary">
              Đăng kí
            </button>
            <button type="button" className="btn btn-primary">
              Đăng nhập
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
