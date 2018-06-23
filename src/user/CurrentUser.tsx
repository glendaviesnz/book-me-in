import { css } from 'emotion'
import * as React from 'react';
import { connect } from 'react-redux';

// import { ICurrentUser } from '../store/current-user.model';
import UserDetails from './UserDetails';

const mapStateToProps = (state: any) => {
  return {
    currentUser: state.currentUser
  };
};

const styles = css`
  margin-left: auto;
`;

const UserAccount = ({ currentUser }: {currentUser: any}) => {
  return <div className={styles}><UserDetails name={currentUser.name} photoURL={currentUser.photoURL} /></div>;
};

export default connect(mapStateToProps)(UserAccount);
