//How would you iterate over all elements inside of an array and add them to a new empty array?
//Method 1
const arr = [1,2,3,4,5];
const newArr = [];

for(let i=0; i<arr.length; i++){
    newArr.push(arr[i]);
}
console.log(newArr);

//Method 2
const newArray = arr.map((item)=> item);
console.log(newArray);
