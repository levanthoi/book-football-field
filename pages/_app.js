import models from 'models';
import App from 'next/app';
import Router from 'next/router';
import NProgress from 'nprogress';
import { Provider } from 'react-redux';
import 'static/scss/css/bootstrap.css';
import 'static/scss/css/datepicker.css';
// import 'static/scss/css/draft.css';
import 'static/scss/global.scss';
import 'static/scss/partials/reset.scss';
import withDva from 'utils/withDva';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }

// MyApp.getInitialProps = async ({ Component, ctx }) => {
//   ctx.roles = [];
//   let pageProps = {};
//   if (Component.getInitialProps) {
//     pageProps = await Component.getInitialProps({ ...ctx });
//   }
//   const initialNow = Date.now();
//   return { pageProps, initialNow };
// };

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    ctx.roles = [];
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ...ctx });
    }
    const initialNow = Date.now();
    return { pageProps, initialNow };
  }

  render() {
    const { Component, pageProps, initialNow, store } = this.props;
    console.log('store', store);
    return (
      // <Container>
      <Provider store={store}>
        {/* <IntlProviderWrapper */}
        {/* <TopProgressBar /> */}
        <Component {...pageProps} />
        {/* </IntlProviderWrapper> */}
      </Provider>
      // </Container>
    );
  }
}

export default withDva(models)(MyApp);
