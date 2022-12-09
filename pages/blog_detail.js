import React from 'react';
import WebLayout from 'layouts/WebLayout';
import BreadCrumb from 'component/BreadCrumb';
import BlogSideBar from 'component/sections/BlogSideBar';
import { useRouter } from 'next/router';
import { dataNews } from 'data/data';
import styles from 'static/scss/pages/blog_detail.module.scss';

const blog_detail = () => {
  const router = useRouter();
  const blogId = Number(router.query.slug);
  const dataBlog = dataNews?.filter((blog) => {
    return blog.id === blogId;
  });
  return (
    <WebLayout title={dataBlog[0]?.name}>
      <BreadCrumb name1="Tin tức" />
      <div className="container ">
        <div className="row mt-5">
          <div className={`${styles.content_main} col-8`}>
            <div>
              <h2 className={styles.title}>{dataBlog[0]?.name}</h2>
            </div>
            <div className={styles.image}>
              <img src={dataBlog[0]?.image} />
            </div>
            <div
              //   className={styles.content_about}
              dangerouslySetInnerHTML={{ __html: dataBlog[0]?.content }}
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

export default blog_detail;
