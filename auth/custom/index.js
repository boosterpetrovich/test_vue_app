import Promise from 'bluebird'
import * as api from '../../api'

export default class Custom {
    login(creds) {
        return new Promise ( (resolve, reject) => {
            api.login(
                creds,
                (response) => resolve(response),
                (response) => reject(response)
            )
        })
    }

}
