import styles from 'static/scss/sections/new.module.scss';

export default function New({ data }) {
  return (
    <div className={`col card ${styles.new_card}`}>
      <div className="card-image">
        <img src={data.image} />
      </div>
      <div className={styles.card_content}>
        <div className={styles.name}>
          <h5>{data.name}</h5>
          {/* Element Sao */}
          <p className={styles.description}>{data.description}</p>
        </div>
      </div>
      <div className="card-button">
        <button className="btn btn-primary">Xem chi tiết</button>
      </div>
    </div>
  );
}
