import React from 'react';
import Head from 'next/head';
import Header from 'component/header/header';
import Footer from 'component/footer/footer';
import styles from 'static/scss/layout.module.scss';

// let cssUrl1 = `/static/scss/layout.scss`;
// let cssUrl2 = `/static/scss/global.scss`;
// if (process.env.NODE_ENV === 'production') {
//   const folderCss = '_next/static/web/css';
//   cssUrl0 = `${publicRuntimeConfig.APP_URL}/${folderCss}/owl.carousel.css`;
// }

const WebLayout = ({ children, title }) => {
  return (
    <React.Fragment>
      <Head>
        {/* <link rel="stylesheet" href={`${cssUrl1}`} type="text/css" media="all" />
        <link rel="stylesheet" href={`${cssUrl2}`} type="text/css" media="all" /> */}
        <title>{title}</title>
      </Head>
      <Header styles={styles} />
      <main className={styles.site_content_page}>{children}</main>
      <Footer styles={styles} />
    </React.Fragment>
  );
};

export default WebLayout;
