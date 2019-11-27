export const state = () => ({
  token: '',
  userName: '',
  userEmail: ''
})

export const mutations = {
  setState(state, params) {
    const keys = Object.keys(params)
    keys.forEach((key) => (state[key] = params[key]))
  },
  SET_USER(state, user) {
    state.authUser = user
  }
}

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    if (req.session && req.session.authUser) {
      commit('SET_USER', req.session.authUser)
    }
  },
  login({ commit, state }, { email, password }) {
    return new Promise((resolve, reject) => {
      this.$axios
        .$post('login/intern', {
          email,
          password
        })
        .then((res) => {
          if (res.status === 'success') {
            commit('setState', { token: res.result })
            // this.getUserData(state.token)
            resolve('success')
          }
        })
        .catch((err) => {
          if (err.response === undefined) {
            reject(new Error('Something wrong'))
          } else {
            reject(err.response.data.message.body)
          }
        })
    })
  },
  getUserData({ commit }, token) {
    this.$axios.setToken(token, 'Bearer')
    this.$axios.setHeader('Content-Type', 'application/json', ['get'])
    return new Promise((resolve, reject) => {
      this.$axios
        .$get('login')
        .then((res) => {
          if (res.status === 'success') {
            commit('setState', {
              userName: res.result.name,
              userEmail: res.result.email,
              userRole: res.result.role
            })
            resolve('success')
          }
        })
        .catch((err) => {
          if (err.response === undefined) {
            reject(new Error('Something wrong'))
          } else {
            reject(err.response.data.message.body)
          }
        })
    })
  },
  logout({ commit }) {
    commit('setState', { token: null })
    commit('setState', { userEmail: null })
    commit('setState', { userName: null })
    commit('SET_USER', null)
    this.$router.push('/')
  },
  checkToken({ commit }) {
    commit('setState', { token: localStorage.getItem('token') })
    commit('setState', { userName: localStorage.getItem('userName') })
    commit('setState', { userEmail: localStorage.getItem('userEmail') })
  },
  getUserInfo({ commit, rootState }) {
    const token = rootState.token
    const base64Url = token.split('.')[1]
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map(function(c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
        })
        .join('')
    )
    commit('setState', { userInfo: JSON.parse(jsonPayload) })
  }
}
