import router from './router'
import store from './store'
import './bootstrap';
import './components'

store.dispatch('auth/setToken').then(function() {
  store.dispatch('auth/fetchUser').catch(function() {
    store.dispatch('auth/clearAuth')
    router.replace({
      name: 'login'
    })
  })
}).catch(function() {
  store.dispatch('auth/clearAuth')
})

const app = new Vue({
  el: '#app',
  router,
  store
});
