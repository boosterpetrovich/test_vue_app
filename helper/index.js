export default class Helper {
    parseHash(val) {
        var result = null,
        tmp = [];
        var items = window.location.hash.substr(1).split("&");
        for (var index = 0; index < items.length; index++) {
            tmp = items[index].split("=");
            if (tmp[0] === val) result = decodeURIComponent(tmp[1]);
        }
        return result;
    }

    parseParams(val) {
         var result = null,
         tmp = [];
         var items = location.search.substr(1).split("&");
         for (var index = 0; index < items.length; index++) {
             tmp = items[index].split("=");
             if (tmp[0] === val) result = decodeURIComponent(tmp[1]);
         }
         return result;
     }


}
