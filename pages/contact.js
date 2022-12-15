import React from 'react';
import styles from 'static/scss/pages/contact.module.scss';
import dynamic from 'next/dynamic';

const WebLayout = dynamic(() => import('layouts/WebLayout.js'), {
  ssr: true,
  loading: () => null,
});
const BreadCrumb = dynamic(() => import('component/BreadCrumb'), {
  ssr: true,
  loading: () => null,
});

const contact = () => {
  return (
    <WebLayout title="Liên hệ - Booking Football Pitch">
      <BreadCrumb name1="Liên hệ" />
      <div className={styles.contact}>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <h2>Liên hệ với chúng tôi</h2>
              <p className={styles.description}>
                Chúng tôi rất muốn liên lạc với bạn để hiểu thêm về nhu cầu của bạn. Gửi cho chúng
                tôi một tin nhắn hoặc gọi để có được một báo giá.
              </p>
              <h5 className={styles.title}>Địa chỉ</h5>
              <p className={styles.description}>175 Tây Sơn, P.Khương Thượng, Q.Đống Đa, Hà Nội</p>
              <h5 className={styles.title}>Điện thoại</h5>
              <p className={styles.description}>0392193993</p>
              <h5 className={styles.title}>Email</h5>
              <p className={styles.description}>datsanonline@gmail.com</p>
            </div>
            <div className="col-6">
              <form>
                <div className="form-group my-4">
                  {/* <label htmlFor="exampleInputEmail1">Email address</label> */}
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Email của bạn"
                  />
                </div>
                <div className="form-group my-4">
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Tiêu đề"
                  />
                </div>
                <div class="form-group my-4">
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Nội dung"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Gửi
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </WebLayout>
  );
};

export default contact;
