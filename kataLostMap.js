function maps(x){
    let y = []; // create empty array so we pass sanity check of not mutating our original data
    for(var i = 0; i < x.length; i++) {
        y[i] = x[i] * 2; // put the results into the new array
    }
    return y;
}

console.log(maps([1, 2, 3])); // returns [2, 4, 6]
console.log(maps([2, 4, 6])); // returns [4, 8, 12]
console.log(maps([4, 1, 1, 1, 4])); // returns [8, 2, 2, 2, 8]
console.log(maps([2, 2, 2, 2, 2, 2])); // returns [4, 4, 4, 4, 4, 4]
