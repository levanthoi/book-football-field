import styles from 'static/scss/sections/banner.module.scss';

export default function Banner({ title, site }) {
  return (
    <div className={styles.banner}>
      <div className={styles.banner_img}></div>
      <div className={styles.overlay}></div>
      <div className={styles.banner_title}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.suggest}>Tìm Sân Bóng Gần Khu Vực {site}</p>
      </div>
    </div>
  );
}
