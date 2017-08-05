import { connect } from 'react-redux'
import Login from './Login';
const mapStateToProps = state => {
    return {
        currentUser: state.currentUser
    }
}

const CurrentUser = connect(
    mapStateToProps
)(Login)

export default CurrentUser