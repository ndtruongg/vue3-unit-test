export const state = {
  count: 10,
};

export const getters = {
  count: (state) => state.count,
};

export const mutations = {
  increment(state) {
    state.count += 1;
  },
};

export const actions = {};
