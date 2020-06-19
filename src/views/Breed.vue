<template>
  <p-list
    @set-favorite="setFavorite"
    @on-scroll="onScroll"
    :images="breedDogsList"
    :favorites="favorites"
  />
</template>

<script>
import pList from '@/components/partials/List'
import setFavorite from '@/mixins/setFavorite'

import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'breed-page',
  components: {
    pList
  },
  mixins: [
    setFavorite
  ],
  watch: {
    async '$route.params.breed' (breed) {
      await this.getBreedRandomDogsList(breed)
    }
  },
  computed: {
    ...mapGetters('api', [
      'breedDogsList',
      'favorites',
      'isBreedDogsAction'
    ])
  },
  methods: {
    ...mapActions('api', [
      'getBreedRandomDogsList',
      'getMoreBreedRandomDogsList'
    ]),
    async onScroll () {
      const offsetRatioForEvent = 0.95
      const currentScrollTop = (window.scrollY || document.documentElement.scrollTop) + window.innerHeight
      const startHeightForEvent = document.documentElement.offsetHeight * offsetRatioForEvent

      if (currentScrollTop >= startHeightForEvent && !this.isBreedDogsAction) {
        await this.getMoreBreedRandomDogsList(this.$route.params.breed)
      }
    }
  },
  async mounted () {
    await this.getBreedRandomDogsList(this.$route.params.breed)
  }
}
</script>
