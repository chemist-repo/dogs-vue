import ls from './ls'

export default {
  install (Vue) {
    Object.defineProperties(Vue.prototype, {
      $ls: {
        get () {
          return ls
        }
      }
    })
  }
}
