import scroll from './scroll'
import outside from './outside'

export default {
  install (Vue) {
    Vue.directive('scroll', scroll)
    Vue.directive('outside', outside)
  }
}
