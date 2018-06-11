import { connect } from 'react-redux'
import { branch, compose, renderNothing} from 'recompose';
// import renderComponent from 'recompose/renderComponent'

// import NavigationDrawer from './Navigation';
const mapStateToProps = (state: any) => {
  return {
      currentUser: state.currentUser
  };
};

const hideIfNotLoggedIn = (hasNoData: any) =>
 compose( 
 connect(mapStateToProps),
 branch(
    hasNoData,
    renderNothing
  ))
  
export default hideIfNotLoggedIn(
  ({currentUser}: any) => !currentUser ||  !currentUser.email  || currentUser.loading
)
