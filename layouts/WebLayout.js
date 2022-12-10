import React, { createContext, useState, useEffect } from 'react';
import Head from 'next/head';
import Header from 'component/header/header';
import Footer from 'component/footer/footer';
import styles from 'static/scss/layout.module.scss';
import FormLogin from 'component/formLogin/FormLogin';
import FormSignUp from 'component/formSignup/FormSignUp';
import FormForgetPass from 'component/formForgetPass/FormForgetPass';

// let cssUrl1 = `/static/scss/layout.scss`;
// let cssUrl2 = `/static/scss/global.scss`;
// if (process.env.NODE_ENV === 'production') {
//   const folderCss = '_next/static/web/css';
//   cssUrl0 = `${publicRuntimeConfig.APP_URL}/${folderCss}/owl.carousel.css`;
// }

export const ShowFormContext = createContext();

const WebLayout = ({ children, title }) => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showForgetPass, setShowForgetPass] = useState(false);

  useEffect(() => {
    console.log(1);
  }, [showLogin, showSignUp, setShowForgetPass]);
  return (
    <React.Fragment>
      <ShowFormContext.Provider
        value={{
          showLogin,
          setShowLogin,
          showSignUp,
          setShowSignUp,
          showForgetPass,
          setShowForgetPass,
        }}
      >
        <Head>
          {/* <link rel="stylesheet" href={`${cssUrl1}`} type="text/css" media="all" />
        <link rel="stylesheet" href={`${cssUrl2}`} type="text/css" media="all" /> */}
          <title>{title}</title>
        </Head>
        <Header styles={styles} />
        <div
          className={`${styles.overlay} ${showLogin | showSignUp | showForgetPass ? 'show' : ''}`}
          onClick={() => {
            setShowLogin(false);
            setShowSignUp(false);
            setShowForgetPass(false);
          }}
        ></div>
        <FormLogin />
        <FormSignUp />
        <FormForgetPass />
        <main className={styles.site_content_page}>{children}</main>
        <Footer styles={styles} />
      </ShowFormContext.Provider>
    </React.Fragment>
  );
};

export default WebLayout;
