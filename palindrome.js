function isPalindrome(){
    
    let word1 = prompt("Enter the first word (e.g., RACECAR): ");
    let word2 = prompt("Enter the second word (e.g., RECORDER): ");
    
    prompt("Original String 1:", word1);
    prompt("Original String 2:", word2);
    
    const reverseString = (str) => str.split("").reverse().join("");
    prompt("Reversed String 1:",reverseString(word1));
    prompt("Reversed String 2:",reverseString(word2));
    
    let isPalindrome1 = word1 === reverseString(word1);
    let isPalindrome2 = word2 === reverseString(word2);
    
    prompt(`Is "${word1}" a palindrome?`, isPalindrome1);
    prompt(`Is "${word2}" a palindrome?`, isPalindrome2);
    }