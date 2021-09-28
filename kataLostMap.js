// function maps(x){
//     var arr = [''];
//     for(var i = 0; i < x.length; i++) {
//         for(i = 0; i < x[i]; i++){
//             x[i] = x[i] * 2;
//         }
        // console.log(x[i])
        // arr = x[i] * x[i];
        // return arr;
        // arr = arr + x[i];
         
//     }
//     console.log(x)
// }

function maps(x){
    var arr = [''];
    for(var i = 0; i < x.length; i++) {
        x[i] = x[i] * 2;
    }
    console.log(x)
}

console.log(maps([1, 2, 3])); // returns [2, 4, 6]
console.log(maps([2, 4, 6])); // returns [4, 8, 12]
console.log(maps([4, 1, 1, 1, 4])); // returns [8, 2, 2, 2, 8]
// console.log(maps([2, 2, 2, 2, 2, 2])); // returns [4, 4, 4, 4, 4, 4]