export const state = () => ({
  listPosition: [],
  positionId: '',
  position: ''
})

export const mutations = {
  setState(state, params) {
    const keys = Object.keys(params)
    keys.forEach((key) => (state[key] = params[key]))
  }
}

export const actions = {
  setAllPosition({ commit }, outcome) {
    commit('setState', {
      listPosition: outcome.result.data
    })
  },
  getAllPosition() {
    const token = localStorage.getItem('token')
    this.$axios.setToken(token, 'Bearer')
    this.$axios.setHeader('Content-Type', 'application/json', ['get'])
    const companyId = localStorage.getItem('companyId')
    return this.$axios
      .$get('position/listfull?company_id=' + companyId)
      .catch((err) => {
        console.log(err.response)
      })
  },
  getPositionById({ state }) {
    const token = localStorage.getItem('token')
    console.log('token')
    this.$axios.setToken(token, 'Bearer')
    this.$axios.setHeader('Content-Type', 'application/json', ['get'])
    return this.$axios
      .$get('intern?id=' + state.companyId)
      .then((Response) => {})
      .catch((error) => {
        // handle error
        if (error.response.status === 404) {
          console.log('aaaa')
        }
      })
  }
}
