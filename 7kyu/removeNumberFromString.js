/* 
remove all the numbers from the string.
 */
let filterNumbers = function(str) {
  return str.split('').filter(c => isNaN(Number(c))).join('')

}

// 1. str.split('')
//T he split('') method splits a string into an array of its characters.

// Example:

// "k5i0v359s".split('')
// ['k', '5', 'i', '0', 'v', '3', '5', '9', 's']

// Each character of the string becomes an element in an array.
// This is important because filter works on arrays, not strings.

// 2. .filter(c => isNaN(Number(c)))

// .filter() is a method on arrays.
// It iterates over each element of the array and keeps only the elements for which the callback returns true.
// Here, the callback is:

//c => isNaN(Number(c))
// 2a. What is c?
// c is the current element of the array being processed by filter.
//   For the first element of our array:

// Copy code
// ['k', '5', 'i', '0', 'v', '3', '5', '9', 's']
// First iteration: c = 'k'
//Second iteration: c = '5'
//Third iteration: c = 'i'

//And so on…

//Note: c is just a variable name. You could call it anything:

//Copy code
// filter(char => isNaN(Number(char)))
// It would work exactly the same.

//2b. Number(c)
//Converts the character c into a number.

//Examples:

// Number('5')  // 5
//Number('0')  // 0
//Number('k')  // NaN


//Number('5')  // 5
//Number('0')  // 0
//Number('k')  // NaN




// If c is a digit character ('0' to '9'), it becomes the corresponding number.
// If c is a non-digit, it becomes NaN (Not-a-Number).

// 2c. isNaN(Number(c))
//isNaN() checks if a value is "Not a Number".
//Returns true if the value is not a number, otherwise false.

// Example:

/* isNaN(Number('k')) // true   -> keep it
isNaN(Number('5')) // false  -> remove it
isNaN(Number('0')) // false  -> remove it */

// This ensures that all digits are filtered out, leaving only letters or other non-digit characters.

// 3.join('')

// After filtering, we have an array of only non-digit characters.
//.join('') combines all elements of the array back into a single string.

// Example:

// ['k', 'i', 'v', 's'].join('')
// "kivs"

// 4 Step by step example
//Input: "k5i0v359s"
//Split into array:

// ['k', '5', 'i', '0', 'v', '3', '5', '9', 's']
// Filter each element:

// Element	Number(c)	isNaN(Number(c))	Keep?
// 'k'	NaN	true	yes
/* '5'	5	false	no
'i'	NaN	true	yes
'0'	0	false	no
'v'	NaN	true	yes
'3'	3	false	no
'5'	5	false	no
'9'	9	false	no
's'	NaN	true	yes
 */
/* Resulting array: ['k', 'i', 'v', 's']

Join back into string:

"".join(['k', 'i', 'v', 's'])
// "kivs"


Correct output.

5.Summary

split('') → converts the string to an array of characters.

filter(c => isNaN(Number(c))) → keeps only characters that are not digits.

join('') → converts the filtered array back into a string. */
