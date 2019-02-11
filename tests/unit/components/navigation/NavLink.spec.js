import { shallowMount } from '@vue/test-utils'
import NavLink from '@/components/navigation/NavLink.vue'

describe('NavLink.vue', () => {
  it('renders props when passed', () => {
    const link = {name: 'SomeLink', function: function(){return true}, hover: false}

    const wrapper = shallowMount(NavLink, {
      propsData: { link }
    })
    expect(wrapper.text()).toMatch(link.name)
  })
})
