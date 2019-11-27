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
  // ==================================================================================================================
  // ***********************************************PROCESSING DATA RESULT FROM AXIOS*************************************************
  // ==================================================================================================================
  /*
   * Change the state based on the results from axios
   * @return nothing
   */

  setAllProduct({ commit }, outcome) {
    commit('setState', { listProduct: outcome.data.records })
  },
  setAllProductType({ commit }, outcome) {
    commit('setState', { listProductType: outcome.data })
  },
  setProduct({ commit }, outcome) {
    commit('setState', { name: outcome.data.Name })
    commit('setState', { type: outcome.data.Type })
    commit('setState', { description: outcome.data.Desc })
  },
  setAllProductDropdown({ commit }, outcome) {
    commit('setState', { listProductDropdown: outcome.data })
  },
  // ==================================================================================================================
  // ***********************************************AXIOS TO CRUD DATA*************************************************
  // ==================================================================================================================
  /*
   * Function getAllProduct
   * Desc get data Product
   * @return promise
   */

  getAllProduct() {
    const token = this.state.token
    this.$axios.setToken(token, 'Bearer')
    this.$axios.setHeader('Content-Type', 'application/json', ['get'])
    return this.$axios
      .$post('product/all', {
        page: 1,
        limit: 100,
        order_by: ['product.id'],
        filters: []
      })
      .catch((err) => {
        console.log(err.response)
      })
  },
  getAllProductType() {
    return this.$axios.$get('productType').catch((err) => {
      console.log(err.response)
    })
  },
  getAllProductDropdown() {
    const token = this.state.token
    this.$axios.setToken(token, 'Bearer')
    this.$axios.setHeader('Content-Type', 'application/json', ['get'])
    return this.$axios.$get('product/dropdown').catch((err) => {
      console.log(err.response)
    })
  },
  getProductById({ state }) {
    const token = this.state.token
    this.$axios.setToken(token, 'Bearer')
    this.$axios.setHeader('Content-Type', 'application/json', ['get'])
    return this.$axios
      .$get('product/' + state.productID)
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
