import Vue from 'vue';
import Vuex from 'vuex';

import indexModule from './index/index'; //首页

Vue.use(Vuex);

const state = {
    indexColumn:''
}

const getters = {

}

const mutations = {

}

const actions = {

}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    index: indexModule
  }
})
