import styles from 'static/scss/sections/new.module.scss';

export default function New({ data, hasButton, pointer, handleClick }) {
  return (
    <div
      className={`col card ${styles.new_card} ${pointer ? 'pointer' : ''}`}
      onClick={handleClick}
    >
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
      {hasButton ? (
        <div className="card-button">
          <button className="btn btn-primary">Xem chi tiết</button>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
