import { createStore } from 'vuex'
import makeUtilities from '@/store/modules/utilities';
import makeUser from '@/store/modules/user';

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    utilities: makeUtilities(),
    user: makeUser(),
  }
});
