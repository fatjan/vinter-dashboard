export default ({ app, redirect, store }) => {
  const token = store.login.token
  // check if user not logged in or not have cid
  if (token === '' || token == null) {
    store.dispatch('ui/showAlert', {
      msg: 'Aunauthorized. You need to login first.',
      timeout: 4000,
      color: 'error'
    })
    return redirect('/')
  }

  // get payload from token
  const payload = token && JSON.parse(window.atob(token.split('.')[1]))
  // check expiry token
  if (Date.now() / 1000 > payload.exp) {
    store.dispatch('ui/showAlert', {
      msg: 'Your session is expired. Kindly login again to continue.',
      timeout: 4000,
      color: 'error'
    })
    store.dispatch('logout')
    return redirect('/')
  }
}
