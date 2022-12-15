import React from 'react';
import { useForm } from 'react-hook-form';
import styles from 'static/scss/sections/banner.module.scss';

export default function Banner({ title, site, hasFormSearch }) {
  const { register, handleSubmit } = useForm();
  const onClickSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className={styles.banner}>
      <div className={styles.banner_img}></div>
      <div className={styles.overlay}></div>
      <div className={styles.banner_title}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.suggest}>Tìm Sân Bóng Gần Khu Vực {site}</p>
      </div>
      <div>
        {hasFormSearch ? (
          <div className={styles.form_search}>
            <form onSubmit={handleSubmit(onClickSubmit)}>
              <select {...register('city')}>
                <option value="Hà Nội">Hà Nội</option>
                <option value="Hồ Chí Minh">Hồ Chí Minh</option>
                <option value="Hải Phòng">Hải Phòng</option>
                <option value="Thanh Hóa">Thanh Hóa</option>
                <option value="Vĩnh Phúc">Vĩnh Phúc</option>
              </select>
              <select {...register('district')}>
                <option value="Thanh Xuân">Thanh Xuân</option>
                <option value="Đống Đa">Đống Đa</option>
                <option value="Cầu Giấy">Cầu Giấy</option>
                <option value="Hồ Tây">Hồ Tây</option>
                <option value="Long Biên">Long Biên</option>
              </select>
              <input type="submit" value="Tìm Kiếm" className="btn-primary" />
            </form>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}
