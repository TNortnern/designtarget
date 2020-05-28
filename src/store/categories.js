const state = () => ({
  topFour: [],
  current: null,
  allResources: []
});

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
  mutations
};
