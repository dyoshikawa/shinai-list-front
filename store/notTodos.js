import { fetchUserNotTodos, createNotTodo } from '~/plugins/api'

export const state = () => ({
  list: [],
  totalCount: 0
})

export const actions = {
  async fetch({ commit, rootState }, page) {
    const jwt = rootState.user.jwt
    const { data } = await fetchUserNotTodos(jwt, page)
    console.log(data)

    commit('set', data)
  },
  async add({ commit, rootState }, body) {
    const jwt = rootState.user.jwt

    await createNotTodo(jwt, body)

    const { data } = await fetchUserNotTodos(jwt)
    console.log(data)

    commit('set', data)
  }
}

export const mutations = {
  set(state, { records, total_record }) {
    console.log(records)
    console.log(total_record)
    state.list = records
    state.totalCount = total_record
  }
}