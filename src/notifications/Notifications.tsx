import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import * as React from 'react';
import { connect } from 'react-redux';

import { IRootState, store } from '../store/redux';
import { INotificationsState, removeUserNotification } from './index';



const mapStateToProps = (state: IRootState) => {
  return {
    notifications: state.notifications
  };
};

interface IProps {
  notifications: INotificationsState 
}
const handleClose = (reason: any) => {
  if (reason === 'clickaway') {
    return;
  }
  store.dispatch(removeUserNotification())
};

const Notifications = ({ notifications }: IProps) => {
  return (
    <Snackbar
      anchorOrigin={{
        horizontal: 'center',
        vertical: 'bottom'
      }}
      open={Boolean(notifications.message)}
      autoHideDuration={5000}
      onClose={handleClose}
      ContentProps={{
        'aria-describedby': 'message-id',
      }}
      message={<span id="message-id">{notifications.message}</span>}
      action={[
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          onClick={handleClose}
        >
          <CloseIcon />
        </IconButton>,
      ]}
    />
  )
}
export default connect(mapStateToProps)(Notifications);
