import axios from 'axios'
import $op from 'object-path'

const $axios = axios.create({
  baseURL: process.env.VUE_APP_API_URL || ''
})

export default {
  async getAllBreedsList ({ commit }) {
    try {
      const { data } = await $axios({
        url: '/breeds/list/all',
        method: 'GET'
      })
      const allBreedsList = Object.keys($op.get(data, 'message', []))
      commit('SET_ALL_BREEDS_LIST', allBreedsList)
      return Promise.resolve(allBreedsList)
    } catch (error) {
      return Promise.reject(error)
    }
  },
  async getRandomDogsList ({ commit }) {
    try {
      const { data } = await $axios({
        url: '/breeds/image/random/20',
        method: 'GET'
      })
      const randomDogsList = $op.get(data, 'message', [])
      commit('SET_RANDOM_DOGS_LIST', randomDogsList)
      return Promise.resolve(randomDogsList)
    } catch (error) {
      return Promise.reject(error)
    }
  },
  async getMoreRandomDogsList ({ commit }) {
    commit('SET_IS_RANDOM_DOGS_ACTION', true)
    try {
      const { data } = await $axios({
        url: '/breeds/image/random/20',
        method: 'GET'
      })
      const randomBreedsDogsList = $op.get(data, 'message', [])
      commit('SET_MORE_RANDOM_DOGS_LIST', randomBreedsDogsList)
      commit('SET_IS_RANDOM_DOGS_ACTION', false)
      return Promise.resolve(randomBreedsDogsList)
    } catch (error) {
      commit('SET_IS_RANDOM_DOGS_ACTION', false)
      return Promise.reject(error)
    }
  },
  async getBreedRandomDogsList ({ commit }, breed) {
    try {
      const { data } = await $axios({
        url: `/breed/${breed}/images/random/20`,
        method: 'GET'
      })
      const breedDogsList = $op.get(data, 'message', [])
      commit('SET_BREED_DOGS_LIST', breedDogsList)
      return Promise.resolve(breedDogsList)
    } catch (error) {
      return Promise.reject(error)
    }
  },
  async getMoreBreedRandomDogsList ({ commit }, breed) {
    commit('SET_IS_BREED_DOGS_ACTION', true)
    try {
      const { data } = await $axios({
        url: `/breed/${breed}/images/random/20`,
        method: 'GET'
      })
      const breedDogsList = $op.get(data, 'message', [])
      commit('SET_MORE_BREED_DOGS_LIST', breedDogsList)
      commit('SET_IS_BREED_DOGS_ACTION', false)
      return Promise.resolve(breedDogsList)
    } catch (error) {
      commit('SET_IS_BREED_DOGS_ACTION', false)
      return Promise.reject(error)
    }
  }
}
