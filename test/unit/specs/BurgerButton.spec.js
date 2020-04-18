import { mount } from '@vue/test-utils'
import BurgerButton from '@/src/components/BurgerButton.vue'

const createCmp = propsData => mount(BurgerButton, { propsData })

describe('TastyBurgerButton', () => {
  let wrapper

  beforeEach(() => {
    wrapper = createCmp()
  })

  it('is called', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('is boring by default', () => {
    expect(wrapper.props('type', 'boring')).toBeTruthy()
  })

  it('selects the right component', () => {
    expect(wrapper.vm.computedType).toBe('boring')

    wrapper.setProps({ type: 'arrow' })
    expect(wrapper.vm.computedType).toBe('arrow')

    wrapper.setProps({ type: 'arrow-r' })
    expect(wrapper.vm.computedType).toBe('arrow')

    wrapper.setProps({ type: '3dx' })
    expect(wrapper.vm.computedType).toBe('x3d')

    wrapper.setProps({ type: '3dy' })
    expect(wrapper.vm.computedType).toBe('y3d')

    wrapper.setProps({ type: '3dxy' })
    expect(wrapper.vm.computedType).toBe('xy3d')
  })
})
