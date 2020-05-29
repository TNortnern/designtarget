const state = () => ({
  user: null
});

const mutations = {
  setUser(state, user) {
    state.user = user;
  }
};

export default {
  state,
  mutations
};
