import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    services: []
  },
  mutations: {
    SET_SERVICES_TO_STORE: (state, services) => {
      state.services = services
    }
  },
  actions: {
    GET_SERVICES_FROM_API ({ commit }) {
      return axios('http://revisor.iceslam.ru/wp-json/wp/v2/posts/?categories=3', {
        method: 'GET'
      })
        .then((response) => {
          commit('SET_SERVICES_TO_STORE', response.data)
        })
    }
  },
  getters: {
    SERVICES (state) {
      return state.services
    }
  },
  modules: {
  }
})
