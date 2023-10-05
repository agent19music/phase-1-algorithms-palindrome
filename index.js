function isPalindrome(word) {
  // Write your algorithm here
  let reversedWord = word.split('').reverse().join('');
  console.log(reversedWord);
  if (word === reversedWord) {
    return true;
  } else {
    return false;
  }
}




/* 
  Add your pseudocode here

*/

/*
  Add written explanation of your solution here
The function `isPalindrome` takes a string `word` as an input. This function is designed to check if the input word is a palindrome. A palindrome is a word that reads the same backward as forward, e.g., 'dad'.

Inside the function, the first line of code splits the input word into an array of characters, reverses that array, and then joins it back together to form a reversed string. This reversed string is stored in the variable `reversedWord`.

The next part of the function is an if-else statement that checks if the input word is equal to `reversedWord`. If they are equal, it means that the word is a palindrome, and the function returns `true`. If they are not equal, it means that the word is not a palindrome, and the function returns `false`.

This code provides a simple and efficient way to check if a word is a palindrome using JavaScript's built-in methods for manipulating strings and arrays.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expecting: true");
  console.log('=>', isPalindrome('madam'));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("ronaldo"));


}

module.exports = isPalindrome;
