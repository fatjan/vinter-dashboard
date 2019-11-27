import createPersistedState from 'vuex-persistedstate'
export default ({ store }) => {
  createPersistedState({
    key: 'vinter',
    paths: [
      'login.token',
      'login.userName',
      'login.userEmail',
      'login.userRole'
    ]
  })(store)
}
