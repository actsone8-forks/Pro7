import { createStore } from 'vuex'

export default createStore({
  state: {
    userId: null
  },
  getters: {
    user (state) {
			return state.user
		},
  },
  mutations: {
    DELETE_USER(state, userId){
      let users = state.users.filter(u => u.id != userId)
      state.users = users;
      state.message = 'Account successfully deleted!!'
    },
  },
  actions: {
  //   deleteUser ({ commit }, id) {
	// 		//deleteUser(id).then(() => {
	// 			commit('DELETE_USER', id)
	// 		})
	// 	},
  },
  modules: {
  }
})
