export const SHOW_USER_NOTIFICATION = 'SHOW_USER_NOTIFICATION';
export const REMOVE_USER_NOTIFICATION = 'REMOVE_USER_NOTIFICATION';

export function showUserNotification(message: string) {
  return { type: SHOW_USER_NOTIFICATION, message };
}

export function removeUserNotification() {
    return { type: REMOVE_USER_NOTIFICATION };
  }
