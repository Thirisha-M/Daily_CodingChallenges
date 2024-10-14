/*Create an enum called Direction with values North, East, South, and West. Then, log the value of Direction.North.
output:
0*/

enum direction {
    east,
    west,
    north,
    south
}
console.log(direction.east)

/*Create an enum called StatusCode with custom values: Success = 200, NotFound = 404, and ServerError = 500. 
Log the value of StatusCode.ServerError.
output:
500*/

enum StatusCode {
    success = 200,
    Notfound = 404,
    ServerError = 500
}
console.log(StatusCode.ServerError)

/*Create an enum called Colors with values Red = 1, Green, and Blue. Log the reverse mapping for the value 1.
output:
Red*/

enum Colors {
    Red = 1,
    Green,
    Blue
}
console.log(Colors.Red);
console.log(Colors[1])

/*Create a string-based enum called OrderStatus with values Pending, Shipped, and Delivered. 
Log the value of OrderStatus.Shipped.
output:
SHIPPED*/

enum orderStatus {
    Pending = "PENDING",
    Shipped = "SHIPPED",
    delivered = "DELIVERED"

}
console.log(orderStatus.Shipped)

/*Create an enum called Days with values Monday, Tuesday, Wednesday, etc. 
Write a function that takes a Days value as a parameter and logs whether it is a weekday or weekend.
output:
Tuesday is a weekday*/


enum Days {
    Monday = "Monday",
    Tuesday = "Tuesday",
    Wednesday = "Wednesday",
    Thursday = "Thursday",
    Friday = "Friday",
    Saturday = "Saturday",
    Sunday = "Sunday"
}
var checkday: (day: Days) => void
checkday = function (day: Days) {
    if (day == "Saturday" || day == "Sunday") {
        console.log(`${day} is a weekend`)
    }
    else {

        console.log(`${day} is a weekday`);

    }
}
checkday(Days.Tuesday)

