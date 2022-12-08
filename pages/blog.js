import React, { useState } from 'react';
import BreadCrumb from 'component/BreadCrumb';
import ListCategory from 'component/ListCategory';
import WebLayout from 'layouts/WebLayout';
import New from 'component/sections/New';
import cate from 'static/scss/listCategory.module.scss';
import styles from 'static/scss/pages/blog.module.scss';
import { dataCategories, dataNews } from 'data/data';
import Link from 'next/link';

const blog = () => {
  // const [active, setActive] = useState(0);

  const sliceDataNewOfften = dataNews.slice(0, 4);
  const sliceDataNewBest = dataNews.slice(4, 8);
  const handleClick = (e) => {
    console.log(e);
  };
  return (
    <WebLayout title="Tin tức - Booking Football Pitch">
      <BreadCrumb name1="Tin tức" />
      <div className="container">
        <div>
          {/* <ul className={cate.list_category}>
            {dataCategories[1]?.children?.map((item, index) => (
              <li
                key={item?.id}
                className={`${active === index ? 'active' : ''} ${cate.category_item}`}
                onClick={() => setActive(index)}
              >
                {item?.title}
              </li>
            ))}
          </ul> */}
          <ListCategory data={dataCategories[1]} />
        </div>
        <div className={`${styles.body_page} row`}>
          <div className={`${styles.content_main} col-8`}>
            <div className="row">
              {dataNews?.map((item) => {
                return (
                  <div className="col-4" key={item?.id}>
                    <New data={item} hasButton={false} handleClick={handleClick} pointer={true} />
                  </div>
                );
              })}
            </div>
            <div className={styles.dots_page}>
              <ul>
                <li className="dot active">1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
              </ul>
            </div>
          </div>
          <div className={`${styles.sidebar} col-4`}>
            <div className={styles.best_often}>
              <div className={styles.title}>
                <h3>Tin xem nhiều</h3>
              </div>
              <div className={styles.list_new}>
                {sliceDataNewOfften?.map((item) => {
                  return (
                    <div className={`${styles.new_item} row`} key={item?.id}>
                      <div className={`${styles.new_image} col-4`}>
                        <img src={item.image} alt={item.name} />
                      </div>
                      <div className={`${styles.new_title} col-8`}>
                        <Link href="/" legacyBehavior>
                          <a>{item.name}</a>
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className={styles.best_new}>
              <div className={styles.title}>
                <h3>Tin mới nhất</h3>
              </div>
              <div className={styles.list_new}>
                {sliceDataNewBest?.map((item) => {
                  return (
                    <div className={`${styles.new_item} row`} key={item?.id}>
                      <div className={`${styles.new_image} col-4`}>
                        <img src={item.image} alt={item.name} />
                      </div>
                      <div className={`${styles.new_title} col-8`}>
                        <Link href="/" legacyBehavior>
                          <a>{item.name}</a>
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </WebLayout>
  );
};

export default blog;
