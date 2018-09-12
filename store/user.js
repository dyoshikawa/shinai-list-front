import auth from '~/plugins/auth'

export const state = () => ({
  isLogin: 'loading'
})

export const actions = {
  async fetch({ commit }) {
    commit('set', await auth())
  }
}

export const mutations = {
  set(state, user) {
    console.log(user)
    if (!user) {
      state.isLogin = false
    } else {
      state.isLogin = true
    }
  }
}
