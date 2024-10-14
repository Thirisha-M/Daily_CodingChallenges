/*Write a function called printMessage that takes a string parameter and logs it to the console.
 The function should have a return type of void.
 output:
 Hello, World!*/

 
 function printMessage(message):void{
    console.log(message)
    }
    printMessage("Hello,World!*")

/*Create a function called executeCallback that takes a callback function as a parameter. 
The callback should return void. Call the callback inside the function.
output:
Callback executed!*/

function executeCallback(callback:()=>void):void{
    callback();
  }
  const myCallback =()=> {
    console.log("Callback executed!");
  }
  executeCallback(myCallback);

  /*Create a function called handleClick that takes no parameters and returns void.
   Log a message when the function is called. Simulate calling this function as if it's an event handler.
   output:
   Button clicked!*/

   function handleClick():void{
    console.log("Button clicked!*");
   }
   handleClick();

   /*Write a function called reset that resets a variable to its initial state and returns void. 
   Call the function and demonstrate that it does not return a value.
   output:
   Resetting the variable...*/

   let counter:number=10
   function reset():void{
    counter=0
    console.log("Resetting the variable...");
    }
    reset()
    console.log(`Current count value ${counter}`);

    /*Create a function called fetchData that returns a Promise that resolves to void.
     Use the function and log a message upon resolution.
     Expected Output:
     Data fetched successfully!*/

     function fetchData(): Promise<void> {
        return new Promise((resolve) => {
          resolve();  // Resolve the promise immediately
        });
      }
      
      // Use the function and log a message upon resolution
      fetchData().then(() => {
        console.log("Data fetched successfully!");
      });
      



 
  
 

 