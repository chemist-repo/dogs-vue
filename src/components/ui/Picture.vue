<template>
  <picture
    :class="[
      'ui-picture',
      `ui-picture-format--${format}`
    ]"
  >
    <img
      :src="imgPath"
      :alt="alt"
      class="ui-picture--img"
    />
  </picture>
</template>

<script>
import preFetchImage from '@/helpers/preFetchImage'

const REG_EXP_EXTERNAL_LINK = new RegExp('^(?:[a-z]+:)?//', 'i')
const NO_IMAGE_PATH = '/img/no-image.jpg'

export default {
  name: 'ui-picture',
  props: {
    src: {
      type: String,
      default: NO_IMAGE_PATH
    },
    alt: {
      type: String,
      default: 'no-image'
    },
    format: {
      type: String,
      default: '4x3'
    }
  },
  watch: {
    async src (path) {
      if (REG_EXP_EXTERNAL_LINK.test(path)) {
        this.imgPath = await preFetchImage(path)
        this.$emit('onload')
      } else {
        this.imgPath = path
      }
    }
  },
  data: () => ({
    imgPath: NO_IMAGE_PATH
  }),
  async mounted () {
    if (REG_EXP_EXTERNAL_LINK.test(this.src)) {
      this.imgPath = await preFetchImage(this.src)
    }
  }
}
</script>
