/**
 * Created by chuanlong on 2014/11/4.
 */
myApp.directive('filter', function () {
    return {
        restrict: 'E',
        replace: true,
        template: '<div class="filterList list-group" ng-show="mask">' +
        '<a href="javascript:;" class="list-group-item active">{{filterTitle}}筛选：<button type="button" class="close" ng-click="toggle()"><span aria-hidden="true">&times;</span></button></a>' +
        '<a ng-repeat="item in filterList" class="list-group-item" data-key="{{item.key}}">' +
        '{{item.val}}</a>' +
        '</div>',
        link: function (scope, el, attrs) {
            el.css('left', document.body.clientWidth / 2 - el[0].offsetWidth / 2 + 'px');
            el.on('click', function (e) {
                if (e.target.nodeName !== 'SPAN') {
                    scope.$apply(function () {
                        scope.filterType = scope.filterTitle + ':' + e.target.textContent;
                        scope.key = e.target.getAttribute('data-key');
                        scope.getList();
                        scope.toggle();
                    });
                }
            });
        }
    }
});
myApp.directive('mask', function () {
    return {
        restrict: 'E',
        replace: true,
        template: '<div ng-show="mask" class="mask"></div>',
        link: function (scope, el, attrs) {
            el.on('click', function () {
                scope.$apply(function () {
                    scope.toggle();
                });
            })
        }
    }
});
myApp.directive('searchtxt', function () {
    return {
        restrict: 'E',
        replace: true,
        template: '<input class="form-control" type="text" placeholder="楼盘名称" noce-text="key"/>',
        link: function (scope, el, attrs) {
            el.on('blur', function () {
                var key = this.value;
                scope.$apply(function () {
                    scope.key = key;
                    scope.filterType = '"' + key + '"';
                    scope.type = 'search';
                });
            });
        }
    }
});
myApp.directive('houselist', function () {
    return {
        restrict: 'E',
        replace: true,
        template: '<a ui-sref="detail({hid:item.hid})"><div class="right pull-left">' +
        '<div class="listInfo">' +
        '<div class="title" ng-bind="item.name"></div>' +
        '<div>{{item.qy}}<span class="price" ng-bind="item.price"></span></div>' +
        '<div ng-bind="item.addr"></div>' +
        '<div class="houseType" ng-bind="item.lx"></div>' +
        '</div>' +
        '</div>' +
        '<div class="left pull-left">' +
        '<img src="http://fc.0372.cn/UploadImages/fangchan/201409/24/20140924180924352-300x225.jpg" alt="">' +
        '</div></a>'
    }
});

myApp.directive('menu', function () {
    return {
        restrict: 'E',
        replace: true,
        template: '<div class="header">' +
        '<ul ng-show="showMe"><li ng-repeat="item in menus"><a ui-sref="{{item.link}}">{{item.txt}}</a></li></ul>' +
        '<div class="row"><div class="col-xs-6 text-left">' +
        '<a ui-sref="{{backUrl}}"><span class="glyphicon glyphicon-circle-arrow-left menuico"></span></a>' +
        '</div><div class="col-xs-6 text-right">' +
        '<span class="glyphicon glyphicon-list menuico" ng-click="toggle()"></span>' +
        '</div></div></div>',
        link: function (scope, el, attrs) {
            scope.showMe = false;
            scope.toggle = function () {
                scope.showMe = !scope.showMe;
            }
        }
    }
});

myApp.directive('dtdir', function () {
    return {
        restrict: 'E',
        replace: true,
        template: '<div class="panel panel-blue"><div class="panel-heading">楼盘动态<span class="glyphicon glyphicon-chevron-right pull-right" ui-sref="dt({hid:hid})">&nbsp;</span></div><div class="panel-body">设定是否感到十分感动高富帅的啊手动阀手动阀阿三地方似的发射点士大夫士大夫阿三地方阿迪斯</div></div>',
        link: function (scope, el, attr) {

        }
    }
});
myApp.directive('hxdir',function(){
    return{
        restrict:'E',
        replace:true,
        template:'<div class="panel panel-blue"><div class="panel-heading">主力户型<span class="glyphicon glyphicon-chevron-right pull-right" ui-sref="hxlist({hid:hid})">&nbsp;</span></div><ul class="list-group"><li class="list-group-item" ng-repeat="item in items"><span class="badge">14㎡</span>E户型 3室2厅2卫3阳台</li></ul></div>',
        link:function(scope,el,attr){

        }
    }
});