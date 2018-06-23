import { REMOVE_CURRENT_USER, SET_CURRENT_USER } from './current-user.actions';

const initialState = {
  email: null,
  loading: true,
  name: null,
  photoUrl: null,
  roles: null
};

export function currentUser(state = initialState, action: any) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return Object.assign({}, state, {
        email: action.currentUser.email,
        loading: action.currentUser.loading,
        name: action.currentUser.name,
        photoURL: action.currentUser.photoURL,
        roles: action.currentUser.roles
      });

    case REMOVE_CURRENT_USER:
      return {
        email: null,
        loading: null,
        name: null,
        photoURL: null,
        roles: null
      };
    default:
      return state;
  }
}
