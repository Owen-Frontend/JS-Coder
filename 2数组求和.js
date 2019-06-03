
//数组求和

// 题目描述
// 计算给定数组 arr 中所有元素的总和
// 输入描述:
// 数组中的元素均为 Number 类型

//常规循环： 
function sum(arr) {
    var s = 0;
    for (var i=arr.length-1; i>=0; i--) {
        s += arr[i];
    }
    return s;
}

// forEach遍历： 
function sum(arr) {
    var s = 0;
    arr.forEach(function(val, idx, arr) {
        s += val;
    }, 0);
  
    return s;
};

// eval： 
function sum(arr) {
    return eval(arr.join("+"));
};