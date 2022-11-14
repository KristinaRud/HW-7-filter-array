'use strict'

const array=[0, true , null, "foo", {}, function(){}];

function filterBy(arr, type) {
    return arr.filter((value) => typeof (value) != type);
}

let nonBoolean = filterBy(array, "boolean");
console.log(nonBoolean);

// const copy = [];

// function filterByForEach(arr, type) {
//     arr.forEach(value => {
//         typeof (value) != type ? copy.push(value): '';
//     });

//     return copy;
// }

// let nonStringByForEach = filterByForEach(array, "string");
// console.log(nonStringByForEach);
