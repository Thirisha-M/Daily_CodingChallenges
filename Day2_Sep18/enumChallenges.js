/*Create an enum called Direction with values North, East, South, and West. Then, log the value of Direction.North.
output:
0*/
var direction;
(function (direction) {
    direction[direction["east"] = 0] = "east";
    direction[direction["west"] = 1] = "west";
    direction[direction["north"] = 2] = "north";
    direction[direction["south"] = 3] = "south";
})(direction || (direction = {}));
console.log(direction.east);
/*Create an enum called StatusCode with custom values: Success = 200, NotFound = 404, and ServerError = 500.
Log the value of StatusCode.ServerError.
output:
500*/
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["success"] = 200] = "success";
    StatusCode[StatusCode["Notfound"] = 404] = "Notfound";
    StatusCode[StatusCode["ServerError"] = 500] = "ServerError";
})(StatusCode || (StatusCode = {}));
console.log(StatusCode.ServerError);
/*Create an enum called Colors with values Red = 1, Green, and Blue. Log the reverse mapping for the value 1.
output:
Red*/
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 1] = "Red";
    Colors[Colors["Green"] = 2] = "Green";
    Colors[Colors["Blue"] = 3] = "Blue";
})(Colors || (Colors = {}));
console.log(Colors.Red);
console.log(Colors[1]);
/*Create a string-based enum called OrderStatus with values Pending, Shipped, and Delivered.
Log the value of OrderStatus.Shipped.
output:
SHIPPED*/
var orderStatus;
(function (orderStatus) {
    orderStatus["Pending"] = "PENDING";
    orderStatus["Shipped"] = "SHIPPED";
    orderStatus["delivered"] = "DELIVERED";
})(orderStatus || (orderStatus = {}));
console.log(orderStatus.Shipped);
/*Create an enum called Days with values Monday, Tuesday, Wednesday, etc.
Write a function that takes a Days value as a parameter and logs whether it is a weekday or weekend.
output:
Tuesday is a weekday*/
var Days;
(function (Days) {
    Days["Monday"] = "Monday";
    Days["Tuesday"] = "Tuesday";
    Days["Wednesday"] = "Wednesday";
    Days["Thursday"] = "Thursday";
    Days["Friday"] = "Friday";
    Days["Saturday"] = "Saturday";
    Days["Sunday"] = "Sunday";
})(Days || (Days = {}));
var checkday;
checkday = function (day) {
    if (day == "Saturday" || day == "Sunday") {
        console.log("".concat(day, " is a weekend"));
    }
    else {
        console.log("".concat(day, " is a weekday"));
    }
};
checkday(Days.Tuesday);
