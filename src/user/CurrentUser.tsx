import { css } from 'emotion'
import * as React from 'react';
import { connect } from 'react-redux';

import { IRootState } from '../store/redux';
import { ICurrentUser } from './current-user.model';
import UserDetails from './UserDetails';

const mapStateToProps = (state: IRootState) => {
  return {
    currentUser: state.currentUser
  };
};

interface IProps {
  currentUser: ICurrentUser
}
const styles = css`
  margin-left: auto;
`;

const UserAccount = ({ currentUser }: IProps) => {
  return <div className={styles}><UserDetails name={currentUser.name} photoURL={currentUser.photoURL} /></div>;
};

export default connect(mapStateToProps)(UserAccount);
