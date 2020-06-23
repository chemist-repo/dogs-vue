<template>
  <header class="header">
    <router-link to="/" class="logo">
      <img src="/img/logo.png" alt="dogs-vue" class="logo-img">
    </router-link>
    <button @click="onToggleActive" class="menu">
      <ui-icon v-if="!active" name="menu" />
      <ui-icon v-else name="close" />
    </button>
    <nav
      :class="[
        'nav',
        {
          active
        }
      ]"
    >
      <router-link :to="{ name: 'Home' }" class="ui-button">Случайные собачки</router-link>
      <ui-select
        @input="onSelectBreed"
        :options="allBreedsList"
        :value="breed"
      >
        <template v-slot:arrow>
          <ui-icon name="arrow-down" />
        </template>
      </ui-select>
      <router-link :to="{ name: 'Favorites' }" class="ui-button">Избранное</router-link>
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
  data: () => ({
    active: false
  }),
  methods: {
    ...mapActions('api', [
      'getAllBreedsList'
    ]),
    onToggleActive () {
      this.active = !this.active
    },
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
