import {
  LoginComponent
} from '../components'

export default [{
  path: '/login',
  component: LoginComponent,
  name: 'login',
  meta: {
    guest: true,
    needsAuth: false
  }
}, ]
