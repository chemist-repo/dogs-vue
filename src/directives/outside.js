/**
 * @param el
 * @param binding
 * @return {void}
*/
export function bind (el, binding) {
  if (typeof binding.value !== 'function') {
    const warn = `[Vue-outside:] '${binding.expression}' is not a function, but has to be`
    console.warn(warn)
  }

  const bubble = binding.modifiers.bubble
  const handler = e => {
    if (bubble || (!el.contains(e.target) && el !== e.target)) {
      binding.value(e)
    }
  }
  el.__vueClickOutside__ = handler

  // Debounce click
  setTimeout(() => {
    window.addEventListener('click', handler)
  }, 0)
}

/**
 * @param el
 * @return {void}
*/
export function unbind (el) {
  window.removeEventListener('click', el.__vueClickOutside__)
  el.__vueClickOutside__ = null
}

export default {
  bind,
  unbind
}
