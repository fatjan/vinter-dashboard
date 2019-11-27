export const state = () => ({
  listCompany: [],
  companyId: '',
  company: ''
})

export const mutations = {
  setState(state, params) {
    const keys = Object.keys(params)
    keys.forEach((key) => (state[key] = params[key]))
  }
}

export const actions = {
  setAllCompany({ commit, state }, outcome) {
    commit('setState', {
      listCompany: outcome.result
    })
  },
  setChosenCompany({ commit }, outcome) {
    commit('setState', {
      company: outcome.result
    })
  },
  getAllCompany() {
    const token = localStorage.getItem('token')
    this.$axios.setToken(token, 'Bearer')
    this.$axios.setHeader('Content-Type', 'application/json', ['get'])
    return this.$axios.$get('company/list').catch((err) => {
      console.log(err.response)
    })
  },
  getCompanyById({ state }) {
    const token = localStorage.getItem('token')
    this.$axios.setToken(token, 'Bearer')
    this.$axios.setHeader('Content-Type', 'application/json', ['get'])
    return this.$axios.$get('company?id=' + state.companyId).catch((error) => {
      if (error.response.status === 404) {
        console.log('aaaa')
      }
    })
  }
}
