import React from 'react';
import styles from 'static/scss/listCategory.module.scss';

const ListCategory = ({ data }) => {
  return (
    <div className="container" style={{ boxShadow: '2px 5px 5px rgba(159, 147, 147, 0.5)' }}>
      <ul className={styles.list_category}>
        {data?.children?.map((item) => (
          <li key={item?.id} className={styles.category_item}>
            {item?.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListCategory;
