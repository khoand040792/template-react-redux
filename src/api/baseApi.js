
/**
 * @param {*} url : string // url remote
 * @param {*} method : string // GET or POST
 * @param {*} dataBody : object // data body
 * @param {*} token: string // token auth2 from server
 */
export const Ajax = (url, method, dataBody = null, token = '') => {
    let header = {
        method: method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify(dataBody),
    }

    // remove body if method is get or it not has body
    if (!dataBody) {
        delete header.body;
    }

    if (!token) {
        delete header.headers.Authorization;
    }

    return fetch(url, header);
}