/*Write a function that takes a message and throws an error with that message. 
Since this function never returns, it should use the never type.
output:
Uncaught Error: This is an error*/

var throwError:(message:string)=>never
throwError = function(message:string)
{
    throw new Error(message);
}
throwError(`Uncaught Error:"This is an error"`);

/* Create a function that runs an infinite loop. The function should never return, so use the never type.
output:
This will run forever
This will run forever
... (infinite)*/

function infiniteLoop(): never {
    while (true) {
      console.log("infinite loop");
    }
  }
  infiniteLoop();
  
  


