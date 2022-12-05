import Router from 'next/router';
import NProgress from 'nprogress';
import 'static/scss/partials/reset.scss';
import 'static/scss/css/bootstrap.css';
import 'static/scss/global.scss';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());
function MyApp({ Component, pageProps }) {
  // console.log('pageProps', pageProps);
  // console.log("Component", Component);
  return <Component {...pageProps} />;
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  ctx.roles = [];
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps({ ...ctx });
  }
  const initialNow = Date.now();
  return { pageProps, initialNow };
};

export default MyApp;
