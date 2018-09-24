import { connect } from 'react-redux';
import Account from '../account/account';
import loginUser from '../../actions/accountActions/actionCreators';
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state) => {
    return {
        token: state.account.accesstken,
        isAuth: state.account.isAuthenticated
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (username, passwork) => dispatch(loginUser(username, passwork))
    }
}

export const AccountContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Account));