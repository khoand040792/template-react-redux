import { ACCOUNT_LOGIN } from '../../actions/accountActions/actionName.js';
import AccountApi from '../../api/account.js';

/*
* @param: username: string 
* @param: password: string 
*/
export default function loginUser(username, password){
    return (dispatch) => {
        AccountApi.login(username, password).then(
            (data) => dispatch({
                type: ACCOUNT_LOGIN,
                account: data.accesstoken
            })
            // (error) => dispatch({
            //     type: 
            // })
        )
    }
}