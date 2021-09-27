function maps(x){
    var arr = [''];
    for(var i = 0; i < x.length; i++) {
        // console.log(x[i])
        // arr = x[i] * x[i];
        // return arr;
        arr = arr + x[i];
        console.log(arr)
    }
}

console.log(maps([1, 2, 3])); // returns [2, 4, 6]