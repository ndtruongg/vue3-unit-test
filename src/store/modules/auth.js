export const state = {
  isLogin: false,
};

export const getters = {
  isLogin: (state) => state.isLogin,
};

export const mutations = {
  increment(state) {
    state.isLogin = true;
  },
};

export const actions = {
  increment(commit) {
    commit("increment");
  },
};
