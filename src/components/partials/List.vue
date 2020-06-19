<template>
  <div
    v-scroll="{
      handler
    }"
    class="container-fluid py-3"
  >
    <ui-gallery>
      <p-card
        v-for="(src, i) in images"
        @click="$emit('set-favorite', $event)"
        :key="`dog-${i}`"
        :src="src"
        :active="favorites.includes(src)"
      />
    </ui-gallery>
  </div>
</template>

<script>
import pCard from './Card'

export default {
  name: 'p-list',
  components: {
    pCard
  },
  props: {
    images: {
      type: Array,
      default: () => []
    },
    favorites: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    handler () {
      this.$emit('on-scroll')
    }
  }
}
</script>
