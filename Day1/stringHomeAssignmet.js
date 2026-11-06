/*Example 1:Input: s = "Hello World", Output: 5
Assignment Requirements:
1. Split the string into an array of words.
2. Find the last word in the array.
3. Calculate the length of this word.
*/
let S = "Hello World";
let word = S.split(" ");
let lastwords = word[word.length - 1]
let length = lastwords.length;
console.log(length); 

/* Example 2:Input: s = " fly me to the moon ", Output: 4
Example:2
1. Trim the String
2. Split the String into Words
3. Identify the Last Word
4. Calculate the Length of the Last Word
5. Return the length */

function lastword(lengths) {
  let str = lengths.trim();
  let words = str.split(" ");
  let lastWord = words[words.length - 1];
  return lastWord.length;

}
console.log(lastword("fly me to the moon "));

/* Example 3:
Input: isAnagram('listen', 'silent')
Output: true
Input: isAnagram('hello', 'world')
Output: false
Example:3
1. Remove spaces and convert all letters to the same case
2. Sort the Characters
3. Compare Sorted Strings
4. Return the Result
 */
function isAnagram(a, b) {
  let x = a.toLowerCase().replaceAll(" ", "").split("").sort().join("");
  let y = b.toLowerCase().replaceAll(" ", "").split("").sort().join("");

  return x === y;
}

console.log(isAnagram("listen", "silent")); 
console.log(isAnagram("hello", "world"));