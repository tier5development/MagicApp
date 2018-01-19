import Vue from 'vue'
import Vuex from 'vuex'
import Auth from './modules/auth';
import Zap from './modules/zap';
import Alert from './modules/alert';
import Users from './modules/users';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    Auth,
    Zap,
    Alert,
    Users
  }
})
