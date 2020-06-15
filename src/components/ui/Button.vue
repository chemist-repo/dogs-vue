<template>
  <button
    @click="$emit('click', $event)"
    class="ui-button"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'ui-button'
}
</script>
