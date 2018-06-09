
import { connect } from 'react-redux';
import UserAccount from './UserAccount';

const mapStateToProps = (state: any) => {
  return {
    currentUser: state.currentUser
  };
};

export default connect(mapStateToProps)(UserAccount)
