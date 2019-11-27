export const state = () => ({
  listTask: [],
  taskId: '',
  task: ''
})

export const mutations = {
  setState(state, params) {
    const keys = Object.keys(params)
    keys.forEach((key) => (state[key] = params[key]))
  }
}

export const actions = {
  setAllTask({ commit }, outcome) {
    commit('setState', {
      listTask: outcome.result
    })
  },
  setChosenTask({ commit }, outcome) {
    commit('setState', {
      task: outcome.result
    })
  },
  getAllTask() {
    const token = localStorage.getItem('token')
    this.$axios.setToken(token, 'Bearer')
    this.$axios.setHeader('Content-Type', 'application/json', ['get'])
    return this.$axios.$get('task/list').catch((err) => {
      console.log(err.response)
    })
  }
}
