<template>
  <svg
    :class="[
      'ui-icon',
      `ui-icon--${name}`
    ]"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title v-if="title">{{ title }}</title>
    <use :xlink:href="iconPath" xmlns:xlink="http://www.w3.org/1999/xlink" />
  </svg>
</template>

<script>
export default {
  name: 'ui-icon',
  props: {
    name: {
      type: String,
      required: true,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
  computed: {
    iconPath () {
      let icon = require(`@/assets/icons/${this.name}.svg`)
      if (Object.prototype.hasOwnProperty.call(icon, 'default')) {
        icon = icon.default
      }

      return icon.url
    }
  }
}
</script>
