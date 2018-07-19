import Facebook from './facebook'
import Custom from './custom'
import iBex from './ibex'

var api = {
    facebook: Facebook,
    custom: Custom,
    ibex: iBex,
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
                'There is no api' + type
            )
        }

        this._api[type] = new api[type]();

        return this._api[type];
    }

    login(response) {
        return this._getApi(response.type).login(response.data)
    }

    checkAuth() {
        var auth = localStorage.getItem('token')
        auth = JSON.parse(auth)
        if (!auth.access_token || !auth.refresh_token || !auth) {
            return false
        }
        return true
    }

    getToken() {
        var auth = localStorage.getItem('token')
        auth = JSON.parse(auth)
        if (!auth.access_token || !auth.refresh_token || !auth) {
            return false
        }
        return auth
    }

    removeAuth() {
        localStorage.removeItem('token')
    }
}
