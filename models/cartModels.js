let cartName = 'cart';
export default {
  namespace: 'cart',

  state: {
    dataCart: {},
  },
  effects: {
    createCart({ listProducts }, { put }) {
      put({
        type: 'createCart',
        listProducts,
      });
    },
    increaseItem({ product }, { put }) {
      put({
        type: 'increaseItem',
        product,
      });
    },
  },

  reducers: {
    createCart(state, action) {
      cartName = action.cartName || cartName;
      const listProducts = localStorage.getItem(cartName)
        ? JSON.parse(localStorage.getItem(cartName))
        : action.listProducts || [];
      return {
        ...state,
        dataCart: listProducts,
      };
    },
    increaseItem(state, action) {
      // console.log('state', state);
      // console.log('action', action);
      // let {dataCart} = state;
      const { product } = action;
      const newItem = { ...product };
      localStorage.setItem(cartName, JSON.stringify(newItem));
      // console.log('newItem', newItem);

      return {
        ...state,
        dataCart: newItem,
      };
    },
  },
};
