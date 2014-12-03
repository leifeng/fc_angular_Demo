/**
 * Created by chuanlong on 2014/11/8.
 */
myApp.factory('getData', function ($http) {
    return {
        getVip: function () {
            return [{
                url: '',
                name: '奖金1',
                qy: '文峰区',
                addr: '文峰路鱼的龙井路口',
                price: '4000元/平米',
                lx: '星级酒店 普通住宅 商铺 写字楼',
                hid: 1
            },
                {url: '', name: '奖金2', qy: '文峰区', addr: '文峰路鱼的龙井路口', price: '4000元/平米', lx: '星级酒店 普通住宅 商铺 写字楼', hid: 8},
                {url: '', name: '奖金3', qy: '文峰区', addr: '文峰路鱼的龙井路口', price: '4000元/平米', lx: '星级酒店 普通住宅 商铺 写字楼', hid: 7},
                {url: '', name: '奖金4', qy: '文峰区', addr: '文峰路鱼的龙井路口', price: '4000元/平米', lx: '星级酒店 普通住宅 商铺 写字楼', hid: 6},
                {url: '', name: '奖金5', qy: '文峰区', addr: '文峰路鱼的龙井路口', price: '4000元/平米', lx: '星级酒店 普通住宅 商铺 写字楼', hid: 5},
                {url: '', name: '奖金6', qy: '文峰区', addr: '文峰路鱼的龙井路口', price: '4000元/平米', lx: '星级酒店 普通住宅 商铺 写字楼', hid: 4},
                {url: '', name: '奖金7', qy: '文峰区', addr: '文峰路鱼的龙井路口', price: '4000元/平米', lx: '星级酒店 普通住宅 商铺 写字楼', hid: 3},
                {url: '', name: '奖金8', qy: '文峰区', addr: '文峰路鱼的龙井路口', price: '4000元/平米', lx: '星级酒店 普通住宅 商铺 写字楼', hid: 2}]
        },
        getFilterList: function () {
            return [{url: '', name: '奖金22', qy: '文峰区', addr: '文峰路鱼的龙井路口', price: '4000元/平米', lx: '星级酒店 普通住宅 商铺 写字楼'}]
        },
        getHxList: function () {
            return [{name: 'E户型', type: '3室2厅2卫3阳台', area: '15㎡'}, {
                name: 'E户型',
                type: '3室2厅2卫3阳台',
                area: '20㎡'
            }, {name: 'E户型', type: '3室2厅2卫3阳台', area: '16㎡'}, {
                name: 'E户型',
                type: '3室2厅2卫3阳台',
                area: '21㎡'
            }, {name: 'E户型', type: '3室2厅2卫3阳台', area: '17㎡'}, {
                name: 'E户型',
                type: '3室2厅2卫3阳台',
                area: '22㎡'
            }, {name: 'E户型', type: '3室2厅2卫3阳台', area: '18㎡'},
                {name: 'E户型', type: '3室2厅2卫3阳台', area: '19㎡'}]
        }
    }
});