import { mount } from "@vue/test-utils";
import AppCard from '@/components/AppCard/AppCard.vue';
import AppCardContent from '@/components/AppCard/AppCardContent.vue';
import AppCardHead from '@/components/AppCard/AppCardHeading.vue';
// Use mount for mount the whole component
// Use shallowMount to mount a component without rendering its child components

describe("AppCard", () => {
  const wrapper = mount(AppCard);
  const content = wrapper.findComponent(AppCardContent);
  const head = wrapper.findComponent(AppCardHead);

  // Test to check if the AppCard is a Vue Instance.
  test("AppCard is a Vue instance?", () => {
    expect(wrapper.exists()).toBe(true);
    expect(content.exists()).toBe(true);
    expect(head.exists()).toBe(true);
  });


});