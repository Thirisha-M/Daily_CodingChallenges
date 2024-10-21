function duplicate(num) {
    var arr = [];
    for (var _i = 0, num_1 = num; _i < num_1.length; _i++) {
        var i = num_1[_i];
        if (num.indexOf(i) === num.lastIndexOf(i)) {
            arr.push(i);
        }
    }
    return arr;
}
console.log(duplicate([1, 2, 3, 1]));
