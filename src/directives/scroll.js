import { isObject, isFunction } from '@/helpers/typeChecker'
import debounce from '@/helpers/debounce'

/**
 * @param {{
 *  handler: function,
 *  debounce: Number,
 *  isThisElementScroll: Boolean
 * }} binding.value
 * @return {void}
 */
export function inserted (el, binding) {
  if (!isObject(binding.value)) {
    const warn = `[Vue-scroll:] '${binding.expression}' is not a object, but has to be`
    console.warn(warn)
  } else {
    if (!isFunction(binding.value.handler)) {
      const warn = `[Vue-scroll:] '${binding.expression}' params handler is not a function or undefined, but has to be`
      console.warn(warn)
    } else {
      const callback = debounce(function (e) {
        binding.value.handler(e)
      }, binding.value.debounce || 100)

      const { isThisElementScroll } = binding.value

      const options = binding.options || { passive: true }

      if (isThisElementScroll) {
        el.addEventListener('scroll', callback, options)
      } else {
        window.addEventListener('scroll', callback, options)
      }

      el._onScroll = {
        callback,
        options,
        isThisElementScroll
      }

      if (!binding.modifiers || !binding.modifiers.quiet) {
        callback()
      }
    }
  }
}

/**
 * @param el
 * @return {void}
*/
export function unbind (el) {
  if (!el._onScroll) return

  const { callback, options, isThisElementScroll } = el._onScroll

  if (isThisElementScroll) {
    el.removeEventListener('scroll', callback, options)
  } else {
    window.removeEventListener('scroll', callback, options)
  }

  delete el._onScroll
}

export default {
  inserted,
  unbind
}
