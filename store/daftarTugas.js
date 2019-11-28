export const state = () => ({
  listTask: [],
  taskId: '',
  task: '',
  positionChosen: ''
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
    const companyId = localStorage.getItem('companyId')
    const positionId = localStorage.getItem('positionId')
    return this.$axios
      .$get('task/list?company_id=' + companyId + '&position_id=' + positionId)
      .catch((err) => {
        console.log(err.response)
      })
  }
}
