export const state = () => ({
  ongoing: [],
  completed: []
})

export const mutations = {
  setState(state, params) {
    const keys = Object.keys(params)
    keys.forEach((key) => (state[key] = params[key]))
  }
}

export const actions = {
  setAllOngoing({ commit }, outcome) {
    const allPosition = outcome.result
    const ongoing = []
    const completed = []
    for (const i in allPosition) {
      const percent = parseInt(allPosition[i].percentage.split('%')[0])
      if (percent < 100) {
        ongoing.push(allPosition[i])
      } else {
        completed.push(allPosition[i])
      }
    }
    commit('setState', {
      ongoing,
      completed
    })
  },
  setCertificate({ commit }, outcome) {},
  getAllOngoing() {
    const token = localStorage.getItem('token')
    const internId = localStorage.getItem('userId')
    const url = `ongoingtaskposition?intern_id=${internId}`
    this.$axios.setToken(token, 'Bearer')
    this.$axios.setHeader('Content-Type', 'application/json', ['get'])
    return this.$axios.$get(url).catch((err) => {
      console.log(err.response)
    })
  },
  getCertificate() {
    const token = localStorage.getItem('token')
    const internId = localStorage.getItem('userId')
    const url = `certificate/list/full?intern_id=${internId}`
    this.$axios.setToken(token, 'Bearer')
    this.$axios.setHeader('Content-Type', 'application/json', ['get'])
    return this.$axios.$get(url).catch((err) => {
      console.log(err.response)
    })
  }
}
