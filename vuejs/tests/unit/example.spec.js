import { shallowMount } from '@vue/test-utils'
import AppCard from '@/components/AppCard/AppCard.vue'


describe('AppCard.vue', () => {
  beforeEach(() => {
    let wrapper = shallowMount(AppCard, {
      methods: { onColapse: ()=>  {}}
    });
    it("renders", ()=>{
      expect(wrapper.exists()).toBe(true)
    })

  })

})



