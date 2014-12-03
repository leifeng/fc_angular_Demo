/**
 * Created by chuanlong on 2014/10/29.
 */
var myApp = angular.module('myApp', ['once', 'ui.router']);
myApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/index');
    $stateProvider.state('index', {
        url: '/index',
        templateUrl: 'views/index.html'
    }).state('houselist', {
        url: '/houselist',
        views: {
            '': {
                templateUrl: 'views/houselist.html',
                controller: 'houseListCtrl'
            },
            'header@houselist': {
                templateUrl: 'views/header.html'

            }
        },
        data: {
            menus: [{link: 'bdt', txt: 'a'}, {link: 'dp', txt: 'b'}, {link: 'tg', txt: 'c'}],
            backUrl: 'index'
        }
    }).state('detail', {
        url: '/detail/:hid',
        views: {
            '': {
                templateUrl: 'views/detail.html',
                controller: 'detailCtrl'
            },
            'header@detail': {
                templateUrl: 'views/header.html'

            }
        },
        data: {
            menus: [{link: 'bdt', txt: '包打听'}, {link: 'dp', txt: '楼盘点评'}, {link: 'tg', txt: '看房团'}, {
                link: 'ysz',
                txt: '预售证'
            }],
            backUrl: 'houselist'
        }
    }).state('dt', {
        url: '/dt/:hid',
        views: {
            '': {
                templateUrl: 'views/dt.html',
                controller: 'detailPlugCtrl'
            },
            'header@dt': {
                templateUrl: 'views/header.html'
            }
        },
        data: {
            menus: [{link: 'bdt', txt: '包打听'}, {link: 'dp', txt: '楼盘点评'}, {link: 'tg', txt: '看房团'}, {
                link: 'ysz',
                txt: '预售证'
            }]
        }
    }).state('hxlist', {
        url:'/hxlist/:hid',
        views: {
            '': {
                templateUrl: 'views/hxlist.html',
                controller: 'detailPlugCtrl'
            },
            'header@hxlist': {
                templateUrl: 'views/header.html'
            }
        },
        data: {
            menus: [{link: 'bdt', txt: '包打听'}, {link: 'dp', txt: '楼盘点评'}, {link: 'tg', txt: '看房团'}, {
                link: 'ysz',
                txt: '预售证'
            }]
        }
    }).state('photo', {
        url: '/photo/:hid',
        templateUrl: 'views/photo.html',
        controller: 'photoCtrl'
    });
});

