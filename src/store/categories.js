import { apolloClient } from "@/plugins/apolloProvider";
import { TOP_FOUR_QUERY, CATEGORY_QUERY } from "../graphql/queries/resources";
const state = () => ({
  topFour: [],
  current: null,
  allResources: []
});

const actions = {
  // updateResource({ state, commit }, data) {
  //   const topFour = state.topFour;
  //   const allResources = state.allResources;
  //   let topFourResource = topFour.find(resource => resource.id === data.id);
  //   let resource = allResources.find(resource => resource.id === data.id);
  //   console.log("before update", allResources);
  //   if (topFourResource) {
  //     topFourResource = data;
  //     commit("setTopFour", topFour);
  //   }
  //   if (resource) {
  //     let getsFound = allResources[allResources.indexOf(resource)];
  //     console.log("didfubd", getsFound);
  //     getsFound = data;
  //     console.log("after update", allResources);
  //     commit("setAllResources", allResources);
  //   }
  // }
  async getTopFour({ commit }) {
    const { data } = await apolloClient.query({
      query: TOP_FOUR_QUERY
    });
    commit("setTopFour", data.categories);
  },
  async getCategoryResources({ commit }, id) {
    const { data } = await apolloClient.query({
      query: CATEGORY_QUERY,
      variables: {
        id
      }
    });
    commit("setAllResources", data.category.resources);
  }
};

const mutations = {
  setTopFour(state, data) {
    state.topFour = data;
  },
  setAllResources(state, data) {
    state.allResources = data;
  },
  setCurrent(state, current) {
    state.current = current;
  }
};

export default {
  state,
  mutations,
  actions
};
