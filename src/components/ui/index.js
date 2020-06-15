import uiButton from './Button'
import uiSelect from './Select'
import uiPicture from './Picture'
import uiGallery from './Gallery'

export default {
  install (Vue) {
    Vue.component('ui-button', uiButton)
    Vue.component('ui-select', uiSelect)
    Vue.component('ui-picture', uiPicture)
    Vue.component('ui-gallery', uiGallery)
  }
}
