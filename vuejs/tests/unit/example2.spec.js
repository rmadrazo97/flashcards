import { mount } from "@vue/test-utils";
import AppCard from '@/components/AppCard/AppCard.vue'

// Use mount for mount the whole component
// Use shallowMount to mount a component without rendering its child components

describe("AppCard", () => {
  const wrapper = mount(AppCard);

  // Test to check if the BottomNav is a Vue Instance.
  test("AppCard is a Vue instance?", () => {
    expect(wrapper.exists()).toBe(true);
  });

  // Test to check if the span contains the home text
//   it("does Home button exist", () => {
//     expect(wrapper.find("span").text()).toBe("Home");
//   });

  // Test to check if the Home Button contain the correct icon
//   it("does Home button contains the correct icon", () => {
//     const button = wrapper.find("v-bottom-navigation");
//     expect(button.find("v-btn").text()).toBe("Home mdi-home-outline");
//   });
});
