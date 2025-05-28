// Question1
// You are building a system that sends email reminders to users 5 seconds after they register.Create an async function sendReminder(email) that waits 5 seconds using setTimeout and then logs"Reminder sent to [email]". Simulate sending a reminder to 3 users.
//input=email(string),
//create async function with email as the parameter
// create a another function of class promise
//  with two callback functions setTimeout that has parameter of 5 seconds and resolve 
//initialize a variable that will hold the emails
// loop through the emails 
//call the functionwithh  email as an argument

//output=String

 const sendReminder= async(email) =>{
    await new Promise((resolve) =>setTimeout(resolve,5000)) 
    console.log(`Reminder sent to ${email} `);
    
 }
  const emails = ['konduen@gmail.com', 'Magretjumbe@gmail.com', 'ushimukami@gmail.com'];

 emails.forEach(email=>{
 sendReminder(email)

 });



// Question2


// You want to simulate a login system that tries to log in a user.
//  The first two attempts fail, but the third succeeds. Write a function tryLogin() that uses a counter and Promises.
//  Use setTimeout to simulate a 1-second delay between attempts. Log "Login successful" or "Login failed after 3 attempts" 
// based on whether login succeeds.

//input =Interger

// create an async function
// initialize a varriable to hold the counts
// loop while seting a condition 
// use await new promise class  and increment the counter
//set a condtion to log the successfull login and unseccessful login
//output string

async function tryLogin() {
    let attempts = 0;
    while (attempts < 3) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        attempts++;
        if (attempts === 3) {
            console.log("Login successful");
        
        } else {
            console.log(`Attempt ${attempts}: Login failed`);
        }
    }
 
}
tryLogin()




// Question 3

// Build a countdown timer that counts down from 5 to 0, displaying one number per second using setInterval. When the countdown reaches 0, 
// stop the interval and log "Time's up!".

// Input integer
//create a variable to hold a function setInterval which will be seting a 1 second
// initialize a variable to hold the count
// loop through use a condition  and log the count while decrementing the count
//check if the count is at zero and log time's up
//clear the interval 
// //output string with counts


  let count=5;
const countDownInterval=setInterval(()=>{
    console.log(`countdown at ${count}`);
    count--; 
    if(count<1){
          clearInterval(countDownInterval);
        console.log(`Time's up!`);
    }  
}
,1000);




// Question 4

// You are simulating a page that loads data in stages. Create an async function called loadPage() that: logs "Loading header...", 
// waits 1 second; logs "Loading content...", waits 2 seconds; logs "Loading footer...", waits 1 second; and finally logs "Page fully loaded".
//  Use setTimeout inside Promises and await them in sequence.

//input string
// create a function loadpage
//log the first statement and use the await with the new class promise while setting a time interval
//repeat the process until are the messages are logged
// call the function to output the result

    
// Output strings


async function loadPage(){
    console.log("Loading header...");
    await new Promise((resolve) => setTimeout(resolve,1000))
     console.log("Loading content...");
    await new Promise((resolve) => setTimeout(resolve,2000))
     console.log("Loading footer...");
    await new Promise((resolve) => setTimeout(resolve,1000))  
     console.log("Page fully loaded...");  
}
loadPage()



//Question5

//  You are simulating fetching stock prices with delays.
//   Write a function fetchPrice(symbol) that returns a Promise which resolves after 2 seconds with the message "Price for [symbol] retrieved". 
//  Use async/await to call it for two different stocks ("AAPL" and "GOOG") and log the messages in order.

//input=string
//create a function fetchPrice 
//return q new promise class with a function thar will return a string while seting the timeout 
// create another function 
//initialize a variable to hold the first symbol 
//initialize another variable to hold the second symbol
// log the variables 
// call the function

// output=String


function fetchPrice(symbol){
    return new Promise(resolve=> {
        setTimeout(()=>{
        resolve (`Price for ${symbol} retrieved`);
    },2000);
});
}
async function fetchPriceAsync(){
    const symbol1= await fetchPrice('AAPL')
    console.log({symbol1});
    const symbol2=await fetchPrice('GOOG')
    console.log({symbol2});   
}
fetchPriceAsync()























