import { createStore } from "vuex";

const requireContext = require.context("./modules", false, /.*\.js$/);

// Load store modules dynamically.
const storeModule = requireContext
  .keys()
  .map((file) => [file.replace(/(^.\/)|(\.js$)/g, ""), requireContext(file)])
  .reduce((modules, [name, moduleItem]) => {
    if (moduleItem.namespaced === undefined) {
      // eslint-disable-next-line no-param-reassign
      moduleItem.namespaced = true;
    }
    return { ...modules, [name]: moduleItem };
  }, {});

const store = createStore({
  modules: storeModule,
});

export default store;
