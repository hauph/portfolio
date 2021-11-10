import { createStore } from 'vuex';


export const store = createStore({
  state: {
    userData: {},
  },
  mutations: {
    setUserData(state, userData) {
        state.userData = userData;
    }
  },
  actions: {},
  modules: {},
});
