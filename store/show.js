export const state = () => ({
  burger: false,
})

export const mutations = {
  changeBurger(state, type) {
    state.burger = type
  },
}
