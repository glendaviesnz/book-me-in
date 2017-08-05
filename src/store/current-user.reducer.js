import {SET_CURRENT_USER} from './current-user.actions';

const initialState = {
    name: null,
    email: null,
    photoUrl: null,
    loading: true
}
export function currentUser(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return Object.assign({}, state, {
        name: action.currentUser.name,
        email: action.currentUser.email,
        photoURL: action.currentUser.photoURL,
        loading: action.currentUser.loading
      })
    default:
      return state
  }
}