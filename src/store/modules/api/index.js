import $ls from '@/plugins/ls'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'

export default {
  namespaced: true,
  state: {
    allBreedsList: [],
    randomDogsList: [],
    breedDogsList: [],
    favorites: $ls.get('favorites') || [],
    isRandomDogsAction: false,
    isBreedDogsAction: false
  },
  mutations,
  actions,
  getters
}
