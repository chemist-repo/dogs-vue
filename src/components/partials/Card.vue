<template>
  <div
    @click="$emit('click', src)"
    class="card"
  >
    <ui-picture
      :src="src"
    />
    <i class="card-icon">
      <ui-icon v-if="active" name="heart-solid" />
      <ui-icon v-else name="heart" />
    </i>
  </div>
</template>

<script>
export default {
  name: 'p-card',
  props: {
    src: {
      type: String,
      default: ''
    },
    active: {
      type: Boolean,
      default: false
    }
  }
}
</script>
