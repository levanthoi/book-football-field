import React from 'react';
import styles from 'static/scss/sections/blogSideBar.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { dataNews } from 'data/data';

export default function BlogSideBar() {
  const router = useRouter();
  const sliceDataNewOfften = dataNews?.slice(0, 4);
  const sliceDataNewBest = dataNews?.slice(4, 8);

  const handleClick = (id) => {
    if (id !== Number(router.query.slug)) {
      router.push({
        pathname: '/blog/[blogId]',
        query: { blogId: id },
      });
    }
    return;
  };
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
                  <img src={item.image} alt={item.name} />
                </div>
                <div className={`${styles.new_title} col-8`} onClick={() => handleClick(item?.id)}>
                  <a>{item.name}</a>
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
                <div className={`${styles.new_title} col-8`} onClick={() => handleClick(item.id)}>
                  <a>{item.name}</a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
