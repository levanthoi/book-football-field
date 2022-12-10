import React, { useContext } from 'react';
import { dataMenu } from 'data/data';
import { ShowFormContext } from 'layouts/WebLayout';

const Header = ({ styles }) => {
  const { setShowLogin, setShowSignUp } = useContext(ShowFormContext);
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
            <button type="button" className="btn btn-secondary" onClick={() => setShowSignUp(true)}>
              Đăng kí
            </button>
            <button type="button" className="btn btn-primary" onClick={() => setShowLogin(true)}>
              Đăng nhập
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
