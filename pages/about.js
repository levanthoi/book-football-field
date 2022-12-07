import React, { useState } from 'react';
import BreadCrumb from 'component/BreadCrumb';
import WebLayout from 'layouts/WebLayout';
import { dataCategories } from 'data/data';
import cate from 'static/scss/listCategory.module.scss';
import styles from 'static/scss/about.module.scss';

const about = () => {
  const [active, setActive] = useState(0);
  console.log(active);
  return (
    <WebLayout title="Giới thiệu về chúng tôi">
      <BreadCrumb name1="Giới thiệu" />
      <div className="container">
        <ul className={cate.list_category}>
          {dataCategories[0]?.children?.map((item, index) => (
            <li
              key={item?.id}
              className={`${active === index ? 'active' : ''} ${cate.category_item}`}
              onClick={() => setActive(index)}
            >
              {item?.title}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.about}>
        <div className="container">
          <h2 className={styles.title}>{dataCategories[0]?.children[active]?.title}</h2>
          {/* Content */}
          <div
            className={styles.content_about}
            dangerouslySetInnerHTML={{ __html: dataCategories[0]?.children[active]?.content }}
          />
        </div>
      </div>
    </WebLayout>
  );
};

export default about;
