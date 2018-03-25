import Facebook from './facebook'
import Custom from './custom'

var api = {
    facebook: Facebook,
    custom: Custom
}

export default class Auth {
    constructor() {
        this._api = {}
    }

    _getApi(type) {
        if (this._api[type]) {
            return this._api[type];
        }

        if (!api[type]) {
            throw new Error(
                'Tratatata' + type
            )
        }

        this._api[type] = new api[type]();

        return this._api[type];
    }

    login(type, creds = null) {
        return this._getApi(type).login(creds)
    }

    checkAuth() {
        // var user = localStorage.getItem('user')
        // user = JSON.parse(user)
        // if (!user) {
        //     return false
        // }
        return true
    }

    getToken() {
        var user = localStorage.getItem('user')
        user = JSON.parse(user)
        if (!user.apiToken) {
            return false
        }
        return user.apiToken
    }

    removeAuth() {
        localStorage.removeItem('user')
    }
}
