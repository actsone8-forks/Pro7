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
    // TODO add 'login' action method which accepts a userId in its payload, and which sets the userId in the store's state
    // NOTE you only need for the first argument "{ store }" (for setting state)
    //     and the second argument is the userId you pass in
    // see https://vuex.vuejs.org/guide/actions.html#composing-actions
    login({ state: state }, userId) {
      state.userId = userId
    }
  },
  modules: {
  }
})
