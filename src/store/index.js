import { createStore } from 'vuex'
const store = createStore({
  state() {
    return {
      name: 'dsl'
    }
  },
  mutations: {
    updateName(state, name) {
      state.name = name
    }
  }
})

export default store
