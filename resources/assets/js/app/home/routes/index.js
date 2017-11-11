import {
  HomeComponent
} from '../components'

export default [{
  path: '/',
  component: HomeComponent,
  name: 'home',
  meta: {
    guest: false,
    needsAuth: true
  }
}]
