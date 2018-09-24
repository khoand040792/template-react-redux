
const Token_remote_Key = 'Token_remote';

export const GetTokenPersitant = () => JSON.parse(localStorage.getItem(Token_remote_Key));

export const SetTokenPersitant = (token) => {
    localStorage.setItem(Token_remote_Key, JSON.stringify({
        accesstoken: token,
        isAuthenticated: true
    }))
}

export const RemoveTokenPersitant = () => {
    localStorage.removeItem(Token_remote_Key)
}

