import Swal from 'sweetalert2'

export const state = () => ({
  token: '',
  userName: '',
  userEmail: '',
  userRole: ''
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
            Swal.fire('Masokkkk')
            commit('setState', { token: res.result })
            commit('setState', { userName: res.claims.name })
            commit('setState', { userEmail: res.claims.email })
            commit('setState', { userRole: res.claims.role })
            resolve('success')
          }
        })
        .catch((err) => {
          if (err.response === undefined) {
            reject(new Error('Something wrong'))
          } else {
            reject(err.response.data)
          }
        })
    })
  },
  logout({ commit }) {
    commit('setState', { token: null })
    commit('setState', { userEmail: null })
    commit('setState', { userName: null })
    commit('setState', { userRole: null })
    this.$router.push('/')
  }
}
