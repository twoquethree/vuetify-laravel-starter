import localforage from 'localforage'
import {
  isEmpty
} from 'lodash'

export const setToken = ( state, token ) => {
  if ( isEmpty( token ) ) {
    localforage.removeItem( 'authtoken', token )
    return
  }
  localforage.setItem( 'authtoken', token )
}

export const setAuthenticated = ( state, boolean ) => state.user.authenticated = boolean


export const setUserData = ( state, data ) => state.user.data = data
