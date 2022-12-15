import React from 'react';
import styles from 'static/scss/sections/blogSideBar.module.scss';
import { dataNews } from 'data/data';

export default function BlogSideBar() {
  const sliceDataNewOfften = dataNews?.slice(0, 4);
  const sliceDataNewBest = dataNews?.slice(4, 8);

  return (
    <div className={`${styles.sidebar}`}>
      <div className={styles.best_often}>
        <div className={styles.title}>
          <h3>Tin xem nhiều</h3>
        </div>
        <div className={styles.list_new}>
          {sliceDataNewOfften?.map((item) => {
            return (
              <div className={`${styles.new_item} row`} key={item?.id}>
                <div className={`${styles.new_image} col-4`}>
                  <img src={item.image} alt={item.title} />
                </div>
                <div className={`${styles.new_title} col-8`}>
                  <a href={`/blog/detail/${item.id}`}>{item.title}</a>
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
                  <img src={item.image} alt={item.title} />
                </div>
                <div className={`${styles.new_title} col-8`}>
                  <a href={`/blog/${item.id}`}>{item.title}</a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
