import { mount } from '@vue/test-utils'
import PlainHamburger from '@/src/components/PlainHamburger.vue'

const createCmp = propsData => mount(PlainHamburger, { propsData })

describe('PlainHamburger', () => {
  let wrapper

  beforeEach(() => {
    wrapper = createCmp()
  })

  it('is called', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('renders correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('toggles the active status', () => {
    expect(wrapper.vm.isActive).toBe(false)

    wrapper.vm.toggle()
    expect(wrapper.vm.isActive).toBe(true)

    wrapper.vm.toggle()
    expect(wrapper.vm.isActive).toBe(false)

    wrapper.trigger('click')
    expect(wrapper.vm.isActive).toBe(true)

    wrapper.trigger('click')
    expect(wrapper.vm.isActive).toBe(false)
  })

  it('emits toggle event when prop changes', async () => {
    wrapper.setProps({ active: true })
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted().toggle).toBeTruthy()
  })

  it('emits toggle event on click', async () => {
    wrapper.trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted().toggle).toBeTruthy()
  })

  it('uses the right modifier class', () => {
    wrapper.setProps({ type: 'arrow' })
    expect(wrapper.vm.hamburgerModifierClass).toBe('hamburger--arrow')

    wrapper.setProps({ reversed: true })
    expect(wrapper.vm.hamburgerModifierClass).toBe('hamburger--arrow-r')

    wrapper.setProps({ type: 'arrow-r', reversed: false })
    expect(wrapper.vm.hamburgerModifierClass).toBe('hamburger--arrow-r')
  })
})
