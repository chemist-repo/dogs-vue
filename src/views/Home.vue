<template>
  <p-list
    @set-favorite="setFavorite"
    @on-scroll="onScroll"
    :images="randomDogsList"
    :favorites="favorites"
  />
</template>

<script>
import pList from '@/components/partials/List'
import setFavorite from '@/mixins/setFavorite'

import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'home-page',
  components: {
    pList
  },
  mixins: [
    setFavorite
  ],
  computed: {
    ...mapGetters('api', [
      'randomDogsList',
      'favorites',
      'isRandomDogsAction'
    ])
  },
  methods: {
    ...mapActions('api', [
      'getRandomDogsList',
      'getMoreRandomDogsList'
    ]),
    async onScroll () {
      const offsetRatioForEvent = 0.95
      const currentScrollTop = (window.scrollY || document.documentElement.scrollTop) + window.innerHeight
      const startHeightForEvent = document.documentElement.offsetHeight * offsetRatioForEvent

      if (currentScrollTop >= startHeightForEvent && !this.isRandomDogsAction) {
        await this.getMoreRandomDogsList()
      }
    }
  },
  async mounted () {
    await this.getRandomDogsList()
  }
}
</script>
