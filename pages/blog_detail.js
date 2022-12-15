import React from 'react';
import WebLayout from 'layouts/WebLayout';
import BreadCrumb from 'component/BreadCrumb';
import BlogSideBar from 'component/sections/BlogSideBar';
import { useRouter } from 'next/router';
import styles from 'static/scss/pages/blog_detail.module.scss';
import { dataNews } from 'data/data';

const BlogDetail = () => {
  const router = useRouter();
  const blogId = Number(router.query.id);
  const blog = dataNews.filter((item) => {
    return item.id === blogId;
  });
  return (
    <WebLayout title={blog[0]?.title}>
      <BreadCrumb name1="Tin tức" />
      <div className="container ">
        <div className="row mt-5">
          <div className={`${styles.content_main} col-8`}>
            <div>
              <h2 className={styles.title}>{blog[0]?.title}</h2>
            </div>
            <div className={styles.image}>
              <img src={blog[0]?.image} />
            </div>
            <div
              //   className={styles.content_about}
              dangerouslySetInnerHTML={{ __html: blog[0]?.content }}
            />
          </div>
          <div className="col-4">
            <BlogSideBar />
          </div>
        </div>
      </div>
    </WebLayout>
  );
};

export default BlogDetail;
