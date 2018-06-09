import { SET_CURRENT_USER } from './current-user.actions';

const initialState = {
  email: null,
  loading: true,
  name: null,
  photoUrl: null
};
export function currentUser(state = initialState, action: any) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return Object.assign({}, state, {
        email: action.currentUser.email,
        loading: action.currentUser.loading,
        name: action.currentUser.name,
        photoURL: action.currentUser.photoURL
        
      });
    default:
      return state;
  }
}
