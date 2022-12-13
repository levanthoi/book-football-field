import React, { useState } from 'react';
import BreadCrumb from 'component/BreadCrumb';
import ListCategory from 'component/ListCategory';
import WebLayout from 'layouts/WebLayout';
import New from 'component/sections/New';
import BlogSideBar from 'component/sections/BlogSideBar';
import styles from 'static/scss/pages/blog.module.scss';
import cate from 'static/scss/listCategory.module.scss';
import { dataCategories, dataNews } from 'data/data';
import { useRouter } from 'next/router';

const blog = () => {
  const [active, setActive] = useState(0);
  const [listBlog, setListBlog] = useState(dataNews);
  const router = useRouter();

  const handleClick = (id) => {
    if (id !== Number(router.query.slug)) {
      router.push({
        pathname: '/blog/[blogId]',
        query: { blogId: id },
      });
    }
    return;
  };

  const handleClickCategory = (index, idCurrent) => {
    setActive(index);
    if (idCurrent === 40) {
      setListBlog(dataNews);
      return;
    }
    const listCurrent = dataNews.filter((blog) => {
      return blog.idCategory === idCurrent;
    });

    // console.log(listCurrent);

    setListBlog(listCurrent);
  };

  // console.log(listBlog);
  return (
    <WebLayout title="Tin tức - Booking Football Pitch">
      <BreadCrumb name1="Tin tức" />
      <div className="container">
        <div>
          <ul className={cate.list_category}>
            {dataCategories[1]?.children?.map((item, index) => (
              <li
                key={item?.idCategory}
                className={`${active === index ? 'active' : ''} ${cate.category_item}`}
                onClick={() => {
                  handleClickCategory(index, item.idCategory);
                }}
              >
                {item?.title}
              </li>
            ))}
          </ul>
          {/* <ListCategory data={dataCategories[1]} /> */}
        </div>
        <div className={`${styles.body_page} row`}>
          <div className={`${styles.content_main} col-8`}>
            <div className="row">
              {listBlog?.map((item) => {
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
