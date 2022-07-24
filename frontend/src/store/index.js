
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
    // A gettter is a function that takes the state as an argument and returns a piece of the state
    isLoggedIn(state) {// Check if the user is logged in
      return state.authenticatedUser.loggedIn;
    },
    isLoggedOut(state) {
      return !state.authenticatedUser.loggedIn;
    },
    userName(state) {
      return state.authenticatedUser.name;
    },
    email(state) {
      return state.authenticatedUser.email;
    },
    userId(state) {
      return state.authenticatedUser.id;
    },
    getUser(state) {
      return state.authenticatedUser;
    }
  },
  mutations: {
    // A mutation function that updates the state
    setLoggedIn(state, { value }) {
      state.authenticatedUser.loggedIn = value;
    },
    setAuthenticatedUser(state, { name, id, email }) {
      state.authenticatedUser.name = name;
      state.authenticatedUser.email = email;
      state.authenticatedUser.id = id;
    },
    // Example setting a user name in our store
    // State is a compulsory params
    // params is an object contaiming the desired fields
    setName(state, params) {
      const { name } = params
      state.authenticatedUser.name = name
    }
  },
  actions: {
    login({ commit }, user) {
      const { name, id, email, token } = user
      // A commit simply calls a mutation
      // For a commit to work, the mutation needs to be defined in the mutations object
      commit('setLoggedIn', { value: true });
      commit('setAuthenticatedUser', { name, id, email, token });
      localStorage.setItem('authenticatedUser', JSON.stringify({ name, id, email, token }));
    },
    logout({ commit }) {
      commit('setLoggedIn', { value: false });
      commit('setAuthenticatedUser', { name: '', id: undefined, email: '', token: undefined });
      localStorage.removeItem('authenticatedUser');
    },
    async delete({ dispatch }, { userId, token, notifySuccess }) {
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