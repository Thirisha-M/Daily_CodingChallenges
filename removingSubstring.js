function removingsubstring(str) {
    var result = str;
    if (result.includes("AB") || result.includes("CD")) {
        result = result.replace("AB", "").replace("CD", "");
    }
    return result.length;
}
console.log(removingsubstring("ABFCACDB"));
