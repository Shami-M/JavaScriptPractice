// //Write a function that resturns the reverse of a string

function reverseString(str) {
  return str.split('').reverse().join('');
}

// //OR
// function reverseString(str) {
//   let reversed = '';
//   for (let i = str.length-1; i >= 0; i--) {
//     reversed += str[i];
//   }
//   return reversed;
// }

console.log(reverseString('Hello world'));

// //-------------------------------------------------------------------------------------

// //Write a function that returns the longest word in the sentence
// function lonestWord(sentence){
//     const words = sentence.split(' ');
//     let longest = '';

//     for(let word of words){
//         if(word.length > longest.length){
//             longest = word;
//         }
//     }
//     return longest;
// }

// console.log(lonestWord("The quick brown fox jumped over the lazy dog"));

// //-------------------------------------------------------------------------------------

// function findMaxElement(arr) {

//     // if (arr.length === 0) {
//     //     return null; // Return null for empty array
//     // }

//     let max = arr[0]; // Initialize max with the first element
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i]; // Update max if current element is greater
//         }
//     }
//     return max; // Return the maximum element 
// }

// // Example usage:
// let numbers = [10, 5, 8, 15, 3];
// console.log(findMaxElement(numbers));

// //-------------------------------------------------------------------------------------

// //Write a function that check whether the given string is a palindrome or not in javascript
// function isPalindrome(str) {
//   const reversed = str.split('').reverse().join('');
//   return str === reversed;
// }

// //Palindrome is a word, phrase, or sequence that reads the same backwards as forwards, e.g. madam
// console.log(isPalindrome("madam"));

//-------------------------------------------------------------------------------------

// //Write a function to remove duplicate elements from an array
// function removeDuplicates(arr){

//     const newArr = [];
//     for(let i=0; i<arr.length; i++){
//         if(!newArr.includes(arr[i]) ){
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }

// //OR
// function removeDuplicates(arr) { 
//     return [...new Set(arr)];
// }

// console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));


// //-------------------------------------------------------------------------------------

// //Write a fucntion to find the largest number in an array
// function findLargest(arr){
//     let largest = arr[0];

//     for(let x=1; x<arr.length; x++){
//         if(arr[i] > largest)
//         {
//             largest = arr[i];
//         }
//     }
// return largest;
// }

// //OR 
// function findLargest(arr) {
//   return Math.max(...arr);
// }
// console.log(findLargest([10, 2, 24, 30, 14, 4]));

//-------------------------------------------------------------------------------------

// //Write a program to remove all whitespace characters from a string
// function removeWhitespace(str){
//     return str.replace(/\s/g, '');
// }
// console.log(removeWhitespace('Hello World \n Test'));

// function removeWhitespace(str){
//     return str.replace(/ /g, '');
// }

// console.log(removeWhitespace('Hello World Test'));

// let a=0;
// for(a;a<5;a++);
// console.log(a);

//-------------------------------------------------------------------------------------
//Count the number of vowels in a given string.
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;

    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

let text = 'Hello World';
console.log(countVowels(text)); // Output: 3 (e, o, o)



