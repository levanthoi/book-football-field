import React, { useState } from 'react';
import BreadCrumb from 'component/BreadCrumb';
import ListCategory from 'component/ListCategory';
import WebLayout from 'layouts/WebLayout';
import New from 'component/sections/New';
import BlogSideBar from 'component/sections/BlogSideBar';
import styles from 'static/scss/pages/blog.module.scss';
import { dataCategories, dataNews } from 'data/data';
import { useRouter } from 'next/router';

const blog = () => {
  // const [active, setActive] = useState(0);
  const router = useRouter();

  const handleClick = (id) => {
    router.push({
      pathname: '/blog/[blogId]',
      query: { blogId: id },
    });
  };
  return (
    <WebLayout title="Tin tức - Booking Football Pitch">
      <BreadCrumb name1="Tin tức" />
      <div className="container">
        <div>
          {/* <ul className={cate.list_category}>
            {dataCategories[1]?.children?.map((item, index) => (
              <li
                key={item?.id}
                className={`${active === index ? 'active' : ''} ${cate.category_item}`}
                onClick={() => setActive(index)}
              >
                {item?.title}
              </li>
            ))}
          </ul> */}
          <ListCategory data={dataCategories[1]} />
        </div>
        <div className={`${styles.body_page} row`}>
          <div className={`${styles.content_main} col-8`}>
            <div className="row">
              {dataNews?.map((item) => {
                return (
                  <div className="col-4" key={item?.id} onClick={() => handleClick(item?.id)}>
                    <New data={item} hasButton={false} pointer={true} />
                  </div>
                );
              })}
            </div>
            <div className={styles.dots_page}>
              <ul>
                <li className="dot active">1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
              </ul>
            </div>
          </div>
          <div className="col-4">
            <BlogSideBar />
          </div>
        </div>
      </div>
    </WebLayout>
  );
};

export default blog;
