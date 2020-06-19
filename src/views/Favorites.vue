<template>
  <p-list
    v-if="favorites.length"
    @set-favorite="setFavorite"
    :images="favorites"
    :favorites="favorites"
  />
  <p v-else class="pa-3 ma-0">Список избранного пуст, на <router-link to="/">главную</router-link></p>
</template>

<script>
import pList from '@/components/partials/List'
import setFavorite from '@/mixins/setFavorite'

import { mapGetters } from 'vuex'

export default {
  name: 'favorites-page',
  components: {
    pList
  },
  mixins: [
    setFavorite
  ],
  computed: {
    ...mapGetters('api', [
      'favorites'
    ])
  }
}
</script>
