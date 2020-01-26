const state = {
  products: {},
  cart: []
};

const getters = {
  products: state => state.products,
  cart: state => state.cart || []
};

const actions = {
  initStore: ({commit}) => {
    axios.get('static/products.json')
      .then((response) => {
        console.log(response.data.products);
        commit('SET_STORE', response.data.products);
      });
  },
  initCart: ({commit}) => {
    commit('INIT_CART');
  },
  setToCart: ({state, commit}, newValue) => {
    commit('SET_CART', newValue)
    return state.cart
  },
};

const mutations = {
  'SET_STORE'(state, products) {
    state.products = products;
  },
  'INIT_CART' () {
    state.cart = [];
  },
  'SET_CART'(state, productId) {
    state.cart.push(productId);
  }
};

export default {
  state,
  getters,
  actions,
  mutations,
}
