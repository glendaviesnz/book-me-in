import { connect } from 'react-redux'
import UserAccount from './UserAccount';
const mapStateToProps = state => {
    return {
        currentUser: state.currentUser
    }
}

const CurrentUser = connect(
    mapStateToProps
)(UserAccount)

export default CurrentUser