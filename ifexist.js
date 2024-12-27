function Ifexist(num) {
    var seen = new Set();
    for (var _i = 0, num_1 = num; _i < num_1.length; _i++) {
        var n = num_1[_i];
        if (seen.has(n * 2) || (n % 2 == 0 && seen.has(n / 2))) {
            return true;
        }
        seen.add(n);
    }
    return false;
}
console.log(Ifexist([10, 5, 2, 3])); //true
console.log(Ifexist([3, 1, 7, 11]));
