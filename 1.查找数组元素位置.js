
//查找数组元素位置

// 题目描述
// 找出元素 item 在给定数组 arr 中的位置
// 输出描述:
// 如果数组中存在 item，则返回元素在数组中的位置，否则返回 -1

function indexof(arr,item){
    if(Array.prototype.indexOf){//数组原型自带方法indexOf可判断数组元素位置，如果存在可直接返回
        return arr.indexOf(item);
    }else{
        for(var i=0;i<arr.length;i++){//如果原型方法不存在，则循环遍历判断
            if(arr[i]===item){
                return i;
            }
        }
    }
    return -1;//数组中不存在该元素，返回-1
}