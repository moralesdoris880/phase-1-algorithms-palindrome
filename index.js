function isPalindrome(word) {
  let reverseWord = "";
  reverseWord = word.split('')
  reverseWord = reverseWord.reverse();
  reverseWord = reverseWord.join('');
  if (reverseWord === word){
    return true
  }
  else{
    return false
  }

  console.log(reverseWord)
}

/* 
  Add your pseudocode here

  1. Make a function called is Palindrome that takes in string
  2. Reverse the string
  3. If statement to check that reverse is equal to original string
  4. If it is then it will return true
  5. else it will return false
*/

/*
  TAKE A STRING AND REVERSES IT , IF IT IS SIMILAR TO ORIGINAL STRING IT WILL BE TRUE
  IF NOT IT WILL BE FALSE
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
