import { createStore } from 'vuex'

export default createStore({
  state: {
    userId: null
  },
  getters: {
    // TODO add a getter to return the stored userId (see https://vuex.vuejs.org/guide/getters.html#property-style-access)
  },
  mutations: {
    // FIXME verify that this logic is needed
    DELETE_USER(state, userId){
      let users = state.users.filter(u => u.id != userId)
      state.users = users;
      state.message = 'Account successfully deleted!!'
    },
  },
  actions: {
    // TODO remove this commented out "deleteUser" method if it is not used
  //   deleteUser ({ commit }, id) {
	// 		//deleteUser(id).then(() => {
	// 			commit('DELETE_USER', id)
	// 		})
	// 	},
    // TODO add 'login' action method which accepts a userId in its payload, and which sets the userId in the store's state
    // NOTE you only need for the first argument "{ store }" (for setting state)
    //     and the second argument is the userId you pass in
    // see https://vuex.vuejs.org/guide/actions.html#composing-actions
  },
  modules: {
  }
})
