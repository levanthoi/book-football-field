import React, { Component } from 'react';
import dva from 'dva-no-router';
import log from 'utils/log';
// import viData from '@/locales/vi';

const defaultConfig = {
  storeKey: '__NEXT_DVA_STORE__',
  debug: false,
  serializeState: (state) => state,
  deserializeState: (state) => state,
};

function createDvaStore(model, initialState) {
  let app;
  if (initialState) {
    app = dva({
      initialState,
    });
  } else {
    app = dva({});
  }
  const isArray = Array.isArray(model);
  if (isArray) {
    model.forEach((m) => {
      app.model(m);
    });
  } else {
    app.model(model);
  }
  app.router(() => {});
  app.start();
  // console.log(app);
  // eslint-disable-next-line
  const store = app._store;
  return store;
}

export default (model, config) => {
  const configs = {
    ...defaultConfig,
    ...config,
  };
  const isServer = typeof window === 'undefined';

  const initStore = ({ initialState /* , ctx */ }) => {
    const { storeKey } = configs;

    if (isServer) return createDvaStore(model);

    // Memoize store if client
    if (!window[storeKey]) {
      window[storeKey] = createDvaStore(model, initialState);
    }
    return window[storeKey];
  };

  return (App) =>
    class WrappedApp extends Component {
      /* istanbul ignore next */
      static displayName = `withDva(${App.displayName || App.name || 'App'})`;

      static async getInitialProps(appCtx) {
        // console.log("withDva ", new Date())
        /* istanbul ignore next */
        if (!appCtx) throw new Error('No app context');
        /* istanbul ignore next */
        if (!appCtx.ctx) throw new Error('No page context');

        const store = initStore({
          ctx: appCtx.ctx,
        });

        if (configs.debug)
          log('1. WrappedApp.getInitialProps wrapper got the store with state', store.getState());
        const { dispatch } = store;
        // eslint-disable-next-line no-param-reassign
        appCtx.ctx.store = store;
        // eslint-disable-next-line no-param-reassign
        appCtx.ctx.dispatch = dispatch;
        // eslint-disable-next-line no-param-reassign
        appCtx.ctx.isServer = isServer;

        // eslint-disable-next-line no-param-reassign
        appCtx.ctx.roles = [];

        // eslint-disable-next-line no-underscore-dangle
        // let { locale, messages } = appCtx.ctx.req || window.__NEXT_DATA__.props;
        // if (!locale) locale = 'vi';
        // if (!messages) messages = viData;
        // console.log("withDva locale: %o \n messages: %o", locale, messages)

        // eslint-disable-next-line no-param-reassign
        // appCtx.ctx.locale = locale;
        // eslint-disable-next-line no-param-reassign
        // appCtx.ctx.messages = messages;

        let initialProps = {};

        if ('getInitialProps' in App) {
          initialProps = await App.getInitialProps.call(App, appCtx);
        }

        if (configs.debug) log('3. WrappedApp.getInitialProps has store state', store.getState());

        return {
          isServer,
          initialState: configs.serializeState(store.getState()),
          initialProps,
          //   locale,
          //   messages
        };
      }

      constructor(props, context) {
        super(props, context);

        const { initialState } = props;

        if (configs.debug)
          log('4. WrappedApp.render created new store with initialState', initialState);

        this.store = initStore({
          initialState,
        });
      }

      render() {
        const { initialProps, initialState, ...props } = this.props;

        // Cmp render must return something like <Provider><Component/></Provider>
        return <App {...props} {...initialProps} store={this.store} />;
      }
    };
};
