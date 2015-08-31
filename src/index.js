//var process = require('process');
/*
 * 返回较大值
 * */
exports.bigger = function bigger(x, y){
    return x > y ? x : y;
};

/*
* 异步函数
* */
exports.asyncfun = function asyncfun(callback){
    process.nextTick(callback);
};