import { mount } from "@vue/test-utils";
import LockScreen from "@/Views/session/LockScreen.vue";



describe("LockScreen", () => {
  const wrapper = mount(LockScreen);

  test("LockScreen loading", () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find(".lock-screen-wrapper").exists()).toBe(true);
  });

});