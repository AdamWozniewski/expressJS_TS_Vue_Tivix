import { createStore } from 'vuex'
import makeUtilities from '@/store/modules/utilities';

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    utilities: makeUtilities(),
  }
});
