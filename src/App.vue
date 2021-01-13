<template>
  <div class="__app__">
    <p-header />
    <router-view/>
  </div>
</template>

<script>
import pHeader from '@/components/partials/Header'

export default {
  name: 'app',
  components: {
    pHeader
  }
}
</script>
