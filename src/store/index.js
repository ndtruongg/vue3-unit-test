import { createStore } from "vuex";
import * as commonModule from "./modules/common";
import * as authModule from "./modules/auth";

export default createStore({
  // state: {
  //   count: 1,
  // },
  // mutations: {
  //   increment(state) {
  //     state.count += 1;
  //   },
  // },
  // actions: {},
  modules: {
    common: { namespaced: true, ...commonModule },
    auth: { namespaced: true, authModule },
  },
});
