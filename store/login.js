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
            localStorage.setItem('token', res.result)
            localStorage.setItem('name', res.claims.name)
            localStorage.setItem('email', res.claims.email)
            localStorage.setItem('userRole', res.claims.role)
            localStorage.setItem('userId', res.claims.id)
            localStorage.setItem('is_login', true)
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
    localStorage.setItem('token', '')
    localStorage.setItem('name', '')
    localStorage.setItem('token', '')
    localStorage.setItem('email', '')
    localStorage.setItem('userRole', '')
    localStorage.setItem('userId', '')
    localStorage.setItem('is_login', false)
    this.$router.push('/')
  }
}
