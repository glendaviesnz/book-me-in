import { REMOVE_USER_NOTIFICATION, SHOW_USER_NOTIFICATION } from './notifications.actions';

export interface INotificationsState {
    message: string;
}

const initialState = {
  message: null
};

export function notifications(state = initialState, action: any) {
  switch (action.type) {
    case SHOW_USER_NOTIFICATION:
      return Object.assign({}, state, {
        message: action.message
      });

    case REMOVE_USER_NOTIFICATION:
      return Object.assign({}, state, {
        message: null
      });

    default:
      return state;
  }
}
