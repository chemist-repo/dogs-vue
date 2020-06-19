export default {
  SET_ALL_BREEDS_LIST (state, allBreedsList) {
    state.allBreedsList = allBreedsList
  },
  SET_RANDOM_DOGS_LIST (state, randomDogsList) {
    state.randomDogsList = randomDogsList
  },
  SET_MORE_RANDOM_DOGS_LIST (state, randomDogsList) {
    state.randomDogsList = state.randomDogsList.concat(randomDogsList)
  },
  SET_FAVORITES (state, favorites) {
    state.favorites = favorites
  },
  SET_IS_RANDOM_DOGS_ACTION (state, isRandomDogsAction) {
    state.isRandomDogsAction = isRandomDogsAction
  },
  SET_BREED_DOGS_LIST (state, breedDogsList) {
    state.breedDogsList = breedDogsList
  },
  SET_MORE_BREED_DOGS_LIST (state, breedDogsList) {
    state.breedDogsList = state.breedDogsList.concat(breedDogsList)
  },
  SET_IS_BREED_DOGS_ACTION (state, isBreedDogsAction) {
    state.isBreedDogsAction = isBreedDogsAction
  }
}
