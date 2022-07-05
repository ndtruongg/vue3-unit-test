import { mount } from "@vue/test-utils";
import Nav from "../../src/components/Nav.vue";

test("Navigation", async () => {
  const wrapper = mount(Nav);

  // profile link
  const profileLink = wrapper.get("#profile");
  expect(profileLink.text()).toEqual("My Profile");

  // admin link
  await wrapper.find("button").trigger("click");
  expect(wrapper.get("#admin").text()).toEqual("Admin");

  // Dropdown
  expect(wrapper.find("#user-dropdown").isVisible()).toBe(false);
  await wrapper.find('[data-test="dropdown"]').trigger("click");
  expect(wrapper.find("#user-dropdown").isVisible()).toBe(true);
});
