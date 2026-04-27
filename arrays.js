//Define an array
const fruits = ["Apple", "Banana", "Cherry", "Date"];

//Access elements by index
console.log(fruits[0]); // Apple

//Add an element to the end of the array
fruits.push("ElderBerry");
console.log(fruits); //["Apple", "Banana", "Cherry", "Date", "ElderBerry"]

//Remove the last element from the array
fruits.pop();  // ElderBerry
console.log(fruits); //["Apple", "Banana", "Cherry", "Date"]

//Add an element to the begining of the array
fruits.unshift("Fig");
console.log(fruits); //["Fig", Apple", "Banana", "Cherry", "Date"]

//Remove the frist element to the begining of the array
fruits.shift("Fig");
console.log(fruits); //["Apple", "Banana", "Cherry", "Date"]

//Find the index of an element
const index = fruits.indexOf("Cherry");
console.log(index); //2


//Extract elements from the middle of an array BUT NOT MODIFY THE ARRAY
//console.log(fruits); //["Apple", "Banana", "Cherry", "Date"]
const portion = fruits.slice(1,3); //Extract from (starting index) & (endIndex-1)
console.log(portion); //["Banana", "Cherry"]
console.log(fruits); //[Apple", "Banana", "Cherry", "Date"]

const indexToEnd =fruits.slice(2);
console.log(indexToEnd); //["Cherry", "Date"]
 
const negativeIndices =fruits.slice(-3);
console.log(negativeIndices); //["Banana", "Cherry", "Date"]
//-----------------------------------------------------------------------------
//Remove elements from the middle of an array & modify the array
console.log(fruits); //["Apple", "Banana", "Cherry", "Date"]
const exactEelementToExtract = fruits.splice(3); //Remove the given index and all the other remaining values from there
console.log(exactEelementToExtract); //["Date"]
console.log(fruits);//["Apple", "Banana", "Cherry"]

fruits.push("Date");
console.log(fruits);//["Apple", "Banana", "Cherry", "Date"]
const portionExtract = fruits.splice(1,3); //Extract from (starting index) & (endIndex)
console.log(portionExtract); //["Banana", "Cherry", "Date"]
console.log(fruits); //["Apple"]

//Insert elements to the middle of an array by modifying it
fruits.push("Orange", "Kiwi", "Rambutan"); 
console.log(fruits);//[ 'Apple', 'Orange', 'Kiwi', 'Rambutan' ]
const insert1EletMiddle = fruits.splice(2, 0, "Grapes");
console.log(fruits); //[ 'Apple', 'Orange', 'Grapes', 'Kiwi', 'Rambutan' ]

//Replace middle elements of an array by modifying it
const replece1Ele = fruits.splice(2, 1, "Strawberry");
console.log(replece1Ele); //[ 'Grapes' ]
console.log(fruits); //[ 'Apple', 'Orange', 'Strawberry', 'Kiwi', 'Rambutan' ]

//Insert 2 elements to the middle of an array by modifying it
const insert2EletMiddle = fruits.splice(2, 0, "Grapes", "WaterMelon");
console.log(fruits);



// const colors = ["Red", "Blue", "Green", "Purple"]
// //Iterate over the array
// colors.forEach((color, index) =>{
//     console.log(`${index} : ${color}`);
// })
// //Output :
// // 0: Red
// // 1: Blue
// // 2: Green
// // 3: Purple

// //-----------------------------------------------------------------------------------------
// //Create an array of objects represention students with their names and scores, the do the following.
// const students = [{name: "Alice", score: 25},
//     {name: "Bob", score: 55},
//     {name: "Charlie", score: 65},
//     {name: "David", score: 35},
//     {name: "Eve", score: 75},
// ]

// //1. Filter students who passed in the exam with score more than 36.
// const passedStudents = students.filter(student => student.score>36);
// console.log(passedStudents);

// //2. Update passed students names to uppercase.
// //map is used to modify existing details
// const namesToUpperCase = students.map(student => student.name.toUpperCase());
// console.log(namesToUpperCase);

// //3. Total score of all passing students.
// const totalScore = passedStudents.reduce(function(acc, student){
//     acc = acc + student.score;
//     return acc;
// }, 0)
// console.log(totalScore);