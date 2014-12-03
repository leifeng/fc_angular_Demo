/**
 * Created by chuanlong on 2014/10/29.
 */
myApp.controller('houseListCtrl', function ($scope, $state,getData) {

    $scope.key = '';//关键字
    $scope.type = '';//关键字类型
    $scope.filterType = '';//筛选类型
    $scope.filterList = '';//筛选条件
    $scope.filterTitle = '';//标题
    $scope.mask = false;
    $scope.result = getData.getVip();
    $scope.total = 0;//显示个数
    $scope.getList = function (type, key) {
        //请求数据

        $scope.total = $scope.result.length;
        // console.log($scope.key)
    };
    $scope.showFilter = function (str) {
        //弹出层显示
        $scope.type = str;
        $scope.filterList = $scope.filterClass[str];
        $scope.filterTitle = $scope.filterClass.title[str];
        $scope.toggle();
    };
    $scope.toggle = function () {
        $scope.mask = !$scope.mask;
    };
    //数据
    $scope.filterClass = {
        title: {
            qy: '区域',
            jg: '价格',
            lx: '类型'
        },
        qy: [
            {key: -1, val: '全部'},
            {key: 3, val: '北关区'},
            {key: 15, val: '文峰区'},
            {key: 16, val: '龙安区'},
            {key: 17, val: '殷都区'},
            {key: 18, val: '东区'},
            {key: 62, val: '汤阴'},
            {key: 63, val: '林州'},
            {key: 64, val: '内黄'},
            {key: 52, val: '开发区'},
            {key: 65, val: '滑县'},
            {key: 66, val: '安阳县'},
            {key: 87, val: '水冶'},
            {key: 107, val: '安东新城'}
        ],
        jg: [
            {key: -1, val: '全部'},
            {key: 0, val: '2000以下'},
            {key: 1, val: '2000-3000'},
            {key: 2, val: '3000-4000'},
            {key: 3, val: '4000-5000'},
            {key: 4, val: '5000以上'}
        ],
        lx: [
            {key: -1, val: '全部'},
            {key: 127, val: '住宅'},
            {key: 92, val: '商铺'},
            {key: 91, val: '写字楼'},
            {key: 112, val: '公寓'},
            {key: 4, val: '高层'},
            {key: 55, val: '复式'},
            {key: 124, val: '星级酒店'},
            {key: 19, val: '普通住宅'},
            {key: 20, val: '经济适用房'},
            {key: 132, val: '别墅'},
            {key: 59, val: '多层'},
            {key: 5, val: '小高层'},
            {key: 90, val: '花园洋房'}
        ]
    }
    $scope.menus=$state.current.data.menus;
    $scope.backUrl=$state.current.data.backUrl;
});

myApp.controller('detailCtrl', function ($scope, $state,$stateParams) {
    $scope.hid = $stateParams.hid;
    $scope.menus=$state.current.data.menus;
    $scope.backUrl=$state.current.data.backUrl;

});
myApp.controller('detailPlugCtrl',function($scope, $state,$stateParams){
    $scope.hid = $stateParams.hid;
    $scope.menus=$state.current.data.menus;
    $scope.backUrl= 'detail({hid:'+$scope.hid+'})';
});
myApp.controller('hxListCtrl',function($scope,$filter,getData){
    $scope.items=getData.getHxList();
  //  $filter('topN')($scope.items,3);
});
