const state = () => ({
  user: null,
  loading: true,
  modal: null,
  editing: null
});

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
  mutations
};
