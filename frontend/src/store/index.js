import { createStore } from 'vuex'

export default createStore({
  state: {
    userId: null
  },
  getters: {
    user(state) {
      return state.userId
    },
  },
  mutations: {
    // DELETE_USER(state, userId) {
    //   let users = state.users.filter(u => u.id != userId)
    //   state.users = users;
    //   state.message = 'Account successfully deleted!!'
    // },
  },
  actions: {
    login({ state: state }, userId) {
      state.userId = userId
    }
  },
  modules: {
  }
})
