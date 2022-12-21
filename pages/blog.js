import BreadCrumb from 'component/BreadCrumb';
import BlogSideBar from 'component/sections/BlogSideBar';
import New from 'component/sections/New';
import { dataCategories, dataNews } from 'data/data';
import WebLayout from 'layouts/WebLayout';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import cate from 'static/scss/listCategory.module.scss';
import styles from 'static/scss/pages/blog.module.scss';

// import { blogs } from 'models/blogsModel';
// import withDva from 'utils/store';
// import models from 'models';

// const PAGE_SIZE = 6;
const Blog = () => {
  const [active, setActive] = useState(0);
  const [listBlog, setListBlog] = useState(dataNews);
  const [articles, setArticles] = useState([]);

  const dispatch = useDispatch();

  const handleClickCategory = (index, idCurrent) => {
    setActive(index);
    if (idCurrent === 40) {
      setListBlog(dataNews);
      return;
    }
    const listCurrent = dataNews.filter((item) => {
      return item.idCategory === idCurrent;
    });

    setListBlog(listCurrent);
  };

  const fetchArticles = () => {
    console.log('sa');
    dispatch({
      type: 'blogs/fetchAllArticle',
      // payload: {
      //   filter: {
      //     status: true,
      //     categoriesId: data.id,
      //     sitesId: dataSite.id,
      //   },
      //   range: [indexOfFirst * indexOfLast, (indexOfFirst + 1) * indexOfLast - 1],
      // },
      callback: (response) => {
        console.log('respo', response);
        if (response.success) {
          const { list } = response.result;
          setArticles(list);
        }
      },
    });
  };
  useEffect(() => {
    fetchArticles();
  }, []);
  console.log('articles', articles);

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
                  <a href={`/blog/detail/${item?.id}`} className="col-4" key={item?.id}>
                    <New data={item} hasButton={false} pointer />
                  </a>
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

export default Blog;
// export default withDva((state) => state.blogs)(Blog);
// export default connect(mapStateToProps)(Blog);
