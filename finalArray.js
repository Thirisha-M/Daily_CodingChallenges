function finalArray(nums, k, multiplier) {
    for (var i = 0; i < k; i++) {
        var minIndex = 0;
        for (var j = 1; j < nums.length; j++) {
            if (nums[j] < nums[minIndex]) {
                minIndex = j;
            }
        }
        nums[minIndex] *= multiplier;
    }
    return nums;
}
console.log(finalArray([2, 1, 3, 5, 6], 5, 2));
console.log(finalArray([1, 2], 3, 4));
