import { apolloClient } from "@/plugins/apolloProvider";
import { USER_QUERY, USER_BY_TOKEN_QUERY } from "../graphql/queries/users";

const state = () => ({
  user: null,
  loading: true,
  modal: null,
  editing: null
});

const actions = {
  logout({ commit }) {
    commit("setUser", null);
    localStorage.removeItem("token");
  },
  async getUserResources({ commit }, id) {
    await apolloClient
      .query({
        query: USER_QUERY,
        variables: {
          id
        }
      })
      .then(({ data }) => {
        commit("setUser", data.user);
      })
      .catch(err => {
        console.log("err", err);
      });
  },
  async getUserByToken({ commit }, token) {
    await apolloClient
      .query({
        query: USER_BY_TOKEN_QUERY,
        variables: {
          token
        }
      })
      .then(({ data }) => {
        commit("setUser", data.user);
      })
      .catch(err => {
        console.log("err", err);
      });
  }
};

const mutations = {
  setUser(state, user) {
    state.user = user;
    state.loading = false;
  },
  setModal(state, modal) {
    state.modal = modal;
  }
};

export default {
  state,
  mutations,
  actions
};
