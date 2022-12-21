import { queryArticleAll } from 'services/blogsRedux';

export default {
  namespace: 'blogs',

  state: {
    // query: {},
    // filter: {},
    dataArticleAll: [],
  },
  effects: {
    *fetchAllArticle({ callback }, { call }) {
      console.log('dasdasd');
      const response = yield call(queryArticleAll);
      // const page = yield select(state => state.users.page);
      console.log('fetchAllArticle', response);
      if (response) {
        // yield put({ type: 'saveArticle', payload: response || {} });
      }
      if (callback) callback(response);
    },
  },

  reducers: {},
};
