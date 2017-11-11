import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import rent from './modules/rent'
import settings from './modules/settings'
import bonus from './modules/bonus'

Vue.use(Vuex)

import state from './state'
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    auth,
    rent,
    settings,
    bonus
  }
})
