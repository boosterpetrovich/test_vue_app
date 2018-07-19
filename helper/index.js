export function parseHash(val) {
        var result = null,
        tmp = [];
        var items = window.location.hash.substr(1).split("&");
        for (var index = 0; index < items.length; index++) {
            tmp = items[index].split("=");
            if (tmp[0] === val) result = decodeURIComponent(tmp[1]);
        }
        return result;
    }

export function parseParams(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

export function generateRandom() {
         return Math.floor(100000 + Math.random() * 900000);
     }

export function clearLocalStorage(key) {
    var item = localStorage.getItem(key)
    if (item) {
        localStorage.removeItem(key)
    }
    return true;
}
