import { shallowMount } from "@vue/test-utils";
import HelloWorld from "../../src/components/HelloWorld.vue";
import _ from "lodash";
import { createStore } from "vuex";
import * as commonModule from "@/store/modules/common";

const store = createStore({
  modules: {
    common: _.cloneDeep(commonModule),
  },
});

test("script setup and vuex", async () => {
  const wrapper = shallowMount(HelloWorld, {
    global: {
      plugins: [store],
    },
  });

  await wrapper.find("button").trigger("click");
  expect(wrapper.find('[ data-test="count"]').text()).toBe("11");

  await wrapper.find("button").trigger("click");
  expect(wrapper.find('[ data-test="count"]').text()).toBe("12");

  await wrapper.find("button").trigger("click");
  expect(wrapper.find('[ data-test="count"]').text()).toBe("13");

  await wrapper.find("button").trigger("click");
  expect(wrapper.find('[ data-test="count"]').text()).toBe("14");
});
