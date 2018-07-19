import {redirectUrl} from '../../main.js'
import {apiUrl} from '../../main.js'

export default class iBex {
    login(data) {        
        window.location = encodeURI(apiUrl + 'oauth/auth?client_id=' + data.clientId + '&response_type=code&redirect_uri=' + redirectUrl + '&state=' + data.authState);
    }
}
