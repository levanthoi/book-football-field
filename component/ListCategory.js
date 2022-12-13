import React, { useState } from 'react';
import styles from 'static/scss/listCategory.module.scss';
import { useRouter } from 'next/router';

const ListCategory = ({ data }) => {
  const [active, setActive] = useState(0);
  const router = useRouter();
  const urlParent = data?.category?.urlSlug;
  const handleClick = (e, pos, item) => {
    e.preventDefault();
    setActive(pos);
    router.push(`/${urlParent}/${item?.urlSlug}`);
  };
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
          <li key={item?.id} className={`${styles.category_item}`}>
            <a
              href={`/${urlParent}/${item?.urlSlug}`}
              className={`${active === index ? 'active' : ''} `}
              onClick={(e) => handleClick(e, index, item)}
            >
              {item?.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListCategory;
