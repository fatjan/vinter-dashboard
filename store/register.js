export const mutations = {
  setState(state, params) {
    const keys = Object.keys(params)
    keys.forEach((key) => (state[key] = params[key]))
  }
}

export const actions = {
  regist({ dispatch }, { name, email, password }) {
    return new Promise((resolve, reject) => {
      this.$axios
        .$post('intern', {
          name,
          email,
          password
        })
        .then((res) => {
          if (res.status === 'success') {
            resolve()
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
  }
}
