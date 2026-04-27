//Difference btw == and ===
//=== strictly check the type while == doesn't check the type
console.log(5 == '5')    // true
console.log(5 ===  '5')  //false

// //Handling Asysnchronous behaviour in JavaScript

// //Method 1--------------------------------------------------------
// //Callback functions
// // Callback function is a fucntion that is passed as an argument to another function and is executed after
// //  some operation has been completed. Often use asynchronous operations.

// function fetchData(callback){
//     setTimeout(()=>{
//         console.log('Data fetched!');
//         const data = "Sample data";
//         callback(data);
//     }, 2000);
// }

// function processData(data){
//     console.log("Processing "+ data);
// }

// function modifyData(data){
//     console.log("Modifying "+ data);
// }

// fetchData(processData);
// fetchData(modifyData);

//Method 2--------------------------------------------------------
//Using a promise
function fetchData(callback){
    return new Promise((resolve) =>{
        setTimeout(()=>{
            console.log('Data fetched!');
            const data = "Sample data";
            resolve(data);
        }, 2000);
    })
}

// //Can use this
// fetchData().then(function(data){
//     console.log("Processing " + data);
// })

//Or can use this
const data = await fetchData();
console.log("Processing " + data);



