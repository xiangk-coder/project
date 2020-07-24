import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    layout: 'default',
    user: null,
    menu: null
  },
  mutations: {
    setLayout (state, layout) {
      state.layout = layout
    },
    setUser (state, user) {
      state.user = user
    },
    setMenu (state, menu) {
      state.menu = menu
    }
  },
  actions: {
  },
  modules: {
  }
})
