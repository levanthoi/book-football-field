import React, { useState } from 'react';
import BreadCrumb from 'component/BreadCrumb';
import WebLayout from 'layouts/WebLayout';
import { dataCategories } from 'data/data';
import cate from 'static/scss/listCategory.module.scss';
import styles from 'static/scss/about.module.scss';

import dynamic from 'next/dynamic';

// const ListCategory = dynamic(() => import('component/ListCategory'), {
//   ssr: true,
//   loading: () => null,
// });

const about = () => {
  const [active, setActive] = useState(0);
  const urlParent = dataCategories[0]?.category?.urlSlug;
  const handleClick = (e, pos, item) => {
    e.preventDefault();
    setActive(pos);
    router.push(`/${urlParent}/${item?.urlSlug}`);
  };
  console.log(active);
  return (
    <WebLayout title="Giới thiệu về chúng tôi">
      <BreadCrumb name1="Giới thiệu" />
      <div className="container">
        {/* <ListCategory data={dataCategories[0]} /> */}
        {/* <ul className={cate.list_category}>
          {dataCategories[0]?.children?.map((item, index) => (
            <li
              key={item?.id}
              className={`${cate.category_item}`}
              // onClick={() => setActive(index)}
            >
              <a
                href={`/${urlParent}/${item?.urlSlug}`}
                className={`${active === index ? 'active' : ''} `}
                onClick={(e) => handleClick(e, index, item)}
              >
                {item?.title}
              </a>
            </li>
          ))}
        </ul> */}
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
