/**
 * Implement a function called "isPalindrome" which checks
 * if the passed string is a palindrome. A "Palindrome" is a word or
 * sentence that is spelled the same way both forward and backward, 
 * ignoring punctuation, case, and spacing.
 * https://en.wikipedia.org/wiki/Palindrome
 * 
 * @param {string} str - string
 * 
 */ 

// Solution 1 with built-in JavaScript functions
let isPalindrome = (str) => {
	// Step 1. Lowercase the string and use the RegExp to remove unwanted characters from it
	let re = /[\W_]/g; // or var re = /[^A-Za-z0-9]/g;
	let lowRegStr = str.toLowerCase().replace(re, '');
	// str.toLowerCase() = "A man, a plan, a canal. Panama".toLowerCase() = "a man, a plan, a canal. panama"
  // str.replace(/[\W_]/g, '') = "a man, a plan, a canal. panama".replace(/[\W_]/g, '') = "amanaplanacanalpanama"
	// var lowRegStr = "amanaplanacanalpanama";
	
	// Step 2. Use the same chaining methods with built-in functions from the previous article 'Three Ways to Reverse a String in JavaScript'
	var reverseStr = lowRegStr.split('').reverse().join('');
	// lowRegStr.split('') = "amanaplanacanalpanama".split('') = ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"]
  // ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"].reverse() = ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"]
  // ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"].join('') = "amanaplanacanalpanama"
  // So, "amanaplanacanalpanama".split('').reverse().join('') = "amanaplanacanalpanama";
	// And, var reverseStr = "amanaplanacanalpanama";
	
	// Step 3. Check if reverseStr is strictly equals to lowRegStr and return a Boolean
  return reverseStr === lowRegStr; // "amanaplanacanalpanama" === "amanaplanacanalpanama"? => true
};

// Solution 2 with FOR loop
let isPalindrome = (str) => {

	// Step 1. The same as in solution 1
	let re = /[\W_]/g; // or var re = /[^A-Za-z0-9]/g;
	let lowRegStr = str.toLowerCase().replace(re, '');
	
	// Step 2. Create the FOR loop
	let len = lowRegStr.length; // var len = "A man, a plan, a canal. Panama".length = 30

	for (var i = 0; i < len/2; i++) {
		if (lowRegStr[i] !== lowRegStr[len - 1 - i]) { // As long as the characters from each part match, the FOR loop will go on
			return false; // When the characters don't match anymore, false is returned and we exit the FOR loop
			
			/* Here len/2 = 15
				For each iteration: i = ?    i < len/2    i++    if(str[i] !== str[len - 1 - i])?
				1st iteration:        0        yes         1     if(str[0] !== str[15 - 1 - 0])? => if("a"  !==  "a")? // false
				2nd iteration:        1        yes         2     if(str[1] !== str[15 - 1 - 1])? => if("m"  !==  "m")? // false      
				3rd iteration:        2        yes         3     if(str[2] !== str[15 - 1 - 2])? => if("a"  !==  "a")? // false  
				4th iteration:        3        yes         4     if(str[3] !== str[15 - 1 - 3])? => if("n"  !==  "n")? // false  
				5th iteration:        4        yes         5     if(str[4] !== str[15 - 1 - 4])? => if("a"  !==  "a")? // false
				6th iteration:        5        yes         6     if(str[5] !== str[15 - 1 - 5])? => if("p"  !==  "p")? // false
				7th iteration:        6        yes         7     if(str[6] !== str[15 - 1 - 6])? => if("l"  !==  "l")? // false
				8th iteration:        7        yes         8     if(str[7] !== str[15 - 1 - 7])? => if("a"  !==  "a")? // false
				9th iteration:        8        yes         9     if(str[8] !== str[15 - 1 - 8])? => if("n"  !==  "n")? // false
				10th iteration:        9        yes        10     if(str[9] !== str[15 - 1 - 9])? => if("a"  !==  "a")? // false
				11th iteration:       10        yes        11    if(str[10] !== str[15 - 1 - 10])? => if("c" !==  "c")? // false
				12th iteration:       11        yes        12    if(str[11] !== str[15 - 1 - 11])? => if("a" !==  "a")? // false
				13th iteration:       12        yes        13    if(str[12] !== str[15 - 1 - 12])? => if("n" !==  "n")? // false
				14th iteration:       13        yes        14    if(str[13] !== str[15 - 1 - 13])? => if("a" !==  "a")? // false
				15th iteration:       14        yes        15    if(str[14] !== str[15 - 1 - 14])? => if("l" !==  "l")? // false
				16th iteration:       15        no               
				End of the FOR Loop
			*/
		}
	}
	return true;
};

// DO NOT DELETE
module.exports = isPalindrome;