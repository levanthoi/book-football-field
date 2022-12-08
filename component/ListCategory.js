import React, { useState } from 'react';
import styles from 'static/scss/listCategory.module.scss';

const ListCategory = ({ data }) => {
  const [active, setActive] = useState(0);
  return (
    <div className="container">
      {/* <ul className={styles.list_category}>
        {data?.children?.map((item) => (
          <li key={item?.id} className={styles.category_item}>
            {item?.title}
          </li>
        ))}
      </ul> */}
      <ul className={styles.list_category}>
        {data?.children?.map((item, index) => (
          <li
            key={item?.id}
            className={`${active === index ? 'active' : ''} ${styles.category_item}`}
            onClick={() => setActive(index)}
          >
            {item?.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListCategory;
