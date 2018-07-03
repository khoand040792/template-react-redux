import { connect } from 'react-redux';
import Account from '../account/account';
import loginUser from '../../actions/accountActions/actionCreators';

const mapStateToProps = (state) => {
    return {
        token: state.accesstken
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (username, passwork) => dispatch(loginUser(username, passwork))
    }
}

export const AccountContainer = connect(mapStateToProps, mapDispatchToProps)(Account);