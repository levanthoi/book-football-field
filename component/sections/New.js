import styles from 'static/scss/sections/new.module.scss';
import { useRouter } from 'next/router';

export default function New({ data, hasButton, pointer }) {
  const router = useRouter();
  const handleClick = (id) => {
    router.push({
      pathname: '/blog/[blogId]',
      query: { blogId: id },
    });
  };
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
          <button className="btn btn-primary" onClick={() => handleClick(data.id)}>
            Xem chi tiết
          </button>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
