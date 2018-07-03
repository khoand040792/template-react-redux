import 'whatwg-fetch';

let AccountApi = {
    login(username, password) {
        debugger
        return fetch('url', {
            method: "post",
            body: JSON.stringify({
                username: username,
                password: password
            })
        }).then((response) => response.json());
    }
};
export default AccountApi;