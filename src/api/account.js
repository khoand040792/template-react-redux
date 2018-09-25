import 'whatwg-fetch';
//import { Ajax } from './baseApi';
import { SetTokenPersitant } from '../common/utilities/utilities';

let AccountApi = {
    login(username, password) {
        // return fetch('url', {
        //     method: "post",
        //     body: JSON.stringify({
        //         username: username,
        //         password: password
        //     })
        // }).then((response) => response.json());
        //return ajax("url", "get");
        /**
         * call success save token to localStorare for persitance data when refresh page
         */
        SetTokenPersitant('_fakeToken_');
        return { username, password };
    }
}
export default AccountApi;