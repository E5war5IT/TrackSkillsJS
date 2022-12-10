/* Declaring a variable called `arrayNums` and assigning it an empty array. */
let arrayNums = [];

/**
 * It takes an array, a number of indexes to fill, and a limit number, and fills the array with random numbers.
 * @param arrayNumbers - The array that will be filled with random numbers.
 * @param countIndexs - The number of random numbers you want to generate.
 * @param limitNumber - The maximum number that can be generated.
 */
function randomNumbersToArray(arrayNumbers, countIndexs, limitNumber) {
    if (arrayNums instanceof Array && countIndexs != null && countIndexs != undefined && arrayNumbers.length == 0) {
        for (index = 0; index < countIndexs; index++) {
            arrayNumbers.push(Math.floor(Math.random()* (limitNumber || 30)));
        }
    } else {
        new Error('Invalid array instance');
    }
}

randomNumbersToArray(arrayNums, 5);
console.log(arrayNums);
console.log('filter: ' + arrayNums.filter(num => num > 10));
console.log('map: ' + arrayNums.map(num => num*5));
console.log('indexOf: ' + arrayNums.indexOf(25));
console.log('LastIndexOF: ' + arrayNums.lastIndexOf(15));
console.log('every: ' + [45, 45, 45].every(45));