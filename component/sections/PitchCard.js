import React from 'react';
import styles from 'static/scss/sections/pitchCard.module.scss';

export default function PitchCard() {
  return (
    <div className={`${styles.pitch_card} col`}>
      <div className={styles.card_image}>
        <img src="../../static/images/pitchfb.jfif" />
      </div>
      <div className={styles.card_content}>
        <div className={styles.name}>
          <h5>Sân bóng Đại học Thủy Lợi</h5>
          {/* Element Sao */}
        </div>
        <div className={styles.type}>
          <p>Loại sân: 7</p>
        </div>
        <div className={styles.price}>
          <p>
            Giá: <span>200000vnđ - 400000vnđ</span>
          </p>
        </div>
      </div>
      <div className={styles.card_button}>
        <button className="btn btn-primary">Đặt sân</button>
      </div>
    </div>
  );
}
