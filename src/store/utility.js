import { SEARCH_RESOURCES } from "../graphql/queries/resources";
import { apolloClient } from "@/plugins/apolloProvider";

const state = () => ({
  searching: false,
  loading: false,
  term: "",
  items: [],
  currentTerm: ""
});

const actions = {
  searchResources({ commit, state }) {
    commit("setSearching", true);
    commit("setLoading", true);
    commit("setCurrentTerm", state.term);
    commit("setAppLoading", true, { root: true });
    apolloClient
      .query({
        query: SEARCH_RESOURCES,
        variables: {
          term: state.term
        }
      })
      .then(({ data }) => {
        commit("setLoading", false);
        commit("setAppLoading", false, { root: true });
        // console.log("data", data);
        commit("setSearchItems", data.resourcesLike);
      })
      .catch(err => {
        commit("setAppLoading", false, { root: true });
        commit("setLoading", false);
        console.log("err", err);
      });
  }
};

const mutations = {
  setSearching(state, searching) {
    state.searching = searching;
  },
  setTerm(state, term) {
    state.term = term;
  },
  setSearchItems(state, items) {
    state.items = items;
  },
  setLoading(state, loading) {
    state.loading = loading;
  },
  setCurrentTerm(state, term) {
    state.currentTerm = term;
  }
};

export default {
  state,
  mutations,
  actions
};
