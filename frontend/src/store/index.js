
import axios from 'axios';
import { createStore } from 'vuex'

export default createStore({
  state: {
    authenticatedUser: {
      loggedIn: false,
      name: '',
      email: '',
      id: undefined,
    },
  },
  getters: {
    isLoggedIn (state) {
      return state.authenticatedUser.loggedIn;
    },
    isLoggedOut (state) {
      return !state.authenticatedUser.loggedIn;
    },
    userName (state) {
      return state.authenticatedUser.name;
    },
    email (state) {
      return state.authenticatedUser.email;
    },
    userId (state) {
      return state.authenticatedUser.id;
    }
  },
  mutations: {
    setLoggedIn (state, { value }) {
      state.authenticatedUser.loggedIn = value;
    },
    setAuthenticatedUser (state, { name, id, email}) {
      state.authenticatedUser.name = name;
      state.authenticatedUser.email = email;
      state.authenticatedUser.id = id;
    },
  },
  actions: {
    //TODO pass in token, add argument token
    login ({ commit }, { name, id, email }) {
      commit('setLoggedIn', { value: true });
      commit('setAuthenticatedUser', { name, id, email});
      //TODO add anothr porperty called token
      localStorage.setItem('authenticatedUser', JSON.stringify({ name, id, email }));
    },
    logout ({ commit }) {
      commit('setLoggedIn', { value: false });
      commit('setAuthenticatedUser', { name: '', id: undefined, email:'' });
      localStorage.removeItem('authenticatedUser');
    },
    async delete ({ dispatch }, { userId, token, notifySuccess }) {
      const config = {
        headers: {
          token,
        },
      };

      await axios.delete('http://localhost:3000/api/user/' + userId, config);
      dispatch('logout');
      notifySuccess();      
    }
  },
});