/**
 * Created by chuanlong on 2014/11/14.
 */
myApp.filter('topN', function () {
    return function (items,n) {
       // console.log(items)
        return items.slice(0,n);
    }
});