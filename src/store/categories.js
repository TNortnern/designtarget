import { apolloClient } from "@/plugins/apolloProvider";
import { TOP_FOUR_QUERY, CATEGORY_QUERY } from "../graphql/queries/resources";
import {
  CREATE_RESOURCE,
  DELETE_RESOURCE
} from "../graphql/mutations/resources";
import {
  CREATE_CATEGORY,
  DELETE_CATEGORY
} from "../graphql/mutations/categories";
const state = () => ({
  topFour: [],
  current: null,
  allResources: [],
  loading: { name: "", value: false },
  message: { text: "", name: "" }
});

const actions = {
  createNewResource(
    { dispatch, commit },
    { name, description, category, image, alt, importance, url }
  ) {
    commit("setLoading", { value: true, name: "resource" });
    commit("setMessage", { text: "", name: "resource" });
    apolloClient
      .mutate({
        mutation: CREATE_RESOURCE,
        variables: {
          name,
          description,
          category,
          image,
          alt,
          importance,
          url
        }
      })
      .then(() => {
        commit("setLoading", { value: false, name: "resource" });
        commit("setMessage", { text: "Success!", name: "resource" });
      })
      .catch(err => {
        console.log("err", err);
        commit("setLoading", { value: false, name: "resource" });
        commit("setMessage", { text: "Error.", name: "resource" });
      });
    dispatch("getTopFour");
    if (state.current) dispatch("getCategoryResources", state.current.id);
  },
  deleteResource({ dispatch }, id) {
    apolloClient
      .mutate({
        mutation: DELETE_RESOURCE,
        variables: {
          id
        }
      })
      .then(() => {
        console.log("item deleted");
      })
      .catch(err => {
        alert("err", err);
      });
    dispatch("getTopFour");
    if (state.current) dispatch("getCategoryResources", state.current.id);
  },
  async getTopFour({ commit }) {
    try {
      const { data } = await apolloClient.query({
        query: TOP_FOUR_QUERY
      });
      commit("setTopFour", data.categories);
    } catch (err) {
      console.log("err", err);
    }
  },
  getCategoryResources({ commit }, name) {
    commit("setLoading", { value: true, name: "loadingCategoryResources" });
    commit("setAppLoading", true, { root: true });
    commit("setAppLoading", false, { root: true });
    apolloClient
      .query({
        query: CATEGORY_QUERY,
        variables: {
          name
        }
      })
      .then(({ data }) => {
        commit("setAppLoading", false, { root: true });
        commit("setLoading", {
          value: false,
          name: "loadingCategoryResources"
        });
        commit("setAllResources", data.category.resources);
        commit("setCurrent", data.category);
      })
      .catch(err => {
        commit("setAppLoading", false, { root: true });
        commit("setLoading", {
          value: false,
          name: "loadingCategoryResources"
        });
        console.log("err", err);
      });
  },
  createNewCategory({ dispatch, commit }, { name, description }) {
    commit("setLoading", { value: true, name: "category" });
    commit("setMessage", { text: "", name: "category" });
    apolloClient
      .mutate({
        mutation: CREATE_CATEGORY,
        variables: {
          name,
          description
        }
      })
      .then(() => {
        commit("setLoading", { value: false, name: "category" });
        commit("setMessage", { text: "Success!", name: "category" });
      })
      .catch(err => {
        console.log("err", err);
        commit("setLoading", { value: false, name: "category" });
        commit("setMessage", { text: "Error.", name: "category" });
      });
    dispatch("getTopFour");
    if (state.current) dispatch("getCategoryResources", state.current.id);
  },
  deleteCategory({ dispatch }, id) {
    apolloClient
      .mutate({
        mutation: DELETE_CATEGORY,
        variables: {
          id
        }
      })
      .then(() => {
        console.log("item deleted");
      })
      .catch(err => {
        alert("err", err);
      });
    dispatch("getTopFour");
    if (state.current) dispatch("getCategoryResources", state.current.id);
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
  },
  setLoading(state, loading) {
    state.loading = loading;
  },
  setMessage(state, message) {
    state.message = message;
  }
};

export default {
  state,
  mutations,
  actions
};
