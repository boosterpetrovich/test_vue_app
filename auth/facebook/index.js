
export default class Facebook {
    login() {
        return new Promise ( (resolve,reject) => {
            var user = {
                id: null,
                name: null,
                email: null,
                mobile: null,
                bdate: null,
                link: null,
                gender: null,
                picture: {
                    is_silhouette: null,
                    url: null
                },
                auth: {
                    accessToken: null,
                    expiresIn: null
                },
                expires: null
            }
            this._loadSDK()
            .then( (response) => {
                console.log(response)
                return this._getLoginStatus()
            })
            .then( (response) => {
                if(response.status === 'connected') {
                    user.auth.accessToken = response.authResponse.accessToken
                    user.auth.expiresIn = response.authResponse.expiresIn

                    return this._getProfile()
                } else {
                    window.location = encodeURI("https://www.facebook.com/dialog/oauth?client_id=" + fbApp + "&redirect_uri=" + fbRedirect + "&response_type=token");
                    resolve(response)
                }
            })
            .then( (response) => {
                user.id = response.id
                user.name = response.name
                user.gender = response.gender
                user.link = response.link

                var userId = user.id
                return userId
            })
            .then( (id) => {
                return this._getPicture(id)
            })
            .then( (response) => {
                user.picture.is_silhouette = response.data.is_silhouette
                user.picture.url = response.data.url

                resolve(user)
            })
            .catch( (response) => {
                reject(response)
            })
        })
    }

    _loadSDK() {
        return new Promise ( (resolve,reject) => {
            window.fbAsyncInit = function() {
              FB.init({
                appId      : '',
                xfbml      : true,
                version    : 'v2.8'
              });

              resolve('ready')
            };

            (function(d, s, id){
               var js, fjs = d.getElementsByTagName(s)[0];
               if (d.getElementById(id)) {return;}
               js = d.createElement(s); js.id = id;
               js.src = "//connect.facebook.net/en_US/sdk.js";
               fjs.parentNode.insertBefore(js, fjs);
             }(document, 'script', 'facebook-jssdk'));
        })
    }

    _login() {
        return new Promise ( (resolve,reject) => {
            FB.login(function(response) {
                if (!response.status === 'connected') {
                    reject(response)
                }
                resolve(response)
            })
        })
    }

    _getProfile() {
        return new Promise ( (resolve,reject) => {
            FB.api('/me', {fields: 'name,link,gender,birthday'}, function(response) {
                if (!response || response.error) {
                    reject(response);
                }
                resolve(response);
            })
        })
    }

    _getPicture(id) {
        return new Promise ( (resolve,reject) => {
            FB.api('/' + id + '/picture?type=square&width=200', function (response) {
                if (!response || response.error) {
                    reject(response);
                }
                resolve(response);
            });
        })
    }

    _getLoginStatus() {
        return new Promise ( (resolve, reject) => {
            FB.getLoginStatus(function(response) {
                if (!response || response.error) {
                    reject(response)
                }
                resolve(response)
            })
        })
    }

}
