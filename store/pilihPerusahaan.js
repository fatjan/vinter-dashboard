export const state = () => ({
  listCompany: [],
  companyId: ''
})

export const mutations = {
  setState(state, params) {
    const keys = Object.keys(params)
    keys.forEach((key) => (state[key] = params[key]))
  }
}

export const actions = {
  setAllCompany({ commit }, outcome) {
    commit('setState', {
      listCompany: outcome.result
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
    const token = this.state.token
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
  },
  addProduct({ dispatch }, item) {
    const token = this.state.token
    const userId = this.state.userId
    this.$axios.setToken(token, 'Bearer')
    this.$axios.setHeader('Content-Type', 'application/json', ['post'])
    return new Promise((resolve, reject) => {
      this.$axios
        .$post('product', {
          name: item.name,
          product_type_id: item.type,
          description: item.desc,
          user_id: userId
        })
        .then((res) => {
          if (res.message.title === 'Success') {
            resolve()
            const alertMsg = {
              msg: 'Product is successfully added.'
            }
            dispatch('ui/showAlert', alertMsg, { root: true })
            this.name = ''
            this.type = ''
            this.description = ''
          }
        })
        .catch((err) => {
          if (err.response === undefined) {
            reject(new Error('Something wrong'))
          } else {
            reject(err.response.data.message.body)
          }
        })
    })
  },
  editProductById({ dispatch }, item) {
    const token = this.state.token
    const userId = this.state.userId
    this.$axios.setToken(token, 'Bearer')
    this.$axios.setHeader('Content-Type', 'application/json', ['put'])
    return new Promise((resolve, reject) => {
      this.$axios
        .$put('product/' + item.id, {
          name: item.name,
          product_type_id: item.product_type_id,
          description: item.description,
          user_id: userId
        })
        .then((res) => {
          if (res.message.title === 'Success') {
            resolve()
            const alertMsg = {
              msg: 'Product is successfully edited.'
            }
            dispatch('ui/showAlert', alertMsg, { root: true })
          }
        })
        .catch((err) => {
          if (err.response === undefined) {
            reject(new Error('Something wrong'))
          } else {
            reject(err.response.data.message.body)
          }
        })
    })
  },
  deleteProductById({ state }) {
    const token = this.state.token
    this.$axios.setToken(token, 'Bearer')
    this.$axios.setHeader('Content-Type', 'application/json', ['delete'])
    return this.$axios
      .$delete('product/' + state.productID)
      .then((Response) => {})
      .catch((error) => {
        // handle error
        if (error.response.status === 404) {
          console.log('aaaa')
        }
      })
  }
}
