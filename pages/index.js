import Head from 'next/head';
import WebLayout from 'layouts/WebLayout';
import Banner from 'component/sections/Banner';
import styles from 'static/scss/pages/home.module.scss';
import SliderCustom from 'component/sections/SliderCustom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDot, faCalendarDays, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import PitchCard from 'component/sections/PitchCard';
import New from 'component/sections/New';
import { dataPitch, dataNews } from 'data/data';
export default function Home() {
  const sliceDataNew = dataNews.slice(0, 4);

  return (
    <div>
      <WebLayout title="Đặt sân bóng đá online lớn nhất Hà Nội">
        <div className={styles.site_home_page}>
          <Banner
            title="Đặt Sân Bóng Chưa Bao Giờ Dễ Dàng Hơn Thế"
            site="Đống Đa"
            hasFormSearch={true}
          />
          <div className="container text-center">
            <div className={styles.offer_booking}>
              <h2>
                <img src="../static/images/soccer.png" />
                Đề xuất các sân bóng
                <img src="../static/images/soccer.png" />
              </h2>
              <div className="row">
                <SliderCustom data={dataPitch} />
              </div>
            </div>
            <div className={`row ${styles.score}`}>
              <div className={`col-3 ${styles.score_image}`}>
                <img src="../static/images/score.png" />
              </div>
              <div className={`col-5 ${styles.score_text}`}>
                <h3>
                  Sẵn sàng chấp nhận những <span>thử thách</span> mới ?
                </h3>
              </div>
              <div className={`col-4 ${styles.score_list}`}>
                <h4>Chúng tôi đã có</h4>
                <ul>
                  <li>
                    <p>
                      <span>+500</span> SVĐ đã đăng kí
                      <img src="../static/images/pitch.png" />
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>+10k</span> người đã tham gia
                      <img src="../static/images/player.png" />
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>+100</span> giải đấu đã được tạo
                      <img className="col" src="../static/images/cup.png" />
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.profit}>
              <h2 className={styles.title_section}>
                <div></div>
                Dễ Dàng Đặt Sân Chỉ Trong Vài Phút
                <div></div>
              </h2>
              <div className={`${styles.list_profit} row`}>
                <div className="col">
                  <div>
                    <FontAwesomeIcon icon={faCircleDot} />
                  </div>
                  <h3>Tìm kiếm</h3>
                  <p>Tìm sân bóng đá gần bạn</p>
                </div>
                <div className="col">
                  <div>
                    <FontAwesomeIcon icon={faCalendarDays} />
                  </div>
                  <h3>Lựa chọn</h3>
                  <p>Lựa chọn thời gian phù gợp</p>
                </div>
                <div className="col">
                  <div>
                    <FontAwesomeIcon icon={faCreditCard} />
                  </div>
                  <h3>Thanh toán</h3>
                  <p>Thanh toán nhanh gọn uy tín</p>
                </div>
              </div>
            </div>
            <div className={styles.best_news}>
              <h2 className={styles.title_section}>
                <div></div>
                Tin tức mới nhất
                <div></div>
              </h2>
              <div className="row flex-nowrap">
                {sliceDataNew?.map((item) => {
                  return (
                    <div className="col-3" key={item.id}>
                      <New data={item} hasButton={true} pointer={false} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </WebLayout>
    </div>
  );
}
