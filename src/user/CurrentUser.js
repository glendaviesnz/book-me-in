// @flow
import { connect } from 'react-redux';
import UserAccount from './UserAccount';

type State = {
  currentUser: any
};
const mapStateToProps = (state: State) => {
  return {
    currentUser: state.currentUser
  };
};

const CurrentUser = connect(mapStateToProps)(UserAccount);

export default CurrentUser;
