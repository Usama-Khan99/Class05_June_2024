// Revision of arrays
// pop (remove last element from array)
// push (add element in last)
// shift (remove first element)
// unshift (add element in fist place)
// Slice 
// Splice
var grocery = ['Atta', 'Chawal', 'Cheeni'];
grocery[0] = '1 kg Atta'; // Overwrite array variable
grocery[1] = '5 kg chaawal';
grocery[2] = '3 kg cheeni';
console.log(grocery.length);
console.log(grocery[grocery.length - 1]); // uSE TO FIND THE LAST ELEMENT OF arrray
//  Multidimensional Array 
var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9] // 2
];
console.log(matrix[2][1]);
// Home Wrok  "Tuples (is m array ka specific sixe/length btana parhta h"
// Loops 
// For loop  (use when we have to do one work multiple times)
// round brackets m 3 cheexy dena laxmi h, 1 statement, 2 expression, 3 actual action)
// yaha py i ko iterator kehty h
console.log('START');
for (var i = 0; i < 10; i++) {
    console.log("Hello World");
}
console.log('EXIT');
// 1 iteration m pehly statement chalyga phr 2 expression chalygi or agr expression true hui tou
// action perform nh hoga wo direct code run py chala jayga phr dusri bari m sbb sy pehly action perform hoga jou k
// iterator m 1 + kar dyga
var students = ['Ahmad', 'Ali', 'Bilal', 'Kashif'];
for (var j = 0; j < students.length; j++) {
    console.log("Assalam o Alaikum ".concat(students[j]));
}
