// let cartName = 'pitch';
export default {
  namespace: 'pitch',

  state: {
    data: [],
  },
  effects: {
    detail({ payload }, { put }) {
      put({
        type: 'info',
        payload,
      });
    },
    addPitch({ payload }, { put }) {
      put({
        type: 'addPitch',
        payload,
      });
    },
  },

  reducers: {
    addPitch(state, action) {
      console.log('action', action);
      const dataNew = [action.payload.dataPitch];
      // this.state.data = dataNew;
      console.log('dataNew', dataNew);
      // console.log('data', this.state.data);
      return { ...state, data: dataNew };
    },
    info(state, action) {
      console.log('state', state);
      return { ...state, data: action.payload || action.payload.dataPitch };
    },
  },
};
