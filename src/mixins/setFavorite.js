import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations('api', [
      'SET_FAVORITES'
    ]),
    setFavorite (url) {
      const favorites = this.$ls.get('favorites') || []
      let $favorites = []

      if (favorites.includes(url)) {
        $favorites = favorites.filter(favorite => favorite !== url)
      } else {
        $favorites = [...favorites, url]
      }

      this.SET_FAVORITES($favorites)
      this.$ls.set('favorites', $favorites)
    }
  }
}
