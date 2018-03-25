import Vue from 'vue'

import {apiUrl} from '../main.js';
import Auth from '../auth'

function getAuthToken() {
    var auth = new Auth()
    var token = auth.getToken()
    if (!token) {
        errorCb('token has expired')
    }
    Vue.http.headers.common['Authorization'] = token;
}

export function getPrinters(cb, errorCb) {
    // Vue.http.headers.common['Authorization'] = token;
    //
    // Vue.http.get(apiUrl + 'test')
    // .then(
    //     function(response) {
    //         cb('success')
    //     },
    //     function(response) {
    //         errorCb('error');
    //     }
    // )
    var data = {
  "data": {
    "items": [
      {
        "companyCode": "22521",
        "portSettings": {
          "type": "SERIAL",
          "name": "COM7",
          "baudRate": "115200",
          "timeout": "10000"
        },
        "name": "ShtrihFptr"
      },
      {
        "companyCode": "000000000",
        "portSettings": {
          "type": "SOCKET",
          "name": "185.46.16.85:5051",
          "baudRate": "0",
          "timeout": "10000"
        },
        "name": "SocketShtrihFptr"
      }
    ]
  },
  "code": "success"
};
    cb(data)

}

export function createPrinter(cb, errorCb, printer) {
    // var auth = new Auth()
    // var token = auth.getToken()
    // if (!token) {
    //     errorCb('token has expired')
    // }
    // Vue.http.headers.common['Authorization'] = token;

    // Vue.http.get(apiUrl + 'test')
    // .then(
    //     function(response) {
    //         cb('success')
    //     },
    //     function(response) {
    //         errorCb('error');
    //     }
    // )
    cb('success');

}

export function updatePrinter(cb, errorCb, printer) {
    // var auth = new Auth()
    // var token = auth.getToken()
    // if (!token) {
    //     errorCb('token has expired')
    // }
    // Vue.http.headers.common['Authorization'] = token;

    // Vue.http.get(apiUrl + 'test')
    // .then(
    //     function(response) {
    //         cb('success')
    //     },
    //     function(response) {
    //         errorCb('error');
    //     }
    // )
    cb('success');

}

export function getScanners(cb, errorCb) {
    // Vue.http.headers.common['Authorization'] = token;
    //
    // Vue.http.get(apiUrl + 'test')
    // .then(
    //     function(response) {
    //         cb('success')
    //     },
    //     function(response) {
    //         errorCb('error');
    //     }
    // )
    var data = {
  "data": [{
    "logicalName": "Voyager 1450g",
    "port": "string"
}],
  "code": "success"
};
    cb(data)

}

export function createScanner(cb, errorCb, scanner) {
    // var auth = new Auth()
    // var token = auth.getToken()
    // if (!token) {
    //     errorCb('token has expired')
    // }
    // Vue.http.headers.common['Authorization'] = token;

    // Vue.http.get(apiUrl + 'test')
    // .then(
    //     function(response) {
    //         cb('success')
    //     },
    //     function(response) {
    //         errorCb('error');
    //     }
    // )
    cb('success');

}

export function updateScanner(cb, errorCb, scanner) {
    // var auth = new Auth()
    // var token = auth.getToken()
    // if (!token) {
    //     errorCb('token has expired')
    // }
    // Vue.http.headers.common['Authorization'] = token;

    // Vue.http.get(apiUrl + 'test')
    // .then(
    //     function(response) {
    //         cb('success')
    //     },
    //     function(response) {
    //         errorCb('error');
    //     }
    // )
    cb('success');

}
