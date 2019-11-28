export const state = () => ({
  allCert: []
})

export const mutations = {
  setState(state, params) {
    const keys = Object.keys(params)
    keys.forEach((key) => (state[key] = params[key]))
  }
}

export const actions = {
  setCertificate({ commit }, outcome) {
    commit('setState', {
      allCert: outcome.result.data
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
