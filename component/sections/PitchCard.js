import React from 'react';
import styles from 'static/scss/sections/pitchCard.module.scss';
import { totalTypePitch } from 'utils/utils';

export default function PitchCard({ data }) {
  return (
    <div className={`card ${styles.pitch_card} col`}>
      <div className="card-image">
        <img src={data.image} />
      </div>
      <div className={styles.card_content}>
        <div className={styles.name}>
          <h5>{data.name}</h5>
          {/* Element Sao */}
        </div>
        <div className={styles.type}>
          <p>Số sân: {totalTypePitch(data.typePitch)}</p>
        </div>
        <div className={styles.price}>
          <p>
            Giá:{' '}
            <span>
              {data.priceMin}vnđ - {data.priceMax}vnđ
            </span>
          </p>
        </div>
      </div>
      <div className="card-button">
        <button type="button" className="btn btn-primary">
          Đặt sân
        </button>
      </div>
    </div>
  );
}
