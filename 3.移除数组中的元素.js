//移除数组中的元素

// 题目描述
// 移除数组 arr 中的所有值与 item 相等的元素。不要直接修改数组 arr，结果返回新的数组

//splice
function remove(arr,item){
    var newarr = arr.slice(0);
    for(var i=0;i<newarr.length;i++){
        if(newarr[i] == item){
            newarr.splice(i,1);
            i--;
        }
    }
    return newarr;
}

//push
function remove(arr,item){
    var newarr = [];
    for(var i=0;i<arr.length;i++){
        if(arr[i] != item){
            newarr.push(arr[i]);
        }
    }
    return newarr;
}

//filter
function remove(arr,item){
    return arr.filter(function(ele){
         return ele != item;
    })
}