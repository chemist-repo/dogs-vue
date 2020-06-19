<template>
  <header class="header">
    <router-link to="/" class="logo">
      <img src="/img/logo.png" alt="dogs-vue" class="logo-img">
    </router-link>
    <nav class="nav">
      <router-link to="/" class="ui-button">Случайные собачки</router-link>
      <ui-select
        @input="onSelectBreed"
        :options="allBreedsList"
        :value="breed"
      >
        <template v-slot:arrow>
          <ui-icon name="arrow-down" />
        </template>
      </ui-select>
      <router-link to="/favorites" class="ui-button">Избранные собачки</router-link>
    </nav>
  </header>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'p-header',
  computed: {
    ...mapGetters('api', [
      'allBreedsList'
    ]),
    breed () {
      return this.$route.params.breed
    }
  },
  methods: {
    ...mapActions('api', [
      'getAllBreedsList'
    ]),
    onSelectBreed (breed) {
      this.$router.push({
        name: 'Breed',
        params: {
          breed
        }
      })
    }
  },
  async mounted () {
    await this.getAllBreedsList()
  }
}
</script>
