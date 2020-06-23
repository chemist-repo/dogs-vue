import { mount } from '@vue/test-utils'
import uiButton from '@/components/ui/Button.vue'

describe('ui/Button.vue', () => {
  it('renders slots.default when passed', () => {
    const slotData = 'button text'
    const wrapper = mount(uiButton, {
      slots: { 
        default: [slotData]
      }
    })
    expect(wrapper.text()).toContain(slotData)
  })
})
