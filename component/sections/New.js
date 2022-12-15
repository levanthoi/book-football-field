import styles from 'static/scss/sections/new.module.scss';

export default function New({ data, hasButton, pointer }) {
  return (
    <div className={`col card ${styles.new_card} ${pointer ? 'pointer' : ''}`}>
      <div className="card-image">
        <img src={data?.image} />
      </div>
      <div className={styles.card_content}>
        <div className={styles.name}>
          <h5>{data?.title}</h5>
          {/* Element Sao */}
          <p className={styles.description}>{data?.description}</p>
        </div>
      </div>
      {hasButton ? (
        <div className="card-button">
          <a href={`/blog/detail/${data?.id}`} className="btn btn-primary">
            Xem chi tiết
          </a>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
