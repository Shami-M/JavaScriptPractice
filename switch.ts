
let day: number = 3;
switch (day) {
case 1:
console.log("Monday");
break;
case 2:
console.log("Tuesday");
break;
case 3:
console.log("Wednesday");
break;
case 4:
console.log("Thursday");
break;
default:
console.log("Invalid day");
}

// Print the season based on the month number.
let monthNumber:number = 10;

switch(monthNumber){
    case 1:
    case 2:
    case 12:
        console.log('Summer');
        break;
    case 3:
    case 4:
    case 5:
        console.log('Autumn');
        break;
    case 6:
    case 7:
    case 8:
        console.log('Winter');
        break;
    case 9:
    case 10:
    case 11:
        console.log('Spring');
        break;
    default:
        console.log('Invalid number');
}
